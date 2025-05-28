// src/components/Footer.tsx
import React from "react";
import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-pastel-green-light/60 py-10 sm:py-12 text-center border-t border-pastel-green">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <motion.a
            href="https://github.com/filipejunqueira"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-olive-text hover:text-pastel-green-dark transition-colors"
            whileHover={{ scale: 1.2, y: -3, color: "#556B2F" }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={28} />
          </motion.a>
          <motion.a
            href="mailto:filipelqj@gmail.com"
            aria-label="Email"
            className="text-olive-text hover:text-pastel-green-dark transition-colors"
            whileHover={{ scale: 1.2, y: -3, color: "#556B2F" }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail size={28} />
          </motion.a>
        </div>
        {/* Copyright Text */}
        <p className="text-olive-text/80 text-sm mb-1">
          &copy; {currentYear} Filipe Junqueira. All rights reserved.
        </p>
        <p className="text-olive-text/70 text-xs">
          Dota 2 is a registered trademark of Valve Corporation. This website is
          not affiliated with Valve Corporation.
        </p>
        {/* Fun little animated signature or something */}
        <motion.div
          className="text-xs text-pastel-green-dark mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Made with <span className="text-red-500 animate-pulse">❤</span> and{" "}
          <span className="font-mono">code</span>.
        </motion.div>
      </div>
    </footer>
  );
};
export default Footer;
