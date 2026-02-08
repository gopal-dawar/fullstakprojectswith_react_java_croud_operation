package com.example.demo.repository;

import com.example.demo.entity.UserAuth;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<UserAuth, Long> {
    Optional<UserAuth> findByUsername(String username);
}
