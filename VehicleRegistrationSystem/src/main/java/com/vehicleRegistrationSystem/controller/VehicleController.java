package com.vehicleRegistrationSystem.controller;

import com.vehicleRegistrationSystem.entity.Vehicle;
import com.vehicleRegistrationSystem.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class VehicleController {

    @Autowired
    VehicleService vehicleService;


    @PostMapping("/save")
    public ResponseEntity<Vehicle> addVehiclesInfo(@RequestBody Vehicle vehicle) {
        return new ResponseEntity<>(vehicleService.addNewVehicle(vehicle), HttpStatus.OK);
    }

    @GetMapping("/search/{modeoryear}")
    public ResponseEntity<List<Vehicle>> searchByModeOrYear(@PathVariable String modeoryear) {
        return new ResponseEntity<>(vehicleService.searchByModelOrYear(modeoryear), HttpStatus.OK);
    }

    @GetMapping("/viewByid/{id}")
    public ResponseEntity<Vehicle> findVehicleById(@PathVariable int id) {
        return new ResponseEntity<>(vehicleService.findVehicleById(id), HttpStatus.OK);
    }

    @GetMapping("/viewAll")
    public ResponseEntity<List<Vehicle>> viewAllVehicles() {
        return new ResponseEntity<>(vehicleService.viewAllVehicle(), HttpStatus.OK);
    }


    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateVehicleNumber(@PathVariable int id, @RequestBody Vehicle vehicle) {
        return new ResponseEntity<>(vehicleService.updatevehicleNumber(id, vehicle), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteById(@PathVariable int id) {
        return new ResponseEntity<>(vehicleService.deleteById(id), HttpStatus.OK);
    }


}
