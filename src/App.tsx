// src/App.tsx
import React from "react";
// Keep these imports:
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-honeydew-bg text-olive-text selection:bg-pastel-green selection:text-white">
      <h1></h1> {/* Add this line */}
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
