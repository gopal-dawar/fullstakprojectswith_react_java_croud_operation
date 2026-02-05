package com.onlineCourseRegistration.controller;

import com.onlineCourseRegistration.dto.CourseResponseDTO;
import com.onlineCourseRegistration.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CourseController {
    @Autowired
    CourseService courseService;

    @PostMapping
    public ResponseEntity<CourseResponseDTO> createCourse(@RequestBody CourseResponseDTO dto) {
        return new ResponseEntity<>(courseService.createCourse(dto), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<CourseResponseDTO>> viewAll() {
        return new ResponseEntity<>(courseService.viewAllCourse(), HttpStatus.OK);
    }


    @PutMapping("/{id}")
    public ResponseEntity<CourseResponseDTO> udpateCourse(@PathVariable long id, @RequestBody CourseResponseDTO dto) {
        return new ResponseEntity<>(courseService.updateCourse(id, dto), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCourse(@PathVariable long id) {
        return new ResponseEntity<>(courseService.deleteCourseById(id), HttpStatus.OK);
    }
}

