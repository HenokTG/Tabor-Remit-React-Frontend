import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "./CSS/Home.css"
import "./CSS/Summary.css"
import "react-notifications-component/dist/theme.css";
import "animate.css/animate.min.css";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import HomePage from "./Pages/Homepage";
import Summary from "./Pages/Summary";

function App() {
 
  return (
    <div className={`App`}>
      <Router>
        <Navbar />
        <Toaster position="top-center" />
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/summary" element={<Summary />} exact />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
