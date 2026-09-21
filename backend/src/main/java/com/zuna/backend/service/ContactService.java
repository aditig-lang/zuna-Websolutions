package com.zuna.backend.service;

import com.zuna.backend.dto.ContactRequest;
import com.zuna.backend.model.ContactInquiry;
import com.zuna.backend.repository.ContactInquiryRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Handles contact form submissions.
 *
 * Flow:
 * 1. Save the inquiry to the database.
 * 2. (Optionally) send an email notification to the agency inbox.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class ContactService {

    private final ContactInquiryRepository repository;
    private final ObjectProvider<JavaMailSender> mailSenderProvider;

    @Value("${zuna.mail.enabled:false}")
    private boolean mailEnabled;

    @Value("${zuna.mail.to:zunawebsolutions@gmail.com}")
    private String mailTo;

    @Transactional
    public ContactInquiry save(ContactRequest request) {
        // 1. Persist the inquiry
        ContactInquiry inquiry = new ContactInquiry();
        inquiry.setName(request.name());
        inquiry.setEmail(request.email());
        inquiry.setService(request.service());
        inquiry.setMessage(request.message());

        ContactInquiry saved = repository.save(inquiry);

        // 2. Try to send email notification
        if (mailEnabled) {
            JavaMailSender mailSender = mailSenderProvider.getIfAvailable();
            if (mailSender != null) {
                try {
                    sendNotificationEmail(mailSender, saved);
                    saved.setEmailSent(true);
                    repository.save(saved);
                } catch (Exception e) {
                    // Non-fatal — log and continue. The inquiry is already persisted.
                    log.error("Failed to send email notification for inquiry id={}: {}", saved.getId(), e.getMessage());
                }
            } else {
                log.warn("Email enabled in properties, but JavaMailSender bean is not configured.");
            }
        } else {
            log.info("Email notifications disabled. Inquiry id={} saved for: {}", saved.getId(), saved.getEmail());
        }

        return saved;
    }

    /** Returns all inquiries — for the admin panel. */
    public List<ContactInquiry> findAll() {
        return repository.findAll();
    }

    // ---------------------------------------------------------------------------
    // Private helpers
    // ---------------------------------------------------------------------------

    private void sendNotificationEmail(JavaMailSender mailSender, ContactInquiry inquiry) {
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(mailTo);
        mail.setSubject(String.format("[Zuna] New Inquiry: %s — %s", inquiry.getService(), inquiry.getName()));
        mail.setText(buildEmailBody(inquiry));
        mailSender.send(mail);
        log.info("Email notification sent for inquiry id={}", inquiry.getId());
    }

    private String buildEmailBody(ContactInquiry i) {
        return String.format("""
                New contact form submission received on Zuna Web Solutions.
                
                ──────────────────────────────────
                Name    : %s
                Email   : %s
                Service : %s
                ──────────────────────────────────
                
                Message:
                %s
                
                ──────────────────────────────────
                Submitted at: %s
                """,
                i.getName(), i.getEmail(), i.getService(), i.getMessage(), i.getSubmittedAt()
        );
    }
}
