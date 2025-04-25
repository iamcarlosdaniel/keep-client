import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import axios from "axios";

// Components
import SignIn from "./views/SignIn";
import Dashboard from "./views/Dashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get("http://localhost:3000/api/v1/auth/status", {
          withCredentials: true,
        });
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
        console.log(error);
      }
    };

    checkAuth();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/sign-in" />} />
        <Route
          path="/sign-in"
          element={
            isAuthenticated ? <Navigate replace to="/dashboard" /> : <SignIn />
          }
        />
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? <Dashboard /> : <Navigate replace to="/sign-in" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
