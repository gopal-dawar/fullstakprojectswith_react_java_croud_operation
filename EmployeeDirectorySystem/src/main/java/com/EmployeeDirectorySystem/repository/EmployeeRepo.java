package com.EmployeeDirectorySystem.repository;

import com.EmployeeDirectorySystem.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Integer> {
    @Query("SELECT e FROM Employee e WHERE e.name like %:name%")
    List<Employee> employeeSearchByName(@Param("name") String name);
}
