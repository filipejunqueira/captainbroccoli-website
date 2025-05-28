// src/components/Hero.tsx
import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./common/AnimatedSection"; // Make sure this path is correct
import { ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <AnimatedSection
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-honeydew-bg via-pastel-green-light to-pastel-green relative overflow-hidden pt-28 sm:pt-20 px-4" // Added more top padding
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
      }}
    >
      {/* Subtle background animated shapes - decorative */}
      <motion.div
        className="absolute top-10 -left-10 w-32 h-32 md:w-48 md:h-48 bg-pastel-green opacity-30 rounded-full filter blur-xl"
        animate={{
          scale: [1, 1.1, 1],
          x: [-20, 0, -20],
          y: [-10, 10, -10],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 -right-10 w-40 h-40 md:w-64 md:h-64 bg-pastel-green-dark opacity-20 rounded-full filter blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [20, 0, 20],
          y: [10, -10, 10],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      {/* Main content container */}
      <motion.div
        className="z-10 flex flex-col items-center" // Added flex column and items-center
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        {/* === NEW: Circular Image Placeholder === */}
        <motion.div
          className="w-32 h-32 sm:w-40 sm:h-40 mb-8 bg-pastel-green-dark rounded-full shadow-xl flex items-center justify-center border-4 border-pastel-green-light overflow-hidden"
          initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 20,
            delay: 0.4,
          }}
        >
          {/* Replace this div with your <img /> tag later */}
          <div className="w-full h-full bg-olive-text/20 flex items-center justify-center">
            <span className="text-xs text-white/70 p-2">Avatar</span>
          </div>
        </motion.div>
        {/* === End of New Image Placeholder === */}

        {/* Animated heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-olive-text mb-6 drop-shadow-sm"
          initial={{ opacity: 0, letterSpacing: "-0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0em" }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          Unlock Dota 2 Insights
        </motion.h1>
        {/* Animated paragraph */}
        <motion.p
          className="text-xl md:text-2xl text-olive-text/80 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
        >
          Powerful CLI tools to analyze game statistics, track performance, and
          gain a competitive edge. Built by Filipe Junqueira.
        </motion.p>
        {/* Animated call to action button */}
        <motion.a
          href="#projects"
          className="bg-pastel-green-dark hover:bg-olive-text text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.9,
          }}
          whileHover={{ boxShadow: "0px 10px 20px rgba(0,0,0,0.15)", y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore My Tools
        </motion.a>
      </motion.div>

      {/* Animated scroll down indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.a
          href="#about"
          aria-label="Scroll to about section"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-10 w-10 text-olive-text/70 hover:text-olive-text transition-colors" />
        </motion.a>
      </motion.div>
    </AnimatedSection>
  );
};

export default Hero;
