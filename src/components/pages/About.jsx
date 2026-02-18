import { motion } from "framer-motion";
import PageTransition from "../animations/PageTransition";

const About = () => {
    const features = [
        {
            icon: "🎯",
            title: "Problem Solver",
            description: "Strong DSA practice with focus on optimal solutions and system design."
        },
        {
            icon: "⚡",
            title: "Performance Focused",
            description: "Optimizing applications for speed, scalability, and user experience."
        },
        {
            icon: "🏆",
            title: "Hackathon Experience",
            description: "Built real-world solutions under pressure in competitive environments."
        },
        {
            icon: "🚀",
            title: "Production Ready",
            description: "Deployed and maintained applications with real users and traffic."
        }
    ];

    const journey = [
        { year: "2024", title: "Full Stack Developer", desc: "Building production-grade applications" },
        { year: "2023", title: "MERN Stack", desc: "Mastered MongoDB, Express, React, Node.js" },
        { year: "2022", title: "Started Journey", desc: "Began learning web development" }
    ];

    return (
        <PageTransition>
            <div className="min-h-screen pt-32 pb-20 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <motion.div
                            className="inline-block mb-4"
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-6xl">👨‍💻</span>
                        </motion.div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                                About Me
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            I'm a MERN stack developer focused on building scalable backend systems,
                            optimized frontend applications, and clean architecture solutions.
                        </p>
                    </motion.div>

                    {/* Feature Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative bg-[#111827]/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full group-hover:border-cyan-500/50 transition-all">
                                    <motion.div
                                        className="text-4xl mb-4"
                                        whileHover={{ scale: 1.2, rotate: 10 }}
                                    >
                                        {feature.icon}
                                    </motion.div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* What I Focus On & What Makes Me Different */}
                    <div className="grid md:grid-cols-2 gap-8 mb-20">
                        {/* Focus Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl blur-2xl" />
                            <div className="relative bg-[#111827]/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 group-hover:border-cyan-500/30 transition-all">
                                <div className="flex items-center gap-3 mb-6">
                                    <motion.span
                                        animate={{ rotate: [0, 360] }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        className="text-3xl"
                                    >
                                        🎯
                                    </motion.span>
                                    <h3 className="text-2xl font-bold text-white">What I Focus On</h3>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        { icon: "🏗️", text: "Clean architecture" },
                                        { icon: "📈", text: "Scalable backend systems" },
                                        { icon: "⚡", text: "Performance optimization" },
                                        { icon: "🔌", text: "REST API design" }
                                    ].map((item, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.5 + index * 0.1 }}
                                            whileHover={{ x: 10 }}
                                            className="flex items-center gap-3 text-gray-300 group/item cursor-pointer"
                                        >
                                            <span className="text-2xl group-hover/item:scale-125 transition-transform">
                                                {item.icon}
                                            </span>
                                            <span className="group-hover/item:text-cyan-400 transition-colors">
                                                {item.text}
                                            </span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* Different Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl" />
                            <div className="relative bg-[#111827]/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 group-hover:border-purple-500/30 transition-all">
                                <div className="flex items-center gap-3 mb-6">
                                    <motion.span
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="text-3xl"
                                    >
                                        ✨
                                    </motion.span>
                                    <h3 className="text-2xl font-bold text-white">What Makes Me Different</h3>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        { icon: "💡", text: "Strong DSA practice" },
                                        { icon: "🏆", text: "Hackathon exposure" },
                                        { icon: "🚀", text: "Real-world deployments" },
                                        { icon: "🎓", text: "Continuous learning" }
                                    ].map((item, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.5 + index * 0.1 }}
                                            whileHover={{ x: 10 }}
                                            className="flex items-center gap-3 text-gray-300 group/item cursor-pointer"
                                        >
                                            <span className="text-2xl group-hover/item:scale-125 transition-transform">
                                                {item.icon}
                                            </span>
                                            <span className="group-hover/item:text-purple-400 transition-colors">
                                                {item.text}
                                            </span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                    {/* Journey Timeline */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="relative"
                    >
                        <h3 className="text-3xl font-bold text-center mb-12">
                            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                                My Journey
                            </span>
                        </h3>
                        <div className="relative">
                            {/* Center Line */}
                            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 -translate-x-1/2 hidden md:block" />

                            <div className="space-y-12">
                                {journey.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.8 + index * 0.2 }}
                                        className={`flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                            }`}
                                    >
                                        <div className="flex-1" />

                                        {/* Center Dot */}
                                        <motion.div
                                            whileHover={{ scale: 1.5 }}
                                            className="relative z-10 hidden md:block"
                                        >
                                            <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-4 border-[#0f172a]" />
                                        </motion.div>

                                        {/* Content Card */}
                                        <motion.div
                                            whileHover={{ scale: 1.05, x: index % 2 === 0 ? 10 : -10 }}
                                            className="flex-1"
                                        >
                                            <div className="bg-[#111827]/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
                                                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                                                    {item.year}
                                                </div>
                                                <h4 className="text-xl font-semibold text-white mb-2">
                                                    {item.title}
                                                </h4>
                                                <p className="text-gray-400">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </PageTransition>
    );
};

export default About;
