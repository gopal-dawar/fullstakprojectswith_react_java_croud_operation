package com.onlineCourseRegistration.controller;

import com.onlineCourseRegistration.model.UserInfo;
import com.onlineCourseRegistration.repository.CourseUserRepo;
import com.onlineCourseRegistration.util.TokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class AuthController {

    @Autowired
    CourseUserRepo courseUserRepo;


    @PostMapping("/register")
    public String registerpage(@RequestBody UserInfo userInfo) {
        if (courseUserRepo.findByUsername(userInfo.getUsername()).isPresent()) {
            return "User Already Login";
        }
        courseUserRepo.save(userInfo);
        return "Successfully login!";
    }

    @PostMapping("/login")
    public Map<String, String> loginpage(@RequestBody Map<String, String> data) {
        String username = data.get("username");
        String password = data.get("password");
        UserInfo user = courseUserRepo.findByUsername(username).orElseThrow();

        if (user.getPassword().equals(password)) {
            String token = TokenUtil.generateToken();
            return Map.of("token", token);
        }

        throw new RuntimeException("No User Found");
    }
}
