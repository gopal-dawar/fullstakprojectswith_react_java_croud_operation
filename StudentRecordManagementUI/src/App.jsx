import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import AddStudent from "./component/AddStudent";
import StudentList from "./component/StudentList";
import UpdateStudentById from "./component/UpdateStudentById";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/addstudent" element={<AddStudent />} />
          <Route path="/studentlist" element={<StudentList />} />
          <Route path="/updatestudentbyid/:id" element={<UpdateStudentById />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
