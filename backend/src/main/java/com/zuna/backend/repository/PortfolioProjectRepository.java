package com.zuna.backend.repository;

import com.zuna.backend.model.PortfolioProject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PortfolioProjectRepository extends JpaRepository<PortfolioProject, Long> {

    /** All visible projects ordered by displayOrder. */
    List<PortfolioProject> findByVisibleTrueOrderByDisplayOrderAsc();

    /** Visible projects filtered by category. */
    List<PortfolioProject> findByCategoryAndVisibleTrueOrderByDisplayOrderAsc(String category);
}
