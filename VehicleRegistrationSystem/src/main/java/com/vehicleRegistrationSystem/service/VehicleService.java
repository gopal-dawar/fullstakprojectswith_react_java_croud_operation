package com.vehicleRegistrationSystem.service;

import com.vehicleRegistrationSystem.entity.Vehicle;

import java.util.List;

public interface VehicleService {
    Vehicle addNewVehicle(Vehicle vehicle);

    List<Vehicle> searchByModelOrYear(String model);

    String updatevehicleNumber(int id, Vehicle vehicle);

    String deleteById(int id);

    Vehicle findVehicleById(int id);

    List<Vehicle> viewAllVehicle();
}
