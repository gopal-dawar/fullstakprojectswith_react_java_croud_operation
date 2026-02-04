import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PatientList = () => {
  const [patient, setPatient] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchdata = async () => {
      const re = await fetch(`http://localhost:8080/viewAll`);
      const data = await re.json();
      setPatient(data);
    };
    fetchdata();
  }, []);

  const deleteData = async (id) => {
    await fetch(`http://localhost:8080/delete/${id}`, {
      method: "DELETE",
    });
    const result = patient.filter((data) => data.id !== id);
    setPatient(result);
  };

  return (
    <div className="patient-list-container">
      <h2 className="title">Patient List</h2>

      <table className="patient-table">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Age</th>
            <th>Disease</th>
            <th>Admitted Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {patient.map((data) => {
            return (
              <tr key={data.id}>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.disease}</td>
                <td>{data.admittedDate}</td>
                <td>
                  <button
                    onClick={() => {
                      navigate(`/udpatedata/${data.id}`);
                    }}
                    className="btn edit"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteData(data.id)}
                    className="btn delete"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;
