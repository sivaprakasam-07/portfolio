import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronUp, Terminal, FileText, ArrowUpRight } from "lucide-react";

const Navbar = ({ sectionsRef }) => {
  const [isScrolled, setScrolled] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  // Scroll detection for elevated floating state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver to accurately track the active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25, rootMargin: "-80px 0px -40% 0px" }
    );

    const validSections = sectionsRef?.current
      ? Array.from(new Set(sectionsRef.current.filter(Boolean)))
      : [];

    validSections.forEach((section) => observer.observe(section));

    return () => {
      validSections.forEach((section) => observer.unobserve(section));
    };
  }, [sectionsRef]);

  // Smooth scroll with offset compensation to prevent navbar overlap
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - (id === "home" ? 0 : navOffset);
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
      setOpen(false);
    }
  };

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6">
        <div
          className={`max-w-6xl mx-auto transition-all duration-300 rounded-2xl px-4 sm:px-6 py-2.5 flex items-center justify-between ${
            isScrolled
              ? "bg-surface-card/90 backdrop-blur-md border border-border-subtle shadow-card-elevated"
              : "bg-surface-card/40 backdrop-blur-sm border border-border-subtle/50"
          }`}
        >
          {/* Brand Identity: SIVA.dev */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("home");
            }}
            className="group flex items-center gap-2.5 text-decoration-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint rounded-lg"
            aria-label="SIVA.dev homepage"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-surface-elevated border border-border-subtle group-hover:border-accent-mint/50 transition-colors duration-300 shadow-sm">
              <Terminal size={15} className="text-accent-mint group-hover:scale-110 transition-transform duration-300" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-accent-mint ring-2 ring-surface-card animate-pulse" />
            </div>
            <div className="flex items-baseline">
              <span className="font-sans font-bold text-lg text-content-primary tracking-tight group-hover:text-accent-mint transition-colors duration-300">
                SIVA
              </span>
              <span className="text-accent-mint font-mono font-semibold text-xs ml-1 px-1.5 py-0.5 rounded bg-accent-muted border border-accent-mint/20 leading-none">
                .dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-1 bg-surface-card/60 px-3 py-1.5 rounded-full border border-border-subtle/80 backdrop-blur-sm"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint ${
                    isActive
                      ? "text-accent-mint font-semibold"
                      : "text-content-secondary hover:text-content-primary"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-accent-muted border border-accent-mint/30 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Status & Resume CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Availability Status Badge */}
            <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-surface-elevated/70 border border-border-subtle text-[11px] font-mono text-content-muted">
              <span className="relative flex h-2 w-2">
                <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-mint opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-mint" />
              </span>
              <span className="text-content-secondary">Available</span>
            </div>

            {/* Resume Action */}
            <a
              href="/Sivaprakasam_T.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-surface-elevated hover:bg-accent-muted border border-border-subtle hover:border-accent-mint/40 text-xs font-mono text-content-primary hover:text-accent-mint transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint"
              aria-label="View Resume PDF in a new tab"
              title="Open Sivaprakasam T's Resume"
            >
              <FileText size={13} className="text-accent-mint" />
              <span>Resume</span>
              <ArrowUpRight size={12} className="opacity-60" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-drawer"
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg bg-surface-elevated border border-border-subtle text-content-secondary hover:text-content-primary hover:border-accent-mint/30 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setOpen(false)}
                className="fixed inset-0 bg-canvas/80 backdrop-blur-sm z-40 md:hidden"
                aria-hidden="true"
              />

              {/* Drawer Sheet */}
              <motion.div
                id="mobile-nav-drawer"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 220 }}
                className="fixed top-0 right-0 w-72 max-w-[80vw] h-full bg-surface-card/95 border-l border-border-subtle backdrop-blur-xl shadow-2xl z-50 p-6 flex flex-col justify-between md:hidden"
                role="dialog"
                aria-modal="true"
                aria-label="Mobile Navigation"
              >
                <div>
                  {/* Drawer Header */}
                  <div className="flex items-center justify-between pb-5 border-b border-border-subtle">
                    <div className="flex items-center gap-2 font-mono">
                      <div className="flex items-center justify-center w-7 h-7 rounded-md bg-surface-elevated border border-border-subtle">
                        <Terminal size={14} className="text-accent-mint" />
                      </div>
                      <span className="font-bold text-white font-sans text-base">SIVA</span>
                      <span className="text-accent-mint font-mono text-xs px-1 rounded bg-accent-muted border border-accent-mint/20">
                        .dev
                      </span>
                    </div>
                    <button
                      onClick={() => setOpen(false)}
                      className="p-1.5 rounded-lg bg-surface-elevated text-content-secondary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint"
                      aria-label="Close menu"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  {/* Status in mobile drawer */}
                  <div className="mt-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-elevated/60 border border-border-subtle text-[11px] font-mono text-content-secondary">
                    <span className="relative flex h-2 w-2">
                      <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-mint opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-mint" />
                    </span>
                    <span>Available for Opportunities</span>
                  </div>

                  {/* Nav Links */}
                  <nav className="flex flex-col gap-1.5 mt-6" aria-label="Mobile menu links">
                    {navItems.map((item) => {
                      const isActive = activeSection === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleScrollTo(item.id)}
                          className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                            isActive
                              ? "bg-accent-muted text-accent-mint border border-accent-mint/30 font-semibold"
                              : "text-content-secondary hover:text-white hover:bg-surface-elevated"
                          }`}
                        >
                          <span>{item.label}</span>
                          {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent-mint" />}
                        </button>
                      );
                    })}
                  </nav>
                </div>

                {/* Drawer Footer with Resume Button */}
                <div className="pt-6 border-t border-border-subtle space-y-3">
                  <a
                    href="/Sivaprakasam_T.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-accent-mint text-canvas-dark font-mono font-semibold text-xs hover:bg-accent-emerald transition-all shadow-glow-subtle"
                  >
                    <FileText size={14} />
                    <span>Download Resume</span>
                    <ArrowUpRight size={13} />
                  </a>
                  <p className="text-[10px] font-mono text-center text-content-muted">
                    SIVA.dev • Fullstack Developer
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Refined Scroll-To-Top Button (visible only when scrolled) */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={() => handleScrollTo("home")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top of page"
            className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-surface-card/90 border border-border-subtle text-content-secondary hover:text-accent-mint hover:border-accent-mint/50 backdrop-blur-md shadow-card-elevated transition-colors duration-200"
          >
            <ChevronUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;