package com.zuna.backend.controller;

import com.zuna.backend.dto.ApiResponse;
import com.zuna.backend.dto.LoginRequest;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@Tag(name = "Authentication", description = "Admin login authentication")
public class AuthController {

    private final AuthenticationManager authenticationManager;

    /**
     * POST /api/auth/login
     * Validates admin credentials and returns basic auth info / success status.
     */
    @PostMapping("/login")
    @Operation(summary = "Authenticate admin credentials")
    public ResponseEntity<ApiResponse<Map<String, String>>> login(@Valid @RequestBody LoginRequest request) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.username(), request.password())
            );

            Map<String, String> responseData = Map.of(
                    "username", authentication.getName(),
                    "status", "Authenticated",
                    "role", "ROLE_ADMIN"
            );

            return ResponseEntity.ok(ApiResponse.ok("Login successful!", responseData));
        } catch (AuthenticationException e) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body(ApiResponse.error("Invalid username or password"));
        }
    }
}
