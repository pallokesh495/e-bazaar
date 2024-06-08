package com.lokesh.ebazaar.service;

import com.lokesh.ebazaar.model.Users;
import com.lokesh.ebazaar.repository.OrderRepository;
import com.lokesh.ebazaar.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OrderRepository orderRepository;

    public Users signUp(Users user){
        return userRepository.save(user);

    }
    public Users findByUserId(Long id){
        return userRepository.findByUserId(id);

    }
    public List<Users> findAllUsers(){
        return userRepository.findAll();
    }

}
