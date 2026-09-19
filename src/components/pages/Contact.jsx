import { motion } from "framer-motion";
import { useState } from "react";
import PageTransition from "../animations/PageTransition";

const Contact = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const contactMethods = [
        {
            icon: "📧",
            title: "Email",
            value: "yourmail@gmail.com",
            link: "mailto:yourmail@gmail.com",
            color: "from-cyan-500 to-blue-500",
            description: "Send me an email"
        },
        {
            icon: "💼",
            title: "LinkedIn",
            value: "Connect with me",
            link: "https://linkedin.com",
            color: "from-blue-500 to-purple-500",
            description: "Professional network"
        },
        {
            icon: "🐙",
            title: "GitHub",
            value: "@sivaprakasam-07",
            link: "https://github.com/sivaprakasam-07",
            color: "from-purple-500 to-pink-500",
            description: "Check out my code"
        }
    ];

    const socialLinks = [
        {
            name: "Twitter",
            icon: "🐦",
            link: "#",
            color: "hover:text-cyan-400"
        },
        {
            name: "Discord",
            icon: "💬",
            link: "#",
            color: "hover:text-purple-400"
        },
        {
            name: "Dev.to",
            icon: "📝",
            link: "#",
            color: "hover:text-gray-200"
        }
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
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 10, -10, 0]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <span className="text-6xl">📬</span>
                        </motion.div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                                Let's Connect
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Let's build something <span className="text-cyan-400 font-semibold">great</span> together.
                            <br />
                            I'm always open to discussing new projects and creative ideas.
                        </p>
                    </motion.div>

                    {/* Contact Methods */}
                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={index}
                                href={method.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                                whileHover={{ y: -10 }}
                                className="group relative block"
                            >
                                {/* Glow Effect */}
                                <motion.div
                                    className={`absolute -inset-1 bg-gradient-to-r ${method.color} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl`}
                                    animate={{
                                        opacity: hoveredCard === index ? [0.5, 0.8, 0.5] : 0
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />

                                {/* Card */}
                                <div className="relative h-full bg-[#111827] border border-white/10 rounded-3xl p-8 group-hover:border-cyan-500/50 transition-all">
                                    {/* Icon */}
                                    <motion.div
                                        className="mb-6"
                                        animate={{
                                            rotate: hoveredCard === index ? [0, 10, -10, 0] : 0
                                        }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div className={`w-16 h-16 bg-gradient-to-br ${method.color} bg-opacity-20 rounded-2xl flex items-center justify-center text-4xl border border-white/10`}>
                                            {method.icon}
                                        </div>
                                    </motion.div>

                                    {/* Content */}
                                    <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${method.color} bg-clip-text text-transparent`}>
                                        {method.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4">
                                        {method.description}
                                    </p>
                                    <p className="text-white font-medium break-all">
                                        {method.value}
                                    </p>

                                    {/* Arrow */}
                                    <motion.div
                                        className="mt-6 flex items-center gap-2 text-cyan-400 font-semibold text-sm"
                                        animate={{
                                            x: hoveredCard === index ? [0, 5, 0] : 0
                                        }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                    >
                                        <span>Get in touch</span>
                                        <span>→</span>
                                    </motion.div>

                                    {/* Decorative Element */}
                                    <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Additional Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl" />
                        <div className="relative bg-[#111827]/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold mb-3">
                                    <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                                        Find Me Online
                                    </span>
                                </h2>
                                <p className="text-gray-400">Connect with me on various platforms</p>
                            </div>

                            <div className="flex flex-wrap justify-center gap-6">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.8 + index * 0.1 }}
                                        whileHover={{ scale: 1.2, y: -5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`group/social w-16 h-16 bg-[#0f172a] border border-white/10 rounded-2xl flex items-center justify-center text-3xl ${social.color} transition-all hover:border-cyan-500/50`}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA Section */}
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
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-20 blur-2xl" />
                                <div className="relative bg-[#111827]/50 backdrop-blur-xl border border-white/10 rounded-3xl px-8 py-6">
                                    <p className="text-gray-300 flex flex-col md:flex-row items-center gap-3">
                                        <motion.span
                                            animate={{ rotate: [0, 20, -20, 0] }}
                                            transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
                                            className="text-3xl"
                                        >
                                            💡
                                        </motion.span>
                                        <span>
                                            Have a project in mind?{" "}
                                            <span className="font-semibold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                                                Let's make it happen!
                                            </span>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Floating Elements */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-cyan-500/30 rounded-full"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    y: [0, -30, 0],
                                    opacity: [0.3, 1, 0.3],
                                }}
                                transition={{
                                    duration: 3 + i,
                                    repeat: Infinity,
                                    delay: i * 0.5,
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Contact;
