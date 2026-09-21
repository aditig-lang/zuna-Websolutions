package com.zuna.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.util.List;

/**
 * Pricing plan entity — replaces the hardcoded PLANS array in Pricing.jsx.
 * Features are stored as a pipe-separated string and converted to/from List<String>.
 */
@Entity
@Table(name = "pricing_plans")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PricingPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Plan name, e.g. "Startup", "Business", "Enterprise". */
    @Column(nullable = false, length = 60)
    private String name;

    /** Sub-label shown below the plan name, e.g. "Growth", "Premium", "Scale". */
    @Column(nullable = false, length = 60)
    private String tier;

    /** Display price string, e.g. "₹5,000". */
    @Column(nullable = false, length = 30)
    private String price;

    /** CTA button label, e.g. "Start Now". */
    @Column(nullable = false, length = 60)
    private String buttonText;

    /** Whether to show the "MOST POPULAR" badge. */
    @Column(nullable = false)
    private boolean popular = false;

    /**
     * Feature bullet points stored as a pipe-separated string.
     * Example: "Custom 5-Page Website|Responsive Design|Basic SEO Optimization"
     */
    @Column(nullable = false, columnDefinition = "TEXT")
    private String featuresRaw;

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
