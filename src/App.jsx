// filepath: src/App.jsx
import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const sectionsRef = useRef([]);

  return (
    <div className="bg-canvas text-content-primary min-h-screen font-sans selection:bg-accent-muted selection:text-accent-mint">
      <Navbar sectionsRef={sectionsRef} />
      <Hero sectionsRef={sectionsRef} />
      <About sectionsRef={sectionsRef} />
      <Skills sectionsRef={sectionsRef} />
      <Projects sectionsRef={sectionsRef} />
      <Experience sectionsRef={sectionsRef} />
      <Contact sectionsRef={sectionsRef} />
      <Footer />
    </div>
  );
};

export default App;