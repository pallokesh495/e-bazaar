package com.lokesh.ebazaar.repository;

import com.lokesh.ebazaar.model.Products;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Products, Long> {

    Products findByProductId(Long id);
    List<Products> findAll();
}
