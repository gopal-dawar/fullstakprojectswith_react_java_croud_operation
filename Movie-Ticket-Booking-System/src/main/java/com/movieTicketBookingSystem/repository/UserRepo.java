package com.movieTicketBookingSystem.repository;

import com.movieTicketBookingSystem.entity.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepo extends JpaRepository<UserInfo, Long> {
    Optional<UserInfo> findByUsername(String username);
}
