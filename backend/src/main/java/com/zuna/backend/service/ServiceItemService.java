package com.zuna.backend.service;

import com.zuna.backend.model.ServiceItem;
import com.zuna.backend.repository.ServiceItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ServiceItemService {

    private final ServiceItemRepository repository;

    public List<ServiceItem> findAll() {
        return repository.findAllByOrderByDisplayOrderAsc();
    }

    // Admin operations
    public ServiceItem save(ServiceItem item) {
        return repository.save(item);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
