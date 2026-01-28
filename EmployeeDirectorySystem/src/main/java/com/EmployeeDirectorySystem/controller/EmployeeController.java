package com.EmployeeDirectorySystem.controller;

import com.EmployeeDirectorySystem.entity.Employee;
import com.EmployeeDirectorySystem.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @GetMapping("/view")
    public ResponseEntity<List<Employee>> viewEmployees() {
        return new ResponseEntity<>(employeeService.viewEmployee(), HttpStatus.OK);
    }

    @PostMapping("/save")
    public ResponseEntity<Employee> saveEmployee(@RequestBody Employee employee) {
        return new ResponseEntity<>(employeeService.addEmployee(employee), HttpStatus.OK);
    }

    @GetMapping("/search/{name}")
    public ResponseEntity<List<Employee>> viewEmployee(@PathVariable String name) {
        return new ResponseEntity<>(employeeService.searchEmployeeByName(name), HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Employee> updateEmployeeSalary(@PathVariable int id, @RequestBody Employee employee) {
        return new ResponseEntity<>(employeeService.updateEmployeeSalary(id, employee), HttpStatus.OK);
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteById(@PathVariable int id) {
        return new ResponseEntity<>(employeeService.deleteEmployeeById(id), HttpStatus.OK);
    }

    @GetMapping("/viewById/{id}")
    public ResponseEntity<Employee> getBYID(@PathVariable int id) {
        return new ResponseEntity<>(employeeService.EmployeeById(id), HttpStatus.OK);
    }


}
