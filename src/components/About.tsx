// src/components/About.tsx
import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./common/AnimatedSection";

const About: React.FC = () => {
  return (
    <AnimatedSection
      id="about"
      className="py-20 md:py-32 bg-honeydew-bg/80 backdrop-blur-sm overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-olive-text text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }} // Animate when in view
          viewport={{ once: true, amount: 0.3 }} // Trigger once, when 30% is visible
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Image Placeholder */}
          <motion.div
            className="w-full md:w-1/3 flex justify-center"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.2,
            }}
          >
            <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-pastel-green rounded-full shadow-xl flex items-center justify-center border-4 border-pastel-green-light hover:shadow-2xl transition-shadow duration-300">
              <span className="text-olive-text/70 text-lg">
                Image Placeholder
              </span>
            </div>
          </motion.div>
          {/* Text Content */}
          <motion.div
            className="w-full md:w-2/3 text-lg text-olive-text/90 space-y-6 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p>
              Hi, I'm Filipe Junqueira, a passionate developer and a long-time
              Dota 2 enthusiast. I combine my love for coding and gaming to
              create tools that enhance the Dota 2 experience.
            </p>
            <p>
              My journey into software development has been driven by a desire
              to solve problems and build practical applications. The CLI tools
              showcased here are a testament to that, designed to provide
              players with deeper insights into their gameplay using TypeScript,
              React, and other modern technologies.
            </p>
            <p>
              When I'm not analyzing match data or pushing lanes, you can find
              me exploring new tech, contributing to open-source, or enjoying a
              good game!
            </p>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
