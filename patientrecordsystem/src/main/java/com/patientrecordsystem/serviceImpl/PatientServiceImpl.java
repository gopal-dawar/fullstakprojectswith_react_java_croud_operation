package com.patientrecordsystem.serviceImpl;

import com.patientrecordsystem.entity.Patients;
import com.patientrecordsystem.repository.PatientsRepo;
import com.patientrecordsystem.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientServiceImpl implements PatientService {

    @Autowired
    PatientsRepo patientsRepo;


    @Override
    public Patients addNewPatient(Patients patients) {
        return patientsRepo.save(patients);
    }

    @Override
    public List<Patients> viewAllPatients() {
        return patientsRepo.findAll();
    }

    @Override
    public String updatePatient(int id, Patients patients) {
        Patients p = patientsRepo.findById(id).orElseThrow();
        p.setName(patients.getName());
        p.setAge(patients.getAge());
        p.setDisease(patients.getDisease());
        p.setAdmittedDate(patients.getAdmittedDate());
        patientsRepo.save(p);
        return "Successfully Updated!";
    }

    @Override
    public Patients viewPatientById(int id) {
        return patientsRepo.findById(id).orElseThrow();
    }

    @Override
    public String deletePatientById(int id) {
        patientsRepo.deleteById(id);
        return "Successfully Deleted!";
    }
}
