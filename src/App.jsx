import { useState } from "react";
import Skill from "./Pages/Skill";
import Contactpage from "./Pages/Contactpage";
import Workpage from "./Pages/Workpage";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Aboutpage from "./Pages/Aboutpage";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/aboutpage" element={<Aboutpage />}></Route>
        <Route path="/skill" element={<Skill />}></Route>
        <Route path="/workpage" element={<Workpage />}></Route>
        <Route path="/contactpage" element={<Contactpage />}></Route>
      </Routes>
    </>
  );
}

export default App;
