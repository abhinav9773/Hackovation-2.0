// App.js

import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Hero from "./components/Hero";

import Prizes from "./components/Prizes";

import Timeline from "./components/Timeline";

import FAQ from "./components/FAQ";

import Footer from "./components/Footer";

import HackovationRegistration from "./components/register"; // adjust path/case to your file



function HomePage() {

  return (

    <div className="bg-black text-white">

      <Navbar />

      <Hero />

      <Prizes />

      <Timeline />

      <FAQ />

      <Footer />

    </div>

  );

}



function App() {

  return (

    <Router>

      <Routes>

        {/* Home page */}

        <Route path="/" element={<HomePage />} />

        {/* Registration page */}

        <Route path="/register" element={<HackovationRegistration />} />

      </Routes>

    </Router>

  );

}



export default App;