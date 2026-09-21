package com.zuna.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.time.LocalDate;

/**
 * Blog post entity — replaces the hardcoded POSTS array in Blog.jsx.
 */
@Entity
@Table(name = "blog_posts")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BlogPost {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 300)
    private String title;

    @Column(nullable = false, length = 60)
    private String category;

    @Column(nullable = false)
    private LocalDate publishedDate;

    @Column(nullable = false, length = 120)
    private String author;

    /** Short teaser shown on the blog listing card. */
    @Column(nullable = false, columnDefinition = "TEXT")
    private String excerpt;

    /** Human-readable estimate, e.g. "4 min read". */
    @Column(nullable = false, length = 30)
    private String readTime;

    /** Full article body (plain text / markdown). */
    @Column(nullable = false, columnDefinition = "TEXT")
    private String content;

    /** Controls whether the post shows on the public site. */
    @Column(nullable = false)
    private boolean published = true;
}
