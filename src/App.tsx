import { Dashboard } from "./pages/Dashboard";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { Landing } from "./pages/Landing";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() 
{
  const token = localStorage.getItem('token');

  return (
  <BrowserRouter> 
    <Routes>
      <Route path="/" element={token ? <Dashboard /> : <Landing />} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/dashboard" element={token ? <Dashboard/> : <Navigate to="/signin" />} />
    </Routes>
  </BrowserRouter>
)
}

export default App
