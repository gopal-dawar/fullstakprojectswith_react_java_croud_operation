package com.onlineCourseRegistration.service;

import com.onlineCourseRegistration.dto.CourseResponseDTO;
import com.onlineCourseRegistration.model.Course;

import java.util.List;

public interface CourseService {
    CourseResponseDTO createCourse(CourseResponseDTO dto);

    CourseResponseDTO updateCourse(long id, CourseResponseDTO dto);

    List<CourseResponseDTO> viewAllCourse();

    String deleteCourseById(long id);

}
