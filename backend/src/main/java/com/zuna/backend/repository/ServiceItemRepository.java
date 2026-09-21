package com.zuna.backend.repository;

import com.zuna.backend.model.ServiceItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ServiceItemRepository extends JpaRepository<ServiceItem, Long> {

    /** All services ordered for display. */
    List<ServiceItem> findAllByOrderByDisplayOrderAsc();
}
