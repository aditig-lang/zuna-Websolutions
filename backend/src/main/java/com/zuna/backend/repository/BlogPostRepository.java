package com.zuna.backend.repository;

import com.zuna.backend.model.BlogPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BlogPostRepository extends JpaRepository<BlogPost, Long> {

    /** All published posts ordered by newest first. */
    List<BlogPost> findByPublishedTrueOrderByPublishedDateDesc();

    /** Single published post by ID. */
    Optional<BlogPost> findByIdAndPublishedTrue(Long id);

    /** Posts by category, published only. */
    List<BlogPost> findByCategoryAndPublishedTrueOrderByPublishedDateDesc(String category);
}
