package com.lokesh.ebazaar.controller;

import com.lokesh.ebazaar.dto.PaymentDto;
import com.lokesh.ebazaar.service.PaymentService;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payment/secure")
@CrossOrigin(origins = "*")
public class PaymentController {

    private final PaymentService paymentService;

    @Autowired
    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping("/payment-intent")
    public ResponseEntity<String> createPaymentIntent(@RequestBody PaymentDto paymentDto) {
        try {
            PaymentIntent paymentIntent = paymentService.createPaymentIntent(paymentDto);
            String paymentStr = paymentIntent.toJson();
            return new ResponseEntity<>(paymentStr, HttpStatus.OK);
        } catch (StripeException e) {
            return new ResponseEntity<>("Error creating payment intent: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

//    @PutMapping("/payment-complete")
//    public ResponseEntity<String> stripePaymentComplete(@RequestHeader(value = "Authorization") String token) {
//        try {
//            //        String userEmail = ExtractJWT.payloadJWTExtraction(token, "\"sub\"");
//            String userEmail = "test1@gmail.com"; // Replace with actual JWT extraction logic
//            if (userEmail == null) {
//                throw new Exception("User email is missing");
//            }
//            return paymentService.stripePayment(userEmail);
//        } catch (Exception e) {
//            return new ResponseEntity<>("Error completing payment: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
}
