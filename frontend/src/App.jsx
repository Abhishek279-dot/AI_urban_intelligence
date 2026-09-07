import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Platform from "./pages/Platform";
import Solutions from "./pages/Solutions";
import Insights from "./pages/Insights";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  return (
    <div className="app">
      <Navbar notificationsOpen={notificationsOpen} setNotificationsOpen={setNotificationsOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
