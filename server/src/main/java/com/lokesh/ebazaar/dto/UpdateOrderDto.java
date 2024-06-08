package com.lokesh.ebazaar.dto;

import com.lokesh.ebazaar.model.Products;
import com.lokesh.ebazaar.model.Users;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class UpdateOrderDto {
    private Integer quantity;
    private String orderStatus;

}
