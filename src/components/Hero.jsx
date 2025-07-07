import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Download, ChevronDown } from "lucide-react";

const Hero = ({ sectionsRef }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    sectionsRef?.current?.push(sectionRef.current);

    // Load particles.js
    if (window.particlesJS) {
      window.particlesJS.load("particles-js", "/particles.json");
    }
  }, [sectionsRef]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const slideInFromBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div id="home" ref={sectionRef} className="min-h-screen relative overflow-hidden bg-black">
      {/* Particles Background */}
      <div id="particles-js" className="absolute top-0 left-0 w-full h-full z-0"></div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 container mx-auto px-6 h-screen flex flex-col justify-center items-center text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 text-center"
          variants={slideInFromLeft}
        >
          Sivaprakasam T
        </motion.h1>
        <motion.h2
          className="text-3xl md:text-4xl mb-8"
          variants={slideInFromRight}
        >
          Fullstack Developer
        </motion.h2>

        {/* Buttons */}
        <motion.div
          className="flex gap-4 mb-12 justify-center"
          variants={containerVariants}
        >
          <motion.a
            href="Public\Sivaprakasam_T.pdf"
            className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
            variants={slideInFromBottom}
          >
            <Download size={20} /> View Resume
          </motion.a>
          <motion.a
            href="#contact"
            className="border-2 border-white/50 px-8 py-4 rounded-full flex items-center gap-2 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            variants={slideInFromBottom}
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Social Icons */}
        <motion.div className="flex gap-6 justify-center" variants={containerVariants}>
          <motion.a
            href="https://github.com/sivaprakasam-07"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-pink-200 transition-colors duration-300 transform hover:scale-110"
            variants={slideInFromBottom}
          >
            <Github size={28} />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-blue-200 transition-colors duration-300 transform hover:scale-110"
            variants={slideInFromBottom}
          >
            <Linkedin size={28} />
          </motion.a>
        </motion.div>

        {/* Scroll Down Icon */}
        <motion.div className="absolute bottom-8 animate-bounce" variants={slideInFromBottom}>
          <ChevronDown size={36} className="text-white/80" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
