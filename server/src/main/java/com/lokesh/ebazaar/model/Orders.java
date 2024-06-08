package com.lokesh.ebazaar.model;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;
    @ManyToOne
    @JoinColumn(name = "userId", referencedColumnName = "userId")
    private Users user;
    @ManyToOne
    @JoinColumn(name = "productId", referencedColumnName = "productId")
    private Products product;

    private Integer quantity;
    private Integer orderAmount;
    private Integer productAmount;
    private LocalDateTime orderDate;

    private String orderStatus;

   }
