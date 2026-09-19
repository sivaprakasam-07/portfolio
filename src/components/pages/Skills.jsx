import { motion } from "framer-motion";
import { useState } from "react";
import PageTransition from "../animations/PageTransition";

const Skills = () => {
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const skillCategories = [
        {
            title: "Languages",
            icon: "💻",
            color: "from-cyan-500 to-blue-500",
            skills: [
                { name: "JavaScript", level: 90, icon: "🟨" },
                { name: "Python", level: 75, icon: "🐍" },
                { name: "TypeScript", level: 85, icon: "🔷" },
                { name: "C", level: 70, icon: "⚙️" }
            ]
        },
        {
            title: "Frontend",
            icon: "🎨",
            color: "from-purple-500 to-pink-500",
            skills: [
                { name: "React", level: 92, icon: "⚛️" },
                { name: "Next.js", level: 85, icon: "▲" },
                { name: "Tailwind CSS", level: 95, icon: "🎐" },
                { name: "Redux", level: 80, icon: "🔄" }
            ]
        },
        {
            title: "Backend",
            icon: "⚙️",
            color: "from-green-500 to-emerald-500",
            skills: [
                { name: "Node.js", level: 88, icon: "💚" },
                { name: "Express.js", level: 90, icon: "🚂" },
                { name: "REST APIs", level: 92, icon: "🔌" },
                { name: "GraphQL", level: 75, icon: "📊" }
            ]
        },
        {
            title: "Database",
            icon: "🗄️",
            color: "from-orange-500 to-red-500",
            skills: [
                { name: "MongoDB", level: 88, icon: "🍃" },
                { name: "MySQL", level: 80, icon: "🐬" },
                { name: "Firebase", level: 85, icon: "🔥" },
                { name: "PostgreSQL", level: 75, icon: "🐘" }
            ]
        }
    ];

    const tools = [
        { name: "Git", icon: "📌", color: "text-orange-400" },
        { name: "Docker", icon: "🐳", color: "text-blue-400" },
        { name: "VS Code", icon: "💙", color: "text-blue-500" },
        { name: "Postman", icon: "📮", color: "text-orange-500" },
        { name: "Figma", icon: "🎨", color: "text-purple-400" },
        { name: "AWS", icon: "☁️", color: "text-yellow-400" }
    ];

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
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <span className="text-6xl">⚡</span>
                        </motion.div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                                Skills & Expertise
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Technologies and tools I use to bring ideas to life
                        </p>
                    </motion.div>

                    {/* Skill Categories */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {skillCategories.map((category, catIndex) => (
                            <motion.div
                                key={catIndex}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: catIndex * 0.1 }}
                                className="relative group"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 rounded-3xl blur-2xl group-hover:opacity-20 transition-opacity`} />
                                <div className="relative bg-[#111827]/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 group-hover:border-white/20 transition-all">
                                    <div className="flex items-center gap-3 mb-8">
                                        <motion.span
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="text-4xl"
                                        >
                                            {category.icon}
                                        </motion.span>
                                        <h2 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                                            {category.title}
                                        </h2>
                                    </div>

                                    <div className="space-y-6">
                                        {category.skills.map((skill, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: catIndex * 0.1 + index * 0.05 }}
                                                onMouseEnter={() => setHoveredSkill(`${catIndex}-${index}`)}
                                                onMouseLeave={() => setHoveredSkill(null)}
                                            >
                                                <div className="flex items-center justify-between mb-2">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-xl">{skill.icon}</span>
                                                        <span className="font-medium text-white">{skill.name}</span>
                                                    </div>
                                                    <motion.span
                                                        className={`text-sm font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                                                        animate={{
                                                            scale: hoveredSkill === `${catIndex}-${index}` ? 1.2 : 1
                                                        }}
                                                    >
                                                        {skill.level}%
                                                    </motion.span>
                                                </div>
                                                <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                                                    <motion.div
                                                        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${category.color} rounded-full`}
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${skill.level}%` }}
                                                        transition={{
                                                            duration: 1,
                                                            delay: catIndex * 0.1 + index * 0.05 + 0.3,
                                                            ease: "easeOut"
                                                        }}
                                                    />
                                                    <motion.div
                                                        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${category.color} opacity-50 blur-sm`}
                                                        initial={{ width: 0 }}
                                                        animate={{ width: hoveredSkill === `${catIndex}-${index}` ? `${skill.level}%` : "0%" }}
                                                        transition={{ duration: 0.3 }}
                                                    />
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Tools & Technologies */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl" />
                        <div className="relative bg-[#111827]/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold mb-3">
                                    <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                                        Tools & Technologies
                                    </span>
                                </h2>
                                <p className="text-gray-400">Development tools I work with daily</p>
                            </div>

                            <div className="flex flex-wrap justify-center gap-4">
                                {tools.map((tool, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.6 + index * 0.1 }}
                                        whileHover={{ scale: 1.15, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="group cursor-pointer"
                                    >
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <div className="relative bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 group-hover:border-cyan-500/50 transition-all">
                                                <div className="flex items-center gap-3">
                                                    <motion.span
                                                        className="text-3xl"
                                                        animate={{ rotate: [0, 10, -10, 0] }}
                                                        transition={{ duration: 0.5, repeat: 0 }}
                                                        whileHover={{ rotate: [0, -10, 10, 0] }}
                                                    >
                                                        {tool.icon}
                                                    </motion.span>
                                                    <span className={`font-semibold ${tool.color} group-hover:text-white transition-colors`}>
                                                        {tool.name}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Learning Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-16 text-center"
                    >
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="inline-block"
                        >
                            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl px-8 py-4">
                                <p className="text-gray-300 flex items-center gap-3">
                                    <span className="text-2xl">🚀</span>
                                    <span>
                                        <span className="font-semibold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                                            Always Learning
                                        </span>
                                        {" "}• Currently exploring Web3 & AI Integration
                                    </span>
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Skills;
