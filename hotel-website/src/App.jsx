import React from "react";
import About from "./components/about/About";
import Intro from "./components/introduction/Intro";
import "./app.css";
import Contact from "./components/contact/Contact";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainComp from "./MainComp";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function App() {
  let navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <div className="app">
        <div>
          <Routes>
            <Route path="/" element={<MainComp />} />
            <Route path="/Intro" element={<Intro />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
