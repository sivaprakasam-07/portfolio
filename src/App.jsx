// filepath: src/App.jsx
import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact"; // Import SplashCursor

const App = () => {
  const sectionsRef = useRef([]);

  return (
    <div>
      <Navbar sectionsRef={sectionsRef} />
      <Hero sectionsRef={sectionsRef} />
      <About sectionsRef={sectionsRef} />
      <Skills sectionsRef={sectionsRef} />
      <Projects sectionsRef={sectionsRef} />
      <Experience sectionsRef={sectionsRef} />
      <Contact sectionsRef={sectionsRef} />
    </div>
  );
};

export default App;