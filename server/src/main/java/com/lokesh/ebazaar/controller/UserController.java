package com.lokesh.ebazaar.controller;

import com.lokesh.ebazaar.dto.GenerateOrdersDto;
import com.lokesh.ebazaar.dto.CredentialsDto;
import com.lokesh.ebazaar.model.Products;
import com.lokesh.ebazaar.model.Users;
import com.lokesh.ebazaar.service.OrderService;
import com.lokesh.ebazaar.service.ProductService;
import com.lokesh.ebazaar.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    UserService userService;
    @Autowired
    OrderService orderService;
    @Autowired
    ProductService productService;

    @GetMapping("/")
    public ResponseEntity<String> test(){

        return ResponseEntity.ok("hello guys");
     }

     @GetMapping("/all-products")
     public ResponseEntity<List<Products>> allProducts()
     {
         return ResponseEntity.ok(productService.findAll());

     }
    @GetMapping("/product/{id}")
    public ResponseEntity<Products> getProductById(@PathVariable Long id){
        return ResponseEntity.ok(productService.findByProductId(id));
    }
    @GetMapping("/user/{id}")
    public ResponseEntity<Users> getUserById(@PathVariable Long id)
    {
        return ResponseEntity.ok(userService.findByUserId(id));

    }
    @PostMapping("/sign-up")
    public ResponseEntity<Users> signUp(@RequestBody Users user) {
        try {
            if (user != null) {
                userService.signUp(user);
                return ResponseEntity.ok(user);
            } else {
                throw new IllegalArgumentException("Empty fields");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @PostMapping("/login")
    ResponseEntity<CredentialsDto>login(@RequestBody CredentialsDto credentials){
        return ResponseEntity.ok(credentials);
    }

    @PostMapping("/generate-order")
    public ResponseEntity<String> generateOrder(@RequestBody GenerateOrdersDto[] allOrders){
        orderService.generateOrder(allOrders);
        return ResponseEntity.ok("done");
    }



}
