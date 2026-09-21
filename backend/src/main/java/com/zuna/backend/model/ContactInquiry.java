package com.zuna.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.time.LocalDateTime;

/**
 * Persists every contact inquiry submitted via the website form.
 */
@Entity
@Table(name = "contact_inquiries")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ContactInquiry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 120)
    private String name;

    @Column(nullable = false, length = 255)
    private String email;

    @Column(nullable = false, length = 100)
    private String service;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String message;

    /** Automatically set to submission time. */
    @Column(nullable = false, updatable = false)
    private LocalDateTime submittedAt;

    /** Track if email notification was sent to the agency. */
    @Column(nullable = false)
    private boolean emailSent = false;

    @PrePersist
    protected void onCreate() {
        this.submittedAt = LocalDateTime.now();
    }
}
