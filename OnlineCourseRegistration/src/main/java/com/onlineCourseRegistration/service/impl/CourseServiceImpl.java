package com.onlineCourseRegistration.service.impl;

import com.onlineCourseRegistration.dto.CourseResponseDTO;
import com.onlineCourseRegistration.exception.CourseNotFoundException;
import com.onlineCourseRegistration.model.Course;
import com.onlineCourseRegistration.repository.CourseRepo;
import com.onlineCourseRegistration.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    private CourseRepo courseRepo;

    @Override
    public CourseResponseDTO createCourse(CourseResponseDTO dto) {
        Course c = new Course();
        c.setStudentName(dto.getStudentName());
        c.setCourseName(dto.getCourseName());
        c.setRegistrationDate(dto.getRegistrationDate());
        c.setFeesPaid(dto.getFeesPaid());
        return mapToResponseDTO(courseRepo.save(c));
    }

    @Override
    public CourseResponseDTO updateCourse(long id, CourseResponseDTO dto) {
        Course re = courseRepo.findById(id).orElseThrow(() -> new CourseNotFoundException("Data Not Found"));
        re.setStudentName(dto.getStudentName());
        re.setCourseName(dto.getCourseName());
        re.setRegistrationDate(dto.getRegistrationDate());
        re.setFeesPaid(dto.getFeesPaid());
        return mapToResponseDTO(courseRepo.save(re));
    }

    private CourseResponseDTO mapToResponseDTO(Course course) {
        CourseResponseDTO c = new CourseResponseDTO();
        c.setId(course.getId());
        c.setStudentName(course.getStudentName());
        c.setCourseName(course.getCourseName());
        c.setFeesPaid(course.getFeesPaid());
        c.setRegistrationDate(course.getRegistrationDate());
        return c;
    }

    @Override
    public List<CourseResponseDTO> viewAllCourse() {
        return courseRepo.findAll().stream().map(this::mapToResponseDTO).collect(Collectors.toList());
    }

    @Override
    public String deleteCourseById(long id) {
        Course course = courseRepo.findById(id).orElseThrow(() -> new CourseNotFoundException("Course Not Found : " + id));
        courseRepo.delete(course);
        return "Successfully Deleted!";
    }
}
