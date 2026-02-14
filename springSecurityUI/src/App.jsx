import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

// simple auth check (session-based)
const isAuthenticated = async () => {
  try {
    const res = await fetch("http://localhost:8080/hello", {
      credentials: "include",
    });
    return res.ok;
  } catch {
    return false;
  }
};

// protected route component
const PrivateRoute = ({ children }) => {
  const [allowed, setAllowed] = React.useState(null);

  React.useEffect(() => {
    isAuthenticated().then(setAllowed);
  }, []);

  if (allowed === null) return <p>Loading...</p>;
  return allowed ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute> 
          }
        />

        {/* default route */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
