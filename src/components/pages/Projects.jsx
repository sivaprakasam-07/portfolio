import { motion } from "framer-motion";
import { useState } from "react";
import PageTransition from "../animations/PageTransition";
import projects from "../data/projects";

const Projects = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <PageTransition>
            <div className="min-h-screen pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <motion.div
                            className="inline-block mb-4"
                            animate={{
                                rotate: [0, 10, -10, 0],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <span className="text-6xl">💼</span>
                        </motion.div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                                Featured Projects
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Showcasing my best work in full-stack development
                        </p>
                    </motion.div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="group relative"
                            >
                                {/* Glow Effect */}
                                <motion.div
                                    className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl"
                                    animate={{
                                        opacity: hoveredIndex === index ? [0.5, 0.8, 0.5] : 0
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />

                                {/* Card */}
                                <motion.div
                                    className="relative h-full bg-[#111827] border border-white/10 rounded-3xl p-8 overflow-hidden group-hover:border-cyan-500/50 transition-all"
                                    whileHover={{ y: -10 }}
                                >
                                    {/* Background Gradient */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                                    {/* Icon */}
                                    <motion.div
                                        className="relative mb-6 flex items-center justify-between"
                                        animate={{
                                            x: hoveredIndex === index ? [0, 5, 0] : 0
                                        }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                    >
                                        <div className="flex items-center gap-3">
                                            <motion.div
                                                className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-2xl border border-cyan-500/30"
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.6 }}
                                            >
                                                🚀
                                            </motion.div>
                                            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                                        </div>
                                    </motion.div>

                                    {/* Content */}
                                    <div className="relative">
                                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                                            {project.title}
                                        </h3>

                                        <p className="text-gray-400 mb-6 leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tech.map((tech, i) => (
                                                <motion.span
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: index * 0.2 + i * 0.1 }}
                                                    whileHover={{ scale: 1.1, y: -2 }}
                                                    className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 text-xs font-semibold"
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>

                                        {/* Action Button */}
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white font-semibold group/btn overflow-hidden relative"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                            <span className="relative flex items-center gap-2">
                                                <svg
                                                    className="w-5 h-5 group-hover/btn:rotate-12 transition-transform"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                                View Code
                                                <motion.span
                                                    animate={{ x: hoveredIndex === index ? [0, 5, 0] : 0 }}
                                                    transition={{ duration: 1, repeat: Infinity }}
                                                >
                                                    →
                                                </motion.span>
                                            </span>
                                        </motion.a>
                                    </div>

                                    {/* Decorative Elements */}
                                    <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="mt-20 text-center"
                    >
                        <div className="relative inline-block">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-20 blur-2xl" />
                            <div className="relative bg-[#111827]/50 backdrop-blur-xl border border-white/10 rounded-3xl px-8 py-6">
                                <p className="text-gray-300 mb-4">
                                    <span className="text-2xl mr-2">💡</span>
                                    Want to see more projects?
                                </p>
                                <motion.a
                                    href="https://github.com/sivaprakasam-07"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white font-semibold"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    Visit My GitHub
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Projects;
