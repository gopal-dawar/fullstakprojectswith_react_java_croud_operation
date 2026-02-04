import { useState } from "react";

const AddPatients = () => {
  const patientfield = {
    name: "",
    age: 0,
    disease: "",
    admittedDate: "",
  };
  const [patient, setPatient] = useState(patientfield);

  const formhandling = async (e) => {
    e.preventDefault();

    const payload = {
      ...patient,
      age: Number(patient.age),
      admittedDate: String(patient.admittedDate),
    };

    await fetch(`http://localhost:8080/save`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    alert("Successfully Added!");

    setPatient(patientfield);
  };

  return (
    <>
      <form onSubmit={(e) => formhandling(e)} className="patient-form">
        <input
          type="text"
          value={patient.name}
          onChange={(e) => setPatient({ ...patient, name: e.target.value })}
          placeholder="Enter Patient Name"
        />
        <input
          type="number"
          placeholder="Enter Age"
          value={patient.age}
          onChange={(e) => setPatient({ ...patient, age: e.target.value })}
        />
        <input
          type="text"
          value={patient.disease}
          onChange={(e) => setPatient({ ...patient, disease: e.target.value })}
          placeholder="Enter Disease"
        />
        <input
          type="date"
          value={patient.admittedDate}
          onChange={(e) =>
            setPatient({ ...patient, admittedDate: e.target.value })
          }
        />
        <button>Add Patient</button>
      </form>
    </>
  );
};

export default AddPatients;
