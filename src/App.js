import React from "react";
import { Routes, Route } from "react-router-dom";
// Routes
import { Home } from "./pages/Home";
import { HomeTwo } from "./pages/HomeTwo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hometwo" element={<HomeTwo />} />
    </Routes>
  );
}

export default App;
