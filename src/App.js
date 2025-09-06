import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Prizes from "./components/Prizes";
import Timeline from "./components/Timeline";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
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

export default App;
