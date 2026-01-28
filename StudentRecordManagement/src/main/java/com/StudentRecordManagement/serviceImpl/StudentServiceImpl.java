package com.StudentRecordManagement.serviceImpl;

import com.StudentRecordManagement.entity.Student;
import com.StudentRecordManagement.exception.StudentNotFoundException;
import com.StudentRecordManagement.repository.StudentRepo;
import com.StudentRecordManagement.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    StudentRepo studentRepo;

    @Override
    public Student addStudent(Student student) {
        return studentRepo.save(student);
    }

    @Override
    public List<Student> viewStudentList() {
        return studentRepo.findAll();
    }

    @Override
    public Student studentById(int id) {
        return studentRepo.findById(id).orElseThrow(() -> new StudentNotFoundException("Student Not Found At : " + id));
    }

    @Override
    public Student updateMarksByStudentId(int id, Student student) {
        Student s = studentRepo.findById(id).orElseThrow(() -> new StudentNotFoundException("Student Not Found at : " + id));
        s.setName(student.getName());
        s.setEmail(student.getEmail());
        s.setCourse(student.getCourse());
        s.setMarks(student.getMarks());
        return studentRepo.save(s);
    }

    @Override
    public String deleteStudentById(int id) {
        studentRepo.deleteById(id);
        return "Student Successfully Deleted!";
    }
}
