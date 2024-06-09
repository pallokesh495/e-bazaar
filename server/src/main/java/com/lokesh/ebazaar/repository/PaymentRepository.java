package com.lokesh.ebazaar.repository;

import com.lokesh.ebazaar.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
    Payment findByUserEmail(String userEmail);
}
