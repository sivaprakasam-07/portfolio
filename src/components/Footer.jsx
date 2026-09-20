import React from 'react';
import { Terminal, Github, Linkedin, Mail, FileText, ArrowUp } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Toolkit', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const GITHUB_URL = "https://github.com/sivaprakasam-07";
const LINKEDIN_URL = "https://www.linkedin.com/in/sivaprakasam-coder/";
const RESUME_URL = "/Sivaprakasam_T.pdf";
const EMAIL_ADDRESS = "tamilmanisivaprakasam5@gmail.com";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer 
      role="contentinfo" 
      aria-label="Site Footer"
      className="bg-canvas border-t border-border-subtle py-12 sm:py-16 text-content-secondary relative z-10"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-border-subtle/80">
          
          {/* Brand Identity & Summary */}
          <div className="space-y-3 max-w-md">
            <div className="flex items-center gap-2.5">
              <span className="p-1.5 rounded-lg bg-surface-card border border-border-subtle text-accent-mint flex items-center justify-center">
                <Terminal size={16} />
              </span>
              <span className="font-mono font-bold text-base tracking-tight text-white">
                SIVA<span className="text-accent-mint">.dev</span>
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-card border border-border-subtle text-content-muted">
                v2.0
              </span>
            </div>
            <p className="text-xs text-content-secondary leading-relaxed">
              Fullstack developer engineering scalable web applications, modular React architectures, and interactive digital experiences.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav aria-label="Footer Navigation">
            <ul className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-content-secondary hover:text-white hover:text-accent-mint transition-colors py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Scroll to Top Action */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            className="p-3 rounded-xl bg-surface-card border border-border-subtle hover:border-accent-mint/40 hover:bg-surface-elevated text-content-secondary hover:text-white transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint self-start md:self-auto"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        {/* Bottom Credits & Verified Coordinates */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-content-muted">
          <div>
            © {new Date().getFullYear()} Sivaprakasam T. Built with React, Vite & Tailwind CSS.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-content-muted hover:text-white transition-colors"
            >
              <Github size={16} />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-content-muted hover:text-white transition-colors"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              aria-label="Direct Email"
              className="text-content-muted hover:text-white transition-colors"
            >
              <Mail size={16} />
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Verified Resume"
              className="text-content-muted hover:text-accent-mint transition-colors flex items-center gap-1"
            >
              <FileText size={15} />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
