import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";
import "./CSS/Summary.css";
import "react-notifications-component/dist/theme.css";
import "animate.css/animate.min.css";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Landing-page";
import Summary from "./Pages/Summary";
import Error from "./Pages/Error";
import Success from "./Pages/Success";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div className="App font-serif">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="summary" element={<Summary />} exact />
          <Route path="success" element={<Success />} exact />
          <Route path="error" element={<Error />} exact />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
