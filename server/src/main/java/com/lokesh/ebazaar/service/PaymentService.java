package com.lokesh.ebazaar.service;

import com.lokesh.ebazaar.dto.PaymentDto;
import com.lokesh.ebazaar.model.Payment;
import com.lokesh.ebazaar.repository.PaymentRepository;
import com.stripe.Stripe;
import com.stripe.StripeClient;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import jakarta.transaction.Transactional;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Transactional
public class PaymentService {

    private final PaymentRepository paymentRepository;

    @Value("${stripe.api.key}")
    private String apiKey;

    @Autowired
    public PaymentService(PaymentRepository paymentRepository, @Value("${stripe.api.key}") String secretKey) {
        this.paymentRepository = paymentRepository;
        Stripe.apiKey = secretKey;
    }

    public PaymentIntent createPaymentIntent(PaymentDto paymentDto) throws StripeException {

      try{
          StripeClient client = new StripeClient("sk_test_51PD9d2SHnRRAq6TowJAWI6dQ6ovMisoQPJaOk7zzbdrS9077RmgYktRvaeAN6ziCMHaYhxdF7OFPsaHMXa6nFJ9F00eAKfwEDs");
          PaymentIntentCreateParams params =
                  PaymentIntentCreateParams.builder()
                          .setDescription(paymentDto.getDescription())
                          .setShipping(
                                  PaymentIntentCreateParams.Shipping.builder()
                                          .setName(paymentDto.getName())
                                          .setAddress(
                                                  PaymentIntentCreateParams.Shipping.Address.builder()
                                                          .setLine1(paymentDto.getAddress())
                                                          .setPostalCode("98140")
                                                          .setCity("San Francisco")
                                                          .setState("CA")
                                                          .setCountry("US")
                                                          .build()
                                          )
                                          .build()
                          )
                          .setAmount((long) paymentDto.getAmount())
                          .setCurrency("usd")
                          .addPaymentMethodType("card")
                          .build();

          PaymentIntent paymentIntent = client.paymentIntents().create(params);
//          Payment payment = paymentRepository.findByUserEmail(paymentDto.getReceiptEmail()); //save in db
//          payment.setAmount(paymentDto.getAmount());
//          paymentRepository.save(payment);
          return  paymentIntent;
      }
      catch(StripeException s){

          System.out.println("errr while making  payment --------"+ s);
          return new PaymentIntent();

      }
    }

//    public ResponseEntity<String> stripePayment(String userEmail) throws Exception {
//        Payment payment = paymentRepository.findByUserEmail(userEmail);
//
//        if (payment == null) {
//            throw new Exception("Payment information is missing");
//        }
//        payment.setAmount(0.00);
//        paymentRepository.save(payment);
//        return new ResponseEntity<>(HttpStatus.OK);
//    }
}
