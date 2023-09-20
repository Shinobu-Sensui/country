import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Er from "./pages/Er";
import Country from "./pages/Country";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Country/>} />
        <Route path="*" element={<Er />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
