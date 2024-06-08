package com.lokesh.ebazaar.dto;

import lombok.Data;

@Data
public class GenerateOrdersDto {
    private Long userId;
    private Long productId;
    private Integer quantity;

}
