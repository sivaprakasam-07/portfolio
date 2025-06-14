import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Web Developer",
    company: "Syasan’s Career Analytics",
    period: "June 2024 – Sep 2024",
    responsibilities: [
      "Developed and maintained responsive websites, ensuring optimal performance and user experience.",
      "Collaborated with the team to design and implement front-end and back-end features using modern web technologies.",
      "Gained hands-on experience in debugging, testing, and deploying web applications to meet project requirements.",
      "Contributed to enhancing website functionality and usability, aligning with client objectives.",
    ],
  },
  {
    title: "MERN Developer",
    company: "Skill First Labs",
    period: "Dec 2024 – Jan 2025",
    responsibilities: [
      "Designed and developed responsive and dynamic web applications, ensuring seamless functionality and enhanced user experience across devices.",
      "Collaborated effectively with cross-functional teams to implement front-end and back-end features using cutting-edge web technologies such as React.js, Node.js, and Tailwind CSS.",
      "Optimized application performance by identifying and resolving bugs, conducting thorough testing, and deploying solutions aligned with project goals.",
      "Enhanced website usability and functionality, adhering to client objectives and leveraging user feedback for continuous improvement.",
    ],
  },
];

const Experience = ({ sectionsRef }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    sectionsRef.current.push(sectionRef.current);
  }, [sectionsRef]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const listVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section id="experience" ref={sectionRef} className="py-12 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Experience
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="group bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300"
              variants={cardVariants}
            >
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
                  {exp.title}
                </h3>
                <p className="text-sm text-gray-400">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.period}</p>
              </div>
              <motion.ul
                className="list-disc list-inside space-y-2 text-sm text-gray-300"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {exp.responsibilities.map((resp, idx) => (
                  <motion.li
                    key={idx}
                    className="leading-relaxed group-hover:text-white transition"
                    variants={listVariants}
                  >
                    {resp}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
