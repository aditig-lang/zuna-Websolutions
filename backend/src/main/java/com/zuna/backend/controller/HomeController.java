package com.zuna.backend.controller;

import com.zuna.backend.dto.ApiResponse;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class HomeController {

    @GetMapping("/")
    @Operation(summary = "Root welcome endpoint")
    public ResponseEntity<ApiResponse<Map<String, String>>> home() {
        Map<String, String> info = Map.of(
                "name", "Zuna Web Solutions API",
                "version", "1.0.0",
                "status", "Running",
                "swaggerUi", "/swagger-ui.html",
                "h2Console", "/h2-console"
        );
        return ResponseEntity.ok(ApiResponse.ok("Welcome to Zuna Web Solutions Backend API", info));
    }
}
