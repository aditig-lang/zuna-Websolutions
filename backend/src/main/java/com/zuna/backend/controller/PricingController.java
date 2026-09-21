package com.zuna.backend.controller;

import com.zuna.backend.dto.ApiResponse;
import com.zuna.backend.model.PricingPlan;
import com.zuna.backend.service.PricingService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pricing")
@RequiredArgsConstructor
@Tag(name = "Pricing", description = "Pricing plans — public read, admin write")
public class PricingController {

    private final PricingService pricingService;

    /** GET /api/pricing — list all pricing plans in display order. */
    @GetMapping
    @Operation(summary = "List all pricing plans")
    public ResponseEntity<ApiResponse<List<PricingPlan>>> list() {
        return ResponseEntity.ok(ApiResponse.ok("Pricing plans fetched", pricingService.findAll()));
    }

    /** POST /api/admin/pricing — create a pricing plan. */
    @PostMapping("/admin/pricing")
    @Operation(summary = "[Admin] Create a pricing plan")
    public ResponseEntity<ApiResponse<PricingPlan>> create(@RequestBody PricingPlan plan) {
        PricingPlan saved = pricingService.save(plan);
        return ResponseEntity.status(HttpStatus.CREATED).body(ApiResponse.ok("Plan created", saved));
    }

    /** PUT /api/admin/pricing/{id} — update a pricing plan. */
    @PutMapping("/admin/pricing/{id}")
    @Operation(summary = "[Admin] Update a pricing plan")
    public ResponseEntity<ApiResponse<PricingPlan>> update(
            @PathVariable Long id, @RequestBody PricingPlan plan) {
        plan.setId(id);
        PricingPlan saved = pricingService.save(plan);
        return ResponseEntity.ok(ApiResponse.ok("Plan updated", saved));
    }

    /** DELETE /api/admin/pricing/{id} — delete a pricing plan. */
    @DeleteMapping("/admin/pricing/{id}")
    @Operation(summary = "[Admin] Delete a pricing plan")
    public ResponseEntity<ApiResponse<Void>> delete(@PathVariable Long id) {
        pricingService.delete(id);
        return ResponseEntity.ok(ApiResponse.ok("Plan deleted"));
    }
}
