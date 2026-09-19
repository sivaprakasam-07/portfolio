import { motion } from "framer-motion";
import { useState } from "react";
import PageTransition from "../animations/PageTransition";
import experience from "../data/experience";

const Experience = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <PageTransition>
            <div className="min-h-screen pt-32 pb-20 px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-20"
                    >
                        <motion.div
                            className="inline-block mb-4"
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <span className="text-6xl">🎯</span>
                        </motion.div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                                Work Experience
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            My professional journey in software development
                        </p>
                    </motion.div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Center Line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500" />

                        <div className="space-y-16">
                            {experience.map((job, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.3 }}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                        }`}
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                                        <motion.div
                                            animate={{
                                                scale: hoveredIndex === index ? [1, 1.5, 1] : 1,
                                                boxShadow: hoveredIndex === index
                                                    ? [
                                                        "0 0 0 0 rgba(34, 211, 238, 0.7)",
                                                        "0 0 0 20px rgba(34, 211, 238, 0)",
                                                        "0 0 0 0 rgba(34, 211, 238, 0)"
                                                    ]
                                                    : "0 0 0 0 rgba(34, 211, 238, 0)"
                                            }}
                                            transition={{ duration: 1, repeat: hoveredIndex === index ? Infinity : 0 }}
                                            className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-4 border-[#0f172a]"
                                        />
                                    </div>

                                    {/* Content Card */}
                                    <motion.div
                                        className={`w-full md:w-[calc(50%-3rem)] ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                                            } pl-16 md:pl-0 md:pr-0`}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <div className="relative group">
                                            {/* Glow Effect */}
                                            <motion.div
                                                className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl"
                                                animate={{
                                                    opacity: hoveredIndex === index ? [0.3, 0.6, 0.3] : 0
                                                }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            />

                                            {/* Card */}
                                            <div className="relative bg-[#111827] border border-white/10 rounded-3xl p-8 group-hover:border-cyan-500/50 transition-all">
                                                {/* Header */}
                                                <div className="mb-6">
                                                    <motion.div
                                                        className="flex items-start justify-between mb-4"
                                                        animate={{
                                                            x: hoveredIndex === index ? [0, 5, 0] : 0
                                                        }}
                                                        transition={{ duration: 1, repeat: Infinity }}
                                                    >
                                                        <div className="flex-1">
                                                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                                                {job.role}
                                                            </h3>
                                                            <div className="flex flex-wrap items-center gap-3 text-gray-400 text-sm">
                                                                <span className="flex items-center gap-2">
                                                                    <span className="text-lg">🏢</span>
                                                                    {job.company}
                                                                </span>
                                                                <span className="text-cyan-500">•</span>
                                                                <span className="flex items-center gap-2">
                                                                    <span className="text-lg">📅</span>
                                                                    {job.duration}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <motion.div
                                                            whileHover={{ rotate: 360 }}
                                                            transition={{ duration: 0.6 }}
                                                            className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-cyan-500/30"
                                                        >
                                                            <span className="text-2xl">
                                                                {index === 0 ? "🚀" : "💻"}
                                                            </span>
                                                        </motion.div>
                                                    </motion.div>

                                                    <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
                                                </div>

                                                {/* Points */}
                                                <ul className="space-y-4">
                                                    {job.points.map((point, i) => (
                                                        <motion.li
                                                            key={i}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: index * 0.3 + i * 0.1 }}
                                                            whileHover={{ x: 10 }}
                                                            className="flex items-start gap-3 text-gray-300 group/item cursor-pointer"
                                                        >
                                                            <motion.span
                                                                className="mt-1 text-cyan-400 text-xl"
                                                                whileHover={{ scale: 1.3, rotate: 360 }}
                                                            >
                                                                ✓
                                                            </motion.span>
                                                            <span className="leading-relaxed group-hover/item:text-white transition-colors">
                                                                {point}
                                                            </span>
                                                        </motion.li>
                                                    ))}
                                                </ul>

                                                {/* Decorative Elements */}
                                                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Empty Space for Alternating Layout */}
                                    <div className="hidden md:block w-[calc(50%-3rem)]" />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="mt-20 text-center"
                    >
                        <div className="relative inline-block">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-20 blur-2xl" />
                            <div className="relative bg-[#111827]/50 backdrop-blur-xl border border-white/10 rounded-3xl px-8 py-6">
                                <p className="text-gray-300 flex items-center gap-3">
                                    <motion.span
                                        animate={{ rotate: [0, 360] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        className="text-3xl"
                                    >
                                        💼
                                    </motion.span>
                                    <span>
                                        Open to <span className="font-semibold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                                            new opportunities
                                        </span> and exciting collaborations
                                    </span>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Experience;
