package com.zuna.backend.controller;

import com.zuna.backend.dto.ApiResponse;
import com.zuna.backend.model.BlogPost;
import com.zuna.backend.service.BlogService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/blog")
@RequiredArgsConstructor
@Tag(name = "Blog", description = "Blog posts — public read, admin write")
public class BlogController {

    private final BlogService blogService;

    // -------------------------------------------------------------------------
    // Public endpoints
    // -------------------------------------------------------------------------

    /**
     * GET /api/blog
     * Optional query param: ?category=Engineering
     */
    @GetMapping
    @Operation(summary = "List all published blog posts, optionally filtered by category")
    public ResponseEntity<ApiResponse<List<BlogPost>>> list(
            @Parameter(description = "Filter by category name") @RequestParam(required = false) String category
    ) {
        List<BlogPost> posts = category != null
                ? blogService.findByCategory(category)
                : blogService.findAllPublished();
        return ResponseEntity.ok(ApiResponse.ok("Blog posts fetched", posts));
    }

    /**
     * GET /api/blog/{id}
     */
    @GetMapping("/{id}")
    @Operation(summary = "Get a single published blog post by ID")
    public ResponseEntity<ApiResponse<BlogPost>> getById(@PathVariable Long id) {
        BlogPost post = blogService.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Blog post not found"));
        return ResponseEntity.ok(ApiResponse.ok("Blog post fetched", post));
    }

    // -------------------------------------------------------------------------
    // Admin endpoints — require HTTP Basic Auth
    // -------------------------------------------------------------------------

    /** POST /api/admin/blog — create a new blog post. */
    @PostMapping("/admin/blog")
    @Operation(summary = "[Admin] Create a new blog post")
    public ResponseEntity<ApiResponse<BlogPost>> create(@RequestBody BlogPost post) {
        BlogPost saved = blogService.save(post);
        return ResponseEntity.status(HttpStatus.CREATED).body(ApiResponse.ok("Blog post created", saved));
    }

    /** PUT /api/admin/blog/{id} — update an existing blog post. */
    @PutMapping("/admin/blog/{id}")
    @Operation(summary = "[Admin] Update a blog post")
    public ResponseEntity<ApiResponse<BlogPost>> update(@PathVariable Long id, @RequestBody BlogPost post) {
        post.setId(id);
        BlogPost saved = blogService.save(post);
        return ResponseEntity.ok(ApiResponse.ok("Blog post updated", saved));
    }

    /** DELETE /api/admin/blog/{id} — delete a blog post. */
    @DeleteMapping("/admin/blog/{id}")
    @Operation(summary = "[Admin] Delete a blog post")
    public ResponseEntity<ApiResponse<Void>> delete(@PathVariable Long id) {
        blogService.delete(id);
        return ResponseEntity.ok(ApiResponse.ok("Blog post deleted"));
    }
}
