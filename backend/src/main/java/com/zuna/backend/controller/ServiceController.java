package com.zuna.backend.controller;

import com.zuna.backend.dto.ApiResponse;
import com.zuna.backend.model.ServiceItem;
import com.zuna.backend.service.ServiceItemService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/services")
@RequiredArgsConstructor
@Tag(name = "Services", description = "Service offerings — public read, admin write")
public class ServiceController {

    private final ServiceItemService serviceItemService;

    /** GET /api/services — list all services in display order. */
    @GetMapping
    @Operation(summary = "List all service offerings")
    public ResponseEntity<ApiResponse<List<ServiceItem>>> list() {
        return ResponseEntity.ok(ApiResponse.ok("Services fetched", serviceItemService.findAll()));
    }

    /** POST /api/admin/services — create a service. */
    @PostMapping("/admin/services")
    @Operation(summary = "[Admin] Create a service item")
    public ResponseEntity<ApiResponse<ServiceItem>> create(@RequestBody ServiceItem item) {
        ServiceItem saved = serviceItemService.save(item);
        return ResponseEntity.status(HttpStatus.CREATED).body(ApiResponse.ok("Service created", saved));
    }

    /** PUT /api/admin/services/{id} — update a service. */
    @PutMapping("/admin/services/{id}")
    @Operation(summary = "[Admin] Update a service item")
    public ResponseEntity<ApiResponse<ServiceItem>> update(
            @PathVariable Long id, @RequestBody ServiceItem item) {
        item.setId(id);
        ServiceItem saved = serviceItemService.save(item);
        return ResponseEntity.ok(ApiResponse.ok("Service updated", saved));
    }

    /** DELETE /api/admin/services/{id} — delete a service. */
    @DeleteMapping("/admin/services/{id}")
    @Operation(summary = "[Admin] Delete a service item")
    public ResponseEntity<ApiResponse<Void>> delete(@PathVariable Long id) {
        serviceItemService.delete(id);
        return ResponseEntity.ok(ApiResponse.ok("Service deleted"));
    }
}
