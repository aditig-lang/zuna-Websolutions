package com.zuna.backend.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

/**
 * DTO for the contact form submission from the React frontend.
 */
public record ContactRequest(

    @NotBlank(message = "Name is required")
    @Size(max = 120, message = "Name must be under 120 characters")
    String name,

    @NotBlank(message = "Email is required")
    @Email(message = "Email must be a valid address")
    String email,

    @NotBlank(message = "Service selection is required")
    String service,

    @NotBlank(message = "Message is required")
    @Size(min = 10, max = 2000, message = "Message must be between 10 and 2000 characters")
    String message
) {}
