package com.lokesh.ebazaar.service;

import com.lokesh.ebazaar.dto.GenerateOrdersDto;
import com.lokesh.ebazaar.dto.UpdateOrderDto;
import com.lokesh.ebazaar.model.Orders;
import com.lokesh.ebazaar.model.Products;
import com.lokesh.ebazaar.model.Users;
import com.lokesh.ebazaar.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private UserService userService;

    @Autowired
    private ProductService productService;

    public Orders findByOrderId(Long id){
        return orderRepository.findByOrderId(id);
    }

    public void generateOrder(GenerateOrdersDto[] allOrders){

        for(GenerateOrdersDto orderItem: allOrders ){
            Users user = userService.findByUserId(orderItem.getUserId());
            Products product = productService.findByProductId(orderItem.getProductId());

            if(user !=null && product !=null){
                Orders order = new Orders();

                order.setUser(user);
                order.setProduct(product);
                order.setQuantity(orderItem.getQuantity());
                order.setProductAmount(product.getPrice());
                order.setOrderAmount(product.getPrice() * orderItem.getQuantity());
                order.setOrderDate(LocalDateTime.now());
                order.setOrderStatus("Pending");

                orderRepository.save(order);
            }
        }
    }

    public Orders updateOrder(Long id, Orders order, UpdateOrderDto newDetails){

        if(newDetails.getOrderStatus() != null && !newDetails.getOrderStatus().equals(order.getOrderStatus())){
            order.setOrderStatus(newDetails.getOrderStatus());
        }
        if(newDetails.getQuantity() != null && !newDetails.getQuantity().equals(order.getQuantity())){
            order.setQuantity(newDetails.getQuantity());
        }
        return orderRepository.save(order);
    }

}
