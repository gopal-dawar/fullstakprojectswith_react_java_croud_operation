package com.movieTicketBookingSystem.controller;

import com.movieTicketBookingSystem.config.UserConfig;
import com.movieTicketBookingSystem.entity.UserInfo;
import com.movieTicketBookingSystem.repository.UserRepo;
import com.movieTicketBookingSystem.util.TokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;

    // ✅ Constructor Injection (BEST PRACTICE)
    public UserController(UserRepo userRepo, PasswordEncoder passwordEncoder) {
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/register")
    public String register(@RequestParam String username, @RequestParam String password) {

        UserInfo user = new UserInfo();
        user.setUsername(username);
        user.setPassword(passwordEncoder.encode(password));

        userRepo.save(user);
        return "Successfully Register!";
    }

    @PostMapping("/login")
    public String login(@RequestParam String username, @RequestParam String password) {

        UserInfo user = userRepo.findByUsername(username).orElseThrow();

        if (passwordEncoder.matches(password, user.getPassword())) {
            throw new RuntimeException("Invalid Credentail");
        }
        return TokenUtil.generateToken(username);
    }

}
