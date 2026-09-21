package com.zuna.backend.repository;

import com.zuna.backend.model.ContactInquiry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContactInquiryRepository extends JpaRepository<ContactInquiry, Long> {

    /** All inquiries for a specific email address. */
    List<ContactInquiry> findByEmailOrderBySubmittedAtDesc(String email);

    /** All inquiries for a specific service. */
    List<ContactInquiry> findByServiceOrderBySubmittedAtDesc(String service);

    /** Inquiries where email notification hasn't been sent yet. */
    List<ContactInquiry> findByEmailSentFalse();
}
