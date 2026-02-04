package com.vehicleRegistrationSystem.serviceImpl;

import com.vehicleRegistrationSystem.entity.Vehicle;
import com.vehicleRegistrationSystem.exception.VehicleNotFoundException;
import com.vehicleRegistrationSystem.repository.VehicleRepo;
import com.vehicleRegistrationSystem.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehicleServiceImpl implements VehicleService {

    @Autowired
    VehicleRepo vehicleRepo;

    @Override
    public Vehicle addNewVehicle(Vehicle vehicle) {
        return vehicleRepo.save(vehicle);
    }

    @Override
    public List<Vehicle> searchByModelOrYear(String model) {
        if (model.matches("\\d+")) {
            int year = Integer.parseInt(model);
            return vehicleRepo.findByRegistrationYear(year);
        } else {
            return vehicleRepo.findByModelIgnoreCase(model);
        }
    }

    @Override
    public String updatevehicleNumber(int id, Vehicle vehicle) {
        Vehicle v = vehicleRepo.findById(id).orElseThrow(() -> new VehicleNotFoundException("Vehile not found at : " + id));
        v.setOwnerName(vehicle.getOwnerName());
        v.setVehicleNumber(vehicle.getVehicleNumber());
        v.setVehicleNumber(vehicle.getVehicleNumber());
        v.setRegistrationYear(vehicle.getRegistrationYear());
        vehicleRepo.save(v);
        return "Successfully update Data!";
    }

    @Override
    public String deleteById(int id) {
        vehicleRepo.deleteById(id);
        return "Successfully Delete!";
    }

    @Override
    public Vehicle findVehicleById(int id) {
        return vehicleRepo.findById(id).orElseThrow(() -> new VehicleNotFoundException("Vehicle Not Found At : " + id));
    }

    @Override
    public List<Vehicle> viewAllVehicle() {
        return vehicleRepo.findAll();
    }
}
