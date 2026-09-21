package com.zuna.backend.controller;

import com.zuna.backend.dto.ApiResponse;
import com.zuna.backend.dto.ContactRequest;
import com.zuna.backend.model.ContactInquiry;
import com.zuna.backend.service.ContactService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@Tag(name = "Contact", description = "Contact form submission and inquiry management")
public class ContactController {

    private final ContactService contactService;

    /**
     * PUBLIC endpoint — called by the React contact form.
     *
     * POST /api/contact
     * Body: { "name": "...", "email": "...", "service": "...", "message": "..." }
     */
    @PostMapping("/contact")
    @Operation(summary = "Submit a contact inquiry from the website form")
    public ResponseEntity<ApiResponse<ContactInquiry>> submit(@Valid @RequestBody ContactRequest request) {
        ContactInquiry saved = contactService.save(request);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(ApiResponse.ok("Your inquiry has been received. We'll get back to you shortly!", saved));
    }

    // -------------------------------------------------------------------------
    // Admin endpoints — require HTTP Basic Auth (see SecurityConfig)
    // -------------------------------------------------------------------------

    /**
     * GET /api/admin/inquiries — list all contact submissions.
     */
    @GetMapping("/admin/inquiries")
    @Operation(summary = "[Admin] List all contact inquiries")
    public ResponseEntity<ApiResponse<List<ContactInquiry>>> list() {
        List<ContactInquiry> inquiries = contactService.findAll();
        return ResponseEntity.ok(ApiResponse.ok("Inquiries fetched successfully", inquiries));
    }
}
