package com.lokesh.ebazaar.dto;

import lombok.Data;

@Data
public class PaymentDto {
    private int amount;
    private String currency;
    private String receiptEmail;
    private String description;
    private String name;
    private String address;
}
