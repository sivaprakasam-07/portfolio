import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PageTransition from "../animations/PageTransition";
import Button from "../ui/Button";

const Home = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <PageTransition>
            <div className="relative min-h-screen flex items-center overflow-hidden pt-20">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        className="absolute top-20 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
                        animate={{
                            x: mousePosition.x,
                            y: mousePosition.y,
                            scale: [1, 1.2, 1],
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                        animate={{
                            x: -mousePosition.x,
                            y: -mousePosition.y,
                            scale: [1, 1.1, 1],
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.3, 1],
                            rotate: [0, 180, 360],
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-8"
                    >
                        <motion.div variants={itemVariants} className="space-y-4">
                            <motion.div
                                className="inline-block"
                                whileHover={{ scale: 1.05 }}
                            >
                                <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium">
                                    👋 Hey there, I'm
                                </span>
                            </motion.div>

                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold">
                                <span className="block bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                                    Sivaprakasam
                                </span>
                                <span className="block mt-2">
                                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                                        Thangavel
                                    </span>
                                </span>
                            </h1>
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-4">
                            <div className="flex flex-wrap gap-3 items-center">
                                <motion.span
                                    className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg text-cyan-300 font-semibold"
                                    whileHover={{ scale: 1.05, borderColor: "rgb(34, 211, 238)" }}
                                >
                                    Full Stack Developer
                                </motion.span>
                                <motion.span
                                    className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg text-purple-300 font-semibold"
                                    whileHover={{ scale: 1.05, borderColor: "rgb(168, 85, 247)" }}
                                >
                                    MERN Stack
                                </motion.span>
                            </div>

                            <p className="text-xl text-gray-400 leading-relaxed">
                                Crafting <span className="text-cyan-400 font-semibold">scalable</span> and{" "}
                                <span className="text-blue-400 font-semibold">performance-driven</span> web
                                applications with modern technologies and clean architecture.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button to="/projects">
                                    <span className="flex items-center gap-2">
                                        🚀 View Projects
                                    </span>
                                </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button href="/Sivaprakasam_T.pdf" variant="secondary">
                                    <span className="flex items-center gap-2">
                                        📄 Download Resume
                                    </span>
                                </Button>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-800"
                        >
                            {[
                                { number: "10+", label: "Projects Built", icon: "💼" },
                                { number: "2+", label: "Years Experience", icon: "⏱️" },
                                { number: "100%", label: "Client Satisfaction", icon: "⭐" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    className="text-center group cursor-pointer"
                                >
                                    <div className="text-3xl mb-2">{stat.icon}</div>
                                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-400 transition-all">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Content - 3D Card Effect */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="relative hidden lg:block"
                    >
                        <motion.div
                            className="relative"
                            animate={{
                                y: [0, -20, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <div className="relative aspect-square rounded-3xl overflow-hidden">
                                {/* Glassmorphism Card */}
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-white/10 rounded-3xl" />

                                {/* Animated Gradient Overlay */}
                                <motion.div
                                    className="absolute inset-0 opacity-30"
                                    animate={{
                                        background: [
                                            "radial-gradient(circle at 20% 50%, rgba(34, 211, 238, 0.3) 0%, transparent 50%)",
                                            "radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                                            "radial-gradient(circle at 20% 50%, rgba(34, 211, 238, 0.3) 0%, transparent 50%)",
                                        ],
                                    }}
                                    transition={{ duration: 5, repeat: Infinity }}
                                />

                                {/* Code Snippet Decoration */}
                                <div className="relative h-full flex flex-col items-center justify-center p-12 space-y-6">
                                    <motion.div
                                        className="w-full space-y-4 font-mono text-sm"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1 }}
                                    >
                                        {[
                                            { delay: 1.2, code: "const developer = {" },
                                            { delay: 1.4, code: "  name: 'Sivaprakasam',", indent: true },
                                            { delay: 1.6, code: "  role: 'Full Stack Dev',", indent: true },
                                            { delay: 1.8, code: "  skills: ['MERN', 'DSA'],", indent: true },
                                            { delay: 2.0, code: "  passion: '∞'", indent: true },
                                            { delay: 2.2, code: "};" },
                                        ].map((line, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: line.delay }}
                                                className="flex items-center gap-2"
                                            >
                                                <span className="text-cyan-500">●</span>
                                                <span
                                                    className={`${line.indent ? "text-purple-400" : "text-cyan-300"
                                                        }`}
                                                >
                                                    {line.code}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </motion.div>

                                    {/* Floating Icons */}
                                    <div className="absolute inset-0 pointer-events-none">
                                        {[
                                            { icon: "⚛️", top: "20%", left: "10%", delay: 0 },
                                            { icon: "💚", top: "30%", right: "15%", delay: 0.5 },
                                            { icon: "🔥", bottom: "25%", left: "15%", delay: 1 },
                                            { icon: "⚡", bottom: "20%", right: "10%", delay: 1.5 },
                                        ].map((item, index) => (
                                            <motion.div
                                                key={index}
                                                className="absolute text-3xl"
                                                style={{
                                                    top: item.top,
                                                    bottom: item.bottom,
                                                    left: item.left,
                                                    right: item.right,
                                                }}
                                                animate={{
                                                    y: [0, -20, 0],
                                                    rotate: [0, 10, -10, 0],
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    delay: item.delay,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                }}
                                            >
                                                {item.icon}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl -z-10" />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="flex flex-col items-center gap-2 text-gray-500">
                        <span className="text-sm">Scroll Down</span>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </div>
                </motion.div>
            </div>
        </PageTransition>
    );
};

export default Home;
