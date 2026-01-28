package com.EmployeeDirectorySystem.serviceImpl;

import com.EmployeeDirectorySystem.entity.Employee;
import com.EmployeeDirectorySystem.exception.EmployeeNotFoundException;
import com.EmployeeDirectorySystem.repository.EmployeeRepo;
import com.EmployeeDirectorySystem.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {


    @Autowired
    EmployeeRepo employeeRepo;

    @Override
    public Employee addEmployee(Employee employee) {
        return employeeRepo.save(employee);
    }

    @Override
    public List<Employee> searchEmployeeByName(String name) {
        return employeeRepo.employeeSearchByName(name);
    }

    @Override
    public Employee updateEmployeeSalary(int id, Employee employee) {
        Employee e = employeeRepo.findById(id).orElseThrow(() -> new EmployeeNotFoundException("Employee Not Found at : " + id));
        e.setName(employee.getName());
        e.setDesignation(employee.getDesignation());
        e.setDepartment(employee.getDepartment());
        e.setSalary(employee.getSalary());
        return employeeRepo.save(e);
    }

    @Override
    public String deleteEmployeeById(int id) {
        employeeRepo.deleteById(id);
        return "Successfully Deleted!";
    }

    @Override
    public Employee EmployeeById(int id) {
        return employeeRepo.findById(id).orElseThrow(() -> new EmployeeNotFoundException("Employee Not Found at : " + id));
    }

    @Override
    public List<Employee> viewEmployee() {
        return employeeRepo.findAll();
    }
}
