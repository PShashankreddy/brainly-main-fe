import { Dashboard } from "./pages/Dashboard";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { Landing } from "./pages/Landing";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [token, setToken] = useState<string | null>(() => {
    // Initialize with token from localStorage if it exists
    return localStorage.getItem("token");
  });

  useEffect(() => {
    // Listen for storage changes
    const handleStorageChange = () => {
      setToken(localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/dashboard"
          element={token ? <Dashboard /> : <Navigate to="/signin" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
