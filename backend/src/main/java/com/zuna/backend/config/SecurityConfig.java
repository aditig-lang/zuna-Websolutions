package com.zuna.backend.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.zuna.backend.dto.ApiResponse;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;

/**
 * Security configuration:
 * - Public GET endpoints (/api/blog, /api/portfolio, /api/pricing, /api/services)
 * - Public contact submission (/api/contact)
 * - Public admin login check (/api/auth/login)
 * - H2 console & Swagger UI accessible without browser sign-in popups
 * - Admin CRUD (/api/admin/**) protected with Basic Auth / credentials
 * - Prevents the native browser HTTP Basic Auth pop-up modal on unauthorized access
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Value("${zuna.admin.username:admin}")
    private String adminUsername;

    @Value("${zuna.admin.password:}")
    private String adminPassword;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(AbstractHttpConfigurer::disable)
            .authorizeHttpRequests(auth -> auth
                // Allow CORS preflight OPTIONS requests globally
                .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                // Swagger UI & OpenAPI docs — public
                .requestMatchers(
                    "/",
                    "/error",
                    "/favicon.ico",
                    "/swagger-ui/**",
                    "/swagger-ui.html",
                    "/v3/api-docs/**"
                ).permitAll()
                // H2 console — public (dev)
                .requestMatchers("/h2-console/**").permitAll()
                // Public read endpoints
                .requestMatchers(HttpMethod.GET, "/api/**").permitAll()
                // Public contact form submission & login check
                .requestMatchers(HttpMethod.POST, "/api/contact", "/api/auth/login").permitAll()
                // Admin CRUD — requires authentication
                .requestMatchers("/api/admin/**").authenticated()
                // Permit any other static/root paths to avoid 401 popups
                .anyRequest().permitAll()
            )
            .httpBasic(basic -> basic.authenticationEntryPoint(customAuthenticationEntryPoint()))
            .exceptionHandling(ex -> ex.authenticationEntryPoint(customAuthenticationEntryPoint()))
            // Allow H2 console iframe rendering
            .headers(headers -> headers.frameOptions(frame -> frame.sameOrigin()));

        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    /**
     * Custom AuthenticationEntryPoint:
     * Returns JSON 401 without the WWW-Authenticate header, preventing the browser's
     * native sign-in dialog pop-up modal from appearing!
     */
    @Bean
    public AuthenticationEntryPoint customAuthenticationEntryPoint() {
        return (request, response, authException) -> {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.setContentType(MediaType.APPLICATION_JSON_VALUE);
            ObjectMapper mapper = new ObjectMapper();
            mapper.writeValue(response.getOutputStream(), ApiResponse.error("Unauthorized: Admin credentials required."));
        };
    }

    @Bean
    public UserDetailsService userDetailsService() {
        var admin = User.builder()
                .username(adminUsername)
                .password(passwordEncoder().encode(adminPassword))
                .roles("ADMIN")
                .build();
        return new InMemoryUserDetailsManager(admin);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
