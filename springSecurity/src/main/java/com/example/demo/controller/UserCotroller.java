package com.example.demo.controller;

import com.example.demo.entity.AppUser;
import com.example.demo.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserCotroller {

    private final UserService userService;

    public UserCotroller(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody AppUser appUser) {
        return new ResponseEntity<>(userService.register(appUser), HttpStatus.OK);

    }

    @DeleteMapping("/delete")
    public ResponseEntity<String> removeAccount(Authentication authentication, HttpServletRequest request) {
        if (authentication == null) {
            return ResponseEntity.status(401).body("Not authenticated");
        }

        String username = authentication.getName();
        userService.removeAccount(username);

        HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate();
        }

        return ResponseEntity.ok("Account successfully removed");
    }


}
