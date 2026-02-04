import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateData = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [patient, setPatient] = useState({});
  useEffect(() => {
    const fetchdata = async () => {
      const re = await fetch(`http://localhost:8080/viewById/${id}`, {
        method: "GET",
      });
      setPatient(await re.json());
    };
    fetchdata();
  }, [id]);

  const formhandling = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:8080/updateById/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(patient),
    });
    alert("Successfully updated!");
    setPatient({
      name: "",
      age: 0,
      disease: "",
      admittedDate: "",
    });
    navigate(-1);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          formhandling(e);
        }}
        className="patient-form"
      >
        <input
          type="text"
          value={patient.name}
          onChange={(e) => setPatient({ ...patient, name: e.target.value })}
          placeholder="Enter Patient Name"
        />
        <input
          type="number"
          value={patient.age}
          onChange={(e) => setPatient({ ...patient, age: e.target.value })}
          placeholder="Enter Age"
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

export default UpdateData;
