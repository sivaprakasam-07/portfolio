import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon, ChevronUp } from "lucide-react";

const Navbar = ({ sectionsRef }) => {
    const [isScrolled, setScrolled] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const [isDarkMode, setDarkMode] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) setScrolled(true);
            else setScrolled(false);
        };
        window.addEventListener("scroll", handleScroll);

        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sectionsRef.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sectionsRef.current.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, [sectionsRef]);

    const toggleTheme = () => {
        setDarkMode(!isDarkMode);
        const theme = !isDarkMode ? "dark" : "light";
        localStorage.setItem("theme", theme);

        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    const navItems = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

    const handleScrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setActiveSection(id);
        }
    };

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
                    ? "bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 shadow-md"
                    : "bg-transparent"
                    }`}
            >
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <motion.a
                        href="#"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        whileHover={{
                            textShadow: "0px 0px 8px rgba(255, 215, 0, 0.8)",
                        }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500"
                    >
                        My Portfolio
                    </motion.a>

                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item, index) => (
                            <motion.button
                                key={index}
                                onClick={() => handleScrollTo(item.toLowerCase())}
                                whileHover={{
                                    scale: 1.1,
                                    color: "#14b8a6",
                                }}
                                className={`text-lg font-medium ${activeSection === item.toLowerCase()
                                    ? "text-teal-400 underline decoration-wavy"
                                    : "text-gray-200"
                                    } transition-all duration-300`}
                            >
                                {item}
                            </motion.button>
                        ))}
                    </nav>

                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-full transition-all duration-300 ${isDarkMode
                            ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                            }`}
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <button
                        onClick={() => setOpen(!isOpen)}
                        className="md:hidden p-2 rounded bg-gray-700 text-gray-200 hover:scale-110 transition-all duration-300"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {isOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: isOpen ? 0 : "100%" }}
                        transition={{ type: "spring", stiffness: 80 }}
                        className="fixed top-0 right-0 w-2/3 h-full bg-gray-900 shadow-lg z-40 p-8 md:hidden"
                    >
                        <nav className="flex flex-col items-start space-y-6 text-white">
                            {navItems.map((item, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => {
                                        handleScrollTo(item.toLowerCase());
                                        setOpen(false);
                                    }}
                                    whileHover={{
                                        scale: 1.1,
                                        textShadow: "0px 0px 8px rgba(20, 184, 166, 0.8)",
                                    }}
                                    className="text-lg font-semibold"
                                >
                                    {item}
                                </motion.button>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </motion.header>

            <motion.button
                onClick={() => handleScrollTo("home")}
                whileHover={{
                    scale: 1.2,
                    boxShadow: "0px 0px 15px rgba(20, 184, 166, 0.8)",
                }}
                className="fixed bottom-6 right-6 bg-teal-500 text-white p-4 rounded-full shadow-lg hover:bg-teal-600 transition-all duration-300"
            >
                <ChevronUp size={24} />
            </motion.button>
        </>
    );
};

export default Navbar;