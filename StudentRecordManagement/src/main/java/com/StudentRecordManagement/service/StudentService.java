package com.StudentRecordManagement.service;

import com.StudentRecordManagement.entity.Student;

import java.util.List;

public interface StudentService {
    Student addStudent(Student student);

    List<Student> viewStudentList();

    Student studentById(int id);

    Student updateMarksByStudentId(int id, Student student);

    String deleteStudentById(int id);

}
