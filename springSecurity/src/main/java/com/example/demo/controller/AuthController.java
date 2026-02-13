package com.example.demo.controller;

import com.example.demo.entity.UserInfo;
import com.example.demo.repository.UserRepo;
import com.example.demo.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserRepo userRepo;

    @PostMapping("/login")
    public String login(@RequestBody UserInfo userInfo) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        userInfo.getUsername(),
                        userInfo.getPassword()));

        return jwtUtil.generateJwtToken(userInfo.getUsername());
    }

    @PostMapping("/register")
    public String register(@RequestBody UserInfo userInfo) {

        userInfo.setPassword(passwordEncoder.encode(userInfo.getPassword()));
        userRepo.save(userInfo);

        return "User saved successfully";
    }

    @GetMapping("/dashboard")
    public String dashboard(Authentication auth) {
        System.out.println(auth);
        return "Welcome Dashboard";
    }




}
