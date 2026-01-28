import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./component/dashboard/Dashboard";
import Addbook from "./component/dashboard/Addbook";
import BooksList from "./component/dashboard/BooksList";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/addbook" element={<Addbook />} />
          <Route path="/bookslist" element={<BooksList />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
