package com.zuna.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.util.List;

/**
 * Service offering entity — replaces the hardcoded SERVICES array in Home.jsx and Services.jsx.
 * Features are stored as a pipe-separated string identical to PricingPlan pattern.
 */
@Entity
@Table(name = "service_items")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ServiceItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Material Symbol icon name, e.g. "code", "storefront". */
    @Column(nullable = false, length = 60)
    private String icon;

    /** CSS color value for the icon, e.g. "var(--color-primary)". */
    @Column(nullable = false, length = 60)
    private String color;

    /** CSS background for icon circle, e.g. "rgba(120, 220, 218, 0.1)". */
    @Column(nullable = false, length = 60)
    private String bg;

    @Column(nullable = false, length = 150)
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String description;

    /**
     * Feature bullet points stored as a pipe-separated string.
     * Example: "React.js Single Page Apps|UPI & Razorpay Integration|Mobile-First & 4G Optimized"
     */
    @Column(nullable = false, columnDefinition = "TEXT")
    private String featuresRaw;

    /** Highlight this service card (e.g. featured/most popular). */
    @Column(nullable = false)
    private boolean featured = false;

    /** Display order — lower numbers appear first. */
    @Column(nullable = false)
    private int displayOrder = 0;

    /** Transient helper: split featuresRaw into a list on the fly. */
    @Transient
    public List<String> getFeatures() {
        if (featuresRaw == null || featuresRaw.isBlank()) return List.of();
        return List.of(featuresRaw.split("\\|"));
    }
}
