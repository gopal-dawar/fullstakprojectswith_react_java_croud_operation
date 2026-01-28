package com.StudentRecordManagement.controller;

import com.StudentRecordManagement.entity.Student;
import com.StudentRecordManagement.service.StudentService;
import org.apache.coyote.Request;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")

@RequestMapping("/student")
public class StudentController {
    @Autowired
    StudentService studentService;

    @PostMapping("/save")
    public ResponseEntity<Student> saveStudent(@RequestBody Student student) {
        return new ResponseEntity<>(studentService.addStudent(student), HttpStatus.OK);
    }

    @GetMapping("/view")
    public ResponseEntity<List<Student>> viewStudentList() {
        return new ResponseEntity<>(studentService.viewStudentList(), HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Student> udpateMarksByStudentId(@PathVariable int id, @RequestBody Student student) {
        return new ResponseEntity<>(studentService.updateMarksByStudentId(id, student), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteById(@PathVariable int id) {
        return new ResponseEntity<>(studentService.deleteStudentById(id), HttpStatus.OK);
    }


    @GetMapping("/getById/{id}")
    public ResponseEntity<Student> studentById(@PathVariable int id) {
        return new ResponseEntity<>(studentService.studentById(id), HttpStatus.OK);
    }
}
