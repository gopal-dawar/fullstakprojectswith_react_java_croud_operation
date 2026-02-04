import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import AddVehicle from "./components/dashboard/AddVehicle";
import VehicleList from "./components/dashboard/VehicleList";
import UpdateVehicle from "./components/dashboard/UpdateVehicle";
import SearchByModelOrYear from "./components/dashboard/SearchByModelOrYear";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="addvehicle" element={<AddVehicle />} />
        <Route path="vehiclelist" element={<VehicleList />} />
        <Route path="updatevehicle/:id" element={<UpdateVehicle />} />
        <Route
          path="searchByModelOrYear/:modelyear"
          element={<SearchByModelOrYear />}
        />
      </Route>
    </Routes>
  );
};

export default App;
