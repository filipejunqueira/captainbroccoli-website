// src/components/common/AnimatedSection.tsx
import React, { ReactNode, useEffect } from "react";
// REMOVE 'Variants' from this import line:
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  // CHANGE 'Variants' to 'any' or 'object' for now for the variants prop:
  variants?: any;
  delay?: number;
  threshold?: number;
}

// REMOVE the ': Variants' type annotation from defaultVariants:
const defaultVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
  id,
  variants = defaultVariants, // This will now use the modified defaultVariants
  delay = 0,
  threshold = 0.1,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: threshold,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants} // framer-motion will still understand the structure
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
