package com.vehicleRegistrationSystem.repository;

import com.vehicleRegistrationSystem.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VehicleRepo extends JpaRepository<Vehicle, Integer> {

    List<Vehicle> findByRegistrationYear(int registrationYear);

    List<Vehicle> findByModelIgnoreCase(String model);
}
