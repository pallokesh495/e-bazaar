package com.lokesh.ebazaar.repository;

import com.lokesh.ebazaar.model.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Orders, Long> {
    Orders findByOrderId(Long id);

}
