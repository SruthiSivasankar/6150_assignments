import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Jobs from "./components/Jobs/Jobs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact={true} path="/" element={<App />} />

        <Route exact={true} path="/home" element={<Home />} />

        <Route exact={true} path="/about" element={<About />} />

        <Route exact={true} path="/jobs" element={<Jobs />} />

        <Route exact={true} path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
