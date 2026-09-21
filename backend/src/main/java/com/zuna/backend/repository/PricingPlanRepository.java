package com.zuna.backend.repository;

import com.zuna.backend.model.PricingPlan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PricingPlanRepository extends JpaRepository<PricingPlan, Long> {

    /** All plans ordered for display. */
    List<PricingPlan> findAllByOrderByDisplayOrderAsc();
}
