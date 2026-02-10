import React from "react";
import Dashboard from "./component/Dashboard";
import { Route, Routes } from "react-router-dom";
import AddAccount from "./component/AddAccount";
import VIewAccountById from "./component/VIewAccountById";
import Home from "./component/Home";
import UpdateAccount from "./component/UpdateAccount";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/home" element={<Home />} />
          <Route path="/addaccount" element={<AddAccount />} />
          <Route path="/viewaccount" element={<VIewAccountById />} />
          <Route path="/updateaccount/:id" element={<UpdateAccount />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
