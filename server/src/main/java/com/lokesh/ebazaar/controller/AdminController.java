package com.lokesh.ebazaar.controller;

import com.lokesh.ebazaar.dto.CredentialsDto;
import com.lokesh.ebazaar.dto.UpdateOrderDto;
import com.lokesh.ebazaar.model.Orders;
import com.lokesh.ebazaar.model.Products;
import com.lokesh.ebazaar.model.Users;

import com.lokesh.ebazaar.service.OrderService;
import com.lokesh.ebazaar.service.ProductService;

import com.lokesh.ebazaar.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/-admin")
@CrossOrigin(origins = "*")
public class AdminController {

    @Autowired
    private ProductService productService;
    @Autowired
    private UserService userService;
    @Autowired
    private OrderService orderService;

    @GetMapping("/")
    public ResponseEntity<String> test(){

        return ResponseEntity.ok("hello guys");
    }

    @GetMapping("/all-products")
    public ResponseEntity<List<Products>> getAllProducts()
    {
       return ResponseEntity.ok(productService.findAll());

    }
    @GetMapping("/product/{id}")
    public ResponseEntity<Products> getProductById(@PathVariable Long id){

        return null;
    }
    @GetMapping("/order/{id}")
    public ResponseEntity<Orders> getOrderById(@PathVariable Long id){

        return ResponseEntity.ok(orderService.findByOrderId(id));
    }
    @PutMapping("/update-order/{id}")
    public ResponseEntity<Orders> updateOrder(@PathVariable Long id, @RequestBody UpdateOrderDto newDetails){

        Orders order = orderService.findByOrderId(id);
        if(order == null)return null;
        else {
            return ResponseEntity.ok(orderService.updateOrder(id,order,newDetails));
        }

    }
    @GetMapping("/all-users")
    public ResponseEntity<List<Users>> getAllUsers()
    {
        return ResponseEntity.ok(userService.findAllUsers());

    }
    @GetMapping("/user/{id}")
    public ResponseEntity<Users> getUserById(@PathVariable Long id)
    {
        return ResponseEntity.ok(userService.findByUserId(id));

    }


    @PostMapping("/login")
    ResponseEntity<CredentialsDto>login(@RequestBody CredentialsDto credentials){
        return ResponseEntity.ok(credentials);
    }

    @PostMapping("/create-product")
    ResponseEntity<Products>createProduct(@RequestBody Products product){
        return ResponseEntity.ok(productService.createProduct(product));
    }


    @GetMapping("/all-payments")
    public ResponseEntity<String> allPayments(){
        return ResponseEntity.ok("all payments");
    }

}
