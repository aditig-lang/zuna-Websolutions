package com.zuna.backend.service;

import com.zuna.backend.model.PricingPlan;
import com.zuna.backend.repository.PricingPlanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PricingService {

    private final PricingPlanRepository repository;

    public List<PricingPlan> findAll() {
        return repository.findAllByOrderByDisplayOrderAsc();
    }

    // Admin operations
    public PricingPlan save(PricingPlan plan) {
        return repository.save(plan);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
