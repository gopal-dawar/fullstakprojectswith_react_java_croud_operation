package com.EmployeeDirectorySystem.service;

import com.EmployeeDirectorySystem.entity.Employee;

import java.util.List;

public interface EmployeeService {

    Employee addEmployee(Employee employee);

    List<Employee> searchEmployeeByName(String name);

    Employee updateEmployeeSalary(int id, Employee employee);

    String deleteEmployeeById(int id);

    Employee EmployeeById(int id);

    List<Employee> viewEmployee();

}
