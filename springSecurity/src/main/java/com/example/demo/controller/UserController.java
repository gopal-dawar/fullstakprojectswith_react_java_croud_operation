package com.example.demo.controller;

import com.example.demo.entity.UserAuth;
import com.example.demo.repository.UserRepo;
import com.example.demo.repository.UserRepo;
import com.example.demo.util.TokenUtil;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;

    public UserController(UserRepo userRepo,
                          PasswordEncoder passwordEncoder) {
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
    }

    // REGISTER
    @PostMapping("/register")
    public String register(@RequestParam String username,
                           @RequestParam String password) {

        UserAuth user = new UserAuth();
        user.setUsername(username);
        user.setPassword(passwordEncoder.encode(password));

        userRepo.save(user);
        return "User registered successfully";
    }

    // LOGIN
    @PostMapping("/login")
    public String login(@RequestParam String username,
                        @RequestParam String password) {

        UserAuth user = userRepo.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        return TokenUtil.generateToken(username);
    }
}
