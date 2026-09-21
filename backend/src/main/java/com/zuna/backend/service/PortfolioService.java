package com.zuna.backend.service;

import com.zuna.backend.model.PortfolioProject;
import com.zuna.backend.repository.PortfolioProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PortfolioService {

    private final PortfolioProjectRepository repository;

    public List<PortfolioProject> findAll() {
        return repository.findByVisibleTrueOrderByDisplayOrderAsc();
    }

    public List<PortfolioProject> findByCategory(String category) {
        return repository.findByCategoryAndVisibleTrueOrderByDisplayOrderAsc(category);
    }

    // Admin operations
    public PortfolioProject save(PortfolioProject project) {
        return repository.save(project);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
