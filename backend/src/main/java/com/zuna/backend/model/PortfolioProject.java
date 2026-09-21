package com.zuna.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

/**
 * Portfolio project entity — replaces the hardcoded PROJECTS array in Portfolio.jsx.
 */
@Entity
@Table(name = "portfolio_projects")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PortfolioProject {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 150)
    private String title;

    /**
     * Must match one of the category filter values used in Portfolio.jsx:
     * "E-Commerce", "Custom Dev", "SaaS", "Web3"
     */
    @Column(nullable = false, length = 60)
    private String category;

    /** Display tag shown on the card (e.g. "E-COMMERCE", "SAAS PLATFORM"). */
    @Column(nullable = false, length = 80)
    private String tag;

    /** URL to the project thumbnail / preview image. */
    @Column(nullable = false, length = 512)
    private String imageUrl;

    /** Optional live demo URL. */
    @Column(length = 512)
    private String demoUrl;

    /** Short description of the project. */
    @Column(columnDefinition = "TEXT")
    private String description;

    /** Display order — lower numbers appear first. */
    @Column(nullable = false)
    private int displayOrder = 0;

    @Column(nullable = false)
    private boolean visible = true;
}
