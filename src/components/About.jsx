import React, { useEffect, useRef } from "react";
import { Code2, Database, Globe } from "lucide-react";

const About = ({ sectionsRef }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    sectionsRef.current.push(sectionRef.current);
  }, [sectionsRef]);

  return (
    <section id="about" ref={sectionRef} className="py-16 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-8">
        {/* Section Title */}
        <h2 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 animate-pulse">
          About Me
        </h2>

        {/* Intro Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg md:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-yellow-200 to-lime-300 animate-fade-in">
            Hey there! 👋 I'm <span className="font-bold">Sivaprakasam T</span>,
            a passionate Fullstack Developer with a knack for creating
            scalable, innovative digital solutions using cutting-edge
            technologies. I specialize in crafting dynamic user interfaces,
            building robust backend systems, and delivering seamless
            fullstack solutions for diverse projects.
          </p>
        </div>

        {/* Skill Highlights */}
        <div className="flex flex-col md:flex-row justify-around items-center gap-10">
          {/* Frontend */}
          <div className="group flex flex-col items-center text-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-full mb-4">
              <Code2 size={48} className="text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">Frontend Development</h3>
            <p className="text-gray-400 max-w-xs">
              Crafting stunning and responsive user interfaces using modern frameworks.
            </p>
          </div>

          {/* Backend */}
          <div className="group flex flex-col items-center text-center">
            <div className="bg-gradient-to-r from-green-500 to-teal-500 p-4 rounded-full mb-4">
              <Database size={48} className="text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">Backend Development</h3>
            <p className="text-gray-400 max-w-xs">
              Building scalable server-side systems with robust architectures.
            </p>
          </div>

          {/* Fullstack */}
          <div className="group flex flex-col items-center text-center">
            <div className="bg-gradient-to-r from-pink-500 to-red-500 p-4 rounded-full mb-4">
              <Globe size={48} className="text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">Fullstack Development</h3>
            <p className="text-gray-400 max-w-xs">
              Delivering end-to-end solutions with seamless integration and performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;