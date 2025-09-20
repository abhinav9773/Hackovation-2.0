import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Prizes from "./components/Prizes";
import Timeline from "./components/Timeline";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Register from "./components/Register"; // ✅ Import Register page

function App() {
  return (
    <Router>
      <div className="bg-black text-white">
        <Navbar />

        <Routes>
          {/* Home Page (with Hero, Prizes, etc.) */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Prizes />
                <Timeline />
                <FAQ />
                <Footer />
              </>
            }
          />

          {/* Register Page */}
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
