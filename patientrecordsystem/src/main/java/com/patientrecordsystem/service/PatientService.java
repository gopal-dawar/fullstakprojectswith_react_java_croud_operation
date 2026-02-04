package com.patientrecordsystem.service;

import com.patientrecordsystem.entity.Patients;

import java.util.List;

public interface PatientService {
    Patients addNewPatient(Patients patients);

    List<Patients> viewAllPatients();

    String updatePatient(int id, Patients patients);

    Patients viewPatientById(int id);

    String deletePatientById(int id);
}
