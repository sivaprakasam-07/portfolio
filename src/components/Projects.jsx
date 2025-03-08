import React, { useEffect, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import PixelTransition from "./PixelTransition";

const projects = [
  {
    title: "Event Management System",
    description: "A comprehensive platform for managing events and registrations",
    image: "https://i.postimg.cc/1X2nbP64/Event-ss.png",
    tech: ["React JS", "Tailwind CSS", "Node JS", "MongoDB", "Express JS"],
    github: "https://github.com/sivaprakasam-07/Event-Tracker",
    live: "#",
  },
  {
    title: "Symposium Website",
    description: "Dynamic website for technical symposium with registration system",
    image: "https://i.postimg.cc/MG64rjSP/Sympo-ss.png",
    tech: ["HTML", "CSS", "JS"],
    github: "https://github.com/sivaprakasam-07/E-AXION-24",
    live: "https://e--axion24.web.app/",
  },
  {
    title: "W-EBAR",
    description:
      "A Web-Based AR application for visualizing 3D models of the food items in the menu",
    image: "https://i.postimg.cc/kXCpThVh/W-EBAR.jpg",
    tech: ["React JS", "TailwindCSS", "Firebase-GoogleAuth,Database,Hosting", "A-frame"],
    github: "https://github.com/sivaprakasam-07/W-EBAR",
    live: "https://we-bar-03.web.app/",
  },
];

const Projects = ({ sectionsRef }) => {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    sectionsRef.current.push(sectionRef.current);
  }, [sectionsRef]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-900 to-black"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
          Projects
        </h2>

        {/* Horizontal Scrollable Container */}
        <div className="relative overflow-hidden">
          <motion.div
            ref={scrollRef}
            className="flex gap-6 cursor-grab overflow-x-auto px-4 pb-6 no-scrollbar"
            drag="x"
            dragConstraints={{ left: -scrollRef.current?.scrollWidth + scrollRef.current?.clientWidth, right: 0 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group min-w-[350px] md:min-w-[450px] lg:min-w-[500px] rounded-2xl overflow-hidden shadow-lg bg-gray-800 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Image Section with Pixel Transition */}
                <div className="w-full h-[300px] overflow-hidden">
                  <PixelTransition
                    firstContent={
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />
                    }
                    secondContent={
                      <div className="flex items-center justify-center w-full h-full bg-gray-900 text-white text-xl font-bold">
                        {project.title}
                      </div>
                    }
                    gridSize={7}
                    pixelColor="#ffffff"
                    animationStepDuration={0.3}
                    className="w-full h-full"
                  />
                </div>
                {/* Content Section */}
                <div className="p-6">
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 text-sm text-white bg-purple-500/20 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <Github size={20} /> Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <ExternalLink size={20} /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
