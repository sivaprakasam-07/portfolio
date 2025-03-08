import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaCode,
  FaFigma,
  FaPython,
  FaBootstrap,
} from 'react-icons/fa';
import {
  SiC,
  SiFirebase,
  SiMysql,
  SiRedux,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPostman,
} from 'react-icons/si';
import { TbBrandOpenai } from 'react-icons/tb';

const frontendSkills = [
  { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
  { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
  { name: 'JavaScript', icon: FaJsSquare, color: 'text-yellow-500' },
  { name: 'React', icon: FaReact, color: 'text-cyan-400' },
  { name: 'Redux', icon: SiRedux, color: 'text-purple-500' },
  { name: 'TailwindCSS', icon: SiTailwindcss, color: 'text-teal-400' },
  { name: 'Bootstrap', icon: FaBootstrap, color: 'text-purple-600' },
  { name: 'Figma', icon: FaFigma, color: 'text-red-500' },
];

const backendSkills = [
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
  { name: 'Express.js', icon: SiExpress, color: 'text-gray-500' },
  { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
  { name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
  { name: 'Python', icon: FaPython, color: 'text-blue-400' },
  { name: 'C', icon: SiC, color: 'text-gray-700' },
];

const tools = [
  { name: 'VS Code', icon: FaCode, color: 'text-blue-400' },
  { name: 'GitHub', icon: FaGithub, color: 'text-gray-800' },
  { name: 'ChatGPT', icon: TbBrandOpenai, color: 'text-green-400' },
  { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
  { name: 'MongoDB Compass', icon: SiMongodb, color: 'text-green-500' },
];

const Skills = ({ sectionsRef }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    sectionsRef.current.push(sectionRef.current);
  }, [sectionsRef]);

  const slideInVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" ref={sectionRef} className="py-12 bg-gradient-to-br from-gray-900 to-black">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
          Skills
        </h2>
      </div>

      {/* Frontend Skills */}
      <motion.div
        className="mb-12"
        variants={slideInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h3 className="text-xl text-white font-bold mb-6 text-center">Frontend</h3>
        <motion.div
          className="grid grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {frontendSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div key={skill.name} className="text-center" variants={itemVariants}>
                <Icon size={40} className={`${skill.color} mx-auto mb-2 hover:scale-110 transition-transform`} />
                <h4 className="text-white font-medium text-sm">{skill.name}</h4>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Backend Skills */}
      <motion.div
        className="mb-12"
        variants={slideInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h3 className="text-xl text-white font-bold mb-6 text-center">Backend</h3>
        <motion.div
          className="grid grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {backendSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div key={skill.name} className="text-center" variants={itemVariants}>
                <Icon size={40} className={`${skill.color} mx-auto mb-2 hover:scale-110 transition-transform`} />
                <h4 className="text-white font-medium text-sm">{skill.name}</h4>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Tools */}
      <motion.div
        variants={slideInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h3 className="text-xl text-white font-bold mb-6 text-center">Tools</h3>
        <motion.div
          className="grid grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <motion.div key={tool.name} className="text-center" variants={itemVariants}>
                <Icon size={40} className={`${tool.color} mx-auto mb-2 hover:scale-110 transition-transform`} />
                <h4 className="text-white font-medium text-sm">{tool.name}</h4>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;