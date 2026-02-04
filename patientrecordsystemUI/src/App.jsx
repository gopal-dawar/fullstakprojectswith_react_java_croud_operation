import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import AddPatients from "./component/AddPatients";
import PatientList from "./component/PatientList";
import UpdateData from "./component/UpdateData";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/addpatient" element={<AddPatients />} />
          <Route path="/patientlist" element={<PatientList />} />
          <Route path="/udpatedata/:id" element={<UpdateData />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
