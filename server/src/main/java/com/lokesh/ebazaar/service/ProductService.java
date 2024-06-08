package com.lokesh.ebazaar.service;

import com.lokesh.ebazaar.model.Products;
import com.lokesh.ebazaar.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;
    public Products createProduct(Products product){
        return productRepository.save(product);

    }
    public Products findByProductId(Long id){
        return productRepository.findByProductId(id);
    }
    public List<Products> findAll(){
        return productRepository.findAll();
    }
}
