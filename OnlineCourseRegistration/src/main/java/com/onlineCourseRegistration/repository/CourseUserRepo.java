package com.onlineCourseRegistration.repository;

import com.onlineCourseRegistration.model.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CourseUserRepo extends JpaRepository<UserInfo, Long> {
    Optional<UserInfo> findByUsername(String username);
}
