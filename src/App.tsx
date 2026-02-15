import { Dashboard } from "./pages/Dashboard";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() 
{
  return (
  <BrowserRouter> 
    <Routes>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/signin" element={<SignIn/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
    </Routes>
  </BrowserRouter>
)}

export default App
