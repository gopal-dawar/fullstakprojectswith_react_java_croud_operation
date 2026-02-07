package com.example.demo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class UserController {

    @GetMapping("/login")
    public String loginpage() {
        return "Successfully Login";
    }

    @GetMapping("/user")
    public String usernpage() {
        return "welcome to the user page";
    }

    @GetMapping("/")
    public String adminpage() {
        return "welcome to the Admin page";
    }


}
