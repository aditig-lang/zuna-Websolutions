package com.zuna.backend.service;

import com.zuna.backend.model.BlogPost;
import com.zuna.backend.repository.BlogPostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BlogService {

    private final BlogPostRepository repository;

    public List<BlogPost> findAllPublished() {
        return repository.findByPublishedTrueOrderByPublishedDateDesc();
    }

    public Optional<BlogPost> findById(Long id) {
        return repository.findByIdAndPublishedTrue(id);
    }

    public List<BlogPost> findByCategory(String category) {
        return repository.findByCategoryAndPublishedTrueOrderByPublishedDateDesc(category);
    }

    // Admin operations
    public BlogPost save(BlogPost post) {
        return repository.save(post);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
