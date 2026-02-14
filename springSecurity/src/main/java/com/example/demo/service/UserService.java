package com.example.demo.service;

import com.example.demo.entity.AppUser;
import com.example.demo.exception.UserAlreadyExistException;
import com.example.demo.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public String register(AppUser appUser) {
        AppUser user = new AppUser();
        user.setUsername(appUser.getUsername());
        user.setPassword(passwordEncoder.encode(appUser.getPassword()));

        userRepository.save(user);
        return "Successfully Register!";
    }

    @Transactional
    public void removeAccount(String username) {
        AppUser user = userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("User Not Found : " + username));
        userRepository.delete(user);
    }
}
