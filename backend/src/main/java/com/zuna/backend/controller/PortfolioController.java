package com.zuna.backend.controller;

import com.zuna.backend.dto.ApiResponse;
import com.zuna.backend.model.PortfolioProject;
import com.zuna.backend.service.PortfolioService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/portfolio")
@RequiredArgsConstructor
@Tag(name = "Portfolio", description = "Portfolio projects — public read, admin write")
public class PortfolioController {

    private final PortfolioService portfolioService;

    // -------------------------------------------------------------------------
    // Public endpoints
    // -------------------------------------------------------------------------

    /**
     * GET /api/portfolio
     * Optional query param: ?category=E-Commerce
     */
    @GetMapping
    @Operation(summary = "List all visible portfolio projects, optionally filtered by category")
    public ResponseEntity<ApiResponse<List<PortfolioProject>>> list(
            @Parameter(description = "Filter by category, e.g. E-Commerce, SaaS, Web3, Custom Dev")
            @RequestParam(required = false) String category
    ) {
        List<PortfolioProject> projects = category != null
                ? portfolioService.findByCategory(category)
                : portfolioService.findAll();
        return ResponseEntity.ok(ApiResponse.ok("Portfolio projects fetched", projects));
    }

    // -------------------------------------------------------------------------
    // Admin endpoints — require HTTP Basic Auth
    // -------------------------------------------------------------------------

    /** POST /api/admin/portfolio — add a new project. */
    @PostMapping("/admin/portfolio")
    @Operation(summary = "[Admin] Add a new portfolio project")
    public ResponseEntity<ApiResponse<PortfolioProject>> create(@RequestBody PortfolioProject project) {
        PortfolioProject saved = portfolioService.save(project);
        return ResponseEntity.status(HttpStatus.CREATED).body(ApiResponse.ok("Project created", saved));
    }

    /** PUT /api/admin/portfolio/{id} — update a project. */
    @PutMapping("/admin/portfolio/{id}")
    @Operation(summary = "[Admin] Update a portfolio project")
    public ResponseEntity<ApiResponse<PortfolioProject>> update(
            @PathVariable Long id, @RequestBody PortfolioProject project) {
        project.setId(id);
        PortfolioProject saved = portfolioService.save(project);
        return ResponseEntity.ok(ApiResponse.ok("Project updated", saved));
    }

    /** DELETE /api/admin/portfolio/{id} — remove a project. */
    @DeleteMapping("/admin/portfolio/{id}")
    @Operation(summary = "[Admin] Delete a portfolio project")
    public ResponseEntity<ApiResponse<Void>> delete(@PathVariable Long id) {
        portfolioService.delete(id);
        return ResponseEntity.ok(ApiResponse.ok("Project deleted"));
    }
}
