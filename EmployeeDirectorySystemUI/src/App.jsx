import React from "react";
import Dashboard from "./components/dashboard/Dashboard";
import AddEmployee from "./components/dashboard/AddEmployee";
import SearchByName from "./components/dashboard/SearchByName";
import { Route, Routes } from "react-router-dom";
import Employees from "./components/dashboard/Employees";
import UpdateSalary from "./components/dashboard/UpdateSalary";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/addemployee" element={<AddEmployee />} />
          <Route path="/searchByName" element={<SearchByName />} />
          <Route path="/employeelist" element={<Employees />} />
          <Route path="/updatesalary/:id" element={<UpdateSalary />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
