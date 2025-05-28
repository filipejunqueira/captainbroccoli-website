// src/components/Navbar.tsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Mail, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { type: "spring", stiffness: 300 },
    },
    tap: { scale: 0.9 },
  };

  const mobileMenuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: "-20%", transition: { duration: 0.2 } },
  };

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.nav
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className={`fixed w-full z-50 top-0 transition-all duration-300 ease-in-out ${
        scrolled || isOpen
          ? "bg-pastel-green-light/90 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* === MODIFIED: Logo/Name Area with Image === */}
          <motion.a
            href="#home"
            className="flex items-center gap-3 text-olive-text hover:text-pastel-green-dark transition-colors group" // Added flex, gap, group
            whileHover={{ scale: 1.02 }} // Adjusted hover for the group
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsOpen(false)}
          >
            {/* Small Circular Image Placeholder */}
            <motion.div
              className="w-10 h-10 bg-pastel-green-dark rounded-full shadow-md flex items-center justify-center border-2 border-pastel-green-light overflow-hidden group-hover:shadow-lg transition-shadow"
              // Optional: add subtle animation if desired
              initial={{ scale: 0, opacity: 0, rotate: -90 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
            >
              {/* Replace this div with your <img /> tag later */}
              <div className="w-full h-full bg-olive-text/20 flex items-center justify-center">
                <span className="text-white/70 text-[8px]">Ava</span>
              </div>
            </motion.div>
            <span className="text-2xl font-bold">
              {" "}
              {/* Ensured text styling is on span */}
              Filipe Junqueira
            </span>
          </motion.a>
          {/* === End of Modified Logo/Name Area === */}

          {/* Desktop Menu (no changes here) */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-olive-text hover:text-pastel-green-dark px-3 py-2 rounded-md text-sm font-medium transition-colors"
                whileHover={{ y: -2, color: "#556B2F" }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="https://github.com/filipejunqueira"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6 text-olive-text hover:text-pastel-green-dark transition-colors" />
            </motion.a>
            <motion.a
              href="mailto:filipelqj@gmail.com"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label="Email"
            >
              <Mail className="h-6 w-6 text-olive-text hover:text-pastel-green-dark transition-colors" />
            </motion.a>
          </div>

          {/* Mobile Menu Button (no changes here) */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-olive-text focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (no changes here, but image could be added to mobile menu too if desired) */}
      <motion.div
        variants={mobileMenuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className={`md:hidden overflow-hidden ${scrolled || isOpen ? "bg-pastel-green-light/95 shadow-lg" : "bg-transparent"}`}
      >
        {/* ... (mobile menu content remains the same for now) ... */}
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)} // Close menu on click
              className="text-olive-text hover:bg-pastel-green hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="flex justify-center space-x-6 pt-4 border-t border-pastel-green mt-2">
            <motion.a
              href="https://github.com/filipejunqueira"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label="GitHub Profile"
            >
              <Github className="h-7 w-7 text-olive-text hover:text-pastel-green-dark transition-colors" />
            </motion.a>
            <motion.a
              href="mailto:filipelqj@gmail.com"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label="Email"
            >
              <Mail className="h-7 w-7 text-olive-text hover:text-pastel-green-dark transition-colors" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
