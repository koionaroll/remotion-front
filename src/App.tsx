import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Schedule from "./pages/Schedule";
import Routine from "./pages/Routine";
import React from "react"

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Login />}/>
       <Route path="/schedule" element={<Schedule />}/>
       <Route path="/routine" element={<Routine />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
