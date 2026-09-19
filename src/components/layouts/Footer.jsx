import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" }
    ];

    const socialLinks = [
        { name: "GitHub", icon: "🐙", url: "https://github.com/sivaprakasam-07" },
        { name: "LinkedIn", icon: "💼", url: "https://linkedin.com" },
        { name: "Twitter", icon: "🐦", url: "#" }
    ];

    return (
        <footer className="relative bg-[#0a0f1a] border-t border-white/5 mt-20">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-transparent pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link to="/" className="inline-block mb-4">
                            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                                Sivaprakasam
                            </span>
                            <span className="text-cyan-400 ml-1">.</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Building digital experiences with modern technologies and creative solutions.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {footerLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-cyan-400 transition-colors text-sm inline-block"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Connect */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-white font-semibold mb-4">Connect</h3>
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-10 h-10 bg-[#111827] border border-white/10 rounded-lg flex items-center justify-center text-xl hover:border-cyan-500/50 transition-all"
                                    title={social.name}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

                {/* Bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm"
                >
                    <p>
                        © {currentYear} <span className="text-cyan-400 font-semibold">Sivaprakasam T</span>. All rights reserved.
                    </p>
                    <p className="flex items-center gap-2">
                        Made with <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }}>❤️</motion.span> and <span className="text-cyan-400">React</span>
                    </p>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10" />
        </footer>
    );
};

export default Footer;
