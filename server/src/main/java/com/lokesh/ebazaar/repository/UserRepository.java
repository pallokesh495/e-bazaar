package com.lokesh.ebazaar.repository;

import com.lokesh.ebazaar.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<Users, Long> {
    Users findByUserId(Long id);
    List<Users> findAll();
}

