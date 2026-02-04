package com.patientrecordsystem.controller;

import com.patientrecordsystem.entity.Patients;
import com.patientrecordsystem.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class PatientController {

    @Autowired
    PatientService patientService;


    @PostMapping("/save")
    public ResponseEntity<Patients> savePatient(@RequestBody Patients patients) {
        return new ResponseEntity<>(patientService.addNewPatient(patients), HttpStatus.OK);
    }

    @GetMapping("/viewAll")
    public ResponseEntity<List<Patients>> viewAll() {
        return new ResponseEntity<>(patientService.viewAllPatients(), HttpStatus.OK);
    }


    @PutMapping("/updateById/{id}")
    public ResponseEntity<String> udpatePatient(@PathVariable int id, @RequestBody Patients patients) {
        return new ResponseEntity<>(patientService.updatePatient(id, patients), HttpStatus.OK);
    }

    @GetMapping("/viewById/{id}")
    public ResponseEntity<Patients> viewbyid(@PathVariable int id) {
        return new ResponseEntity<>(patientService.viewPatientById(id), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteByid(@PathVariable int id) {
        return new ResponseEntity<>(patientService.deletePatientById(id), HttpStatus.OK);
    }

}
