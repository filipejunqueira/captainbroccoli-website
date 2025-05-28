// src/components/Contact.tsx
import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./common/AnimatedSection";
import { Github, Mail, Linkedin } from "lucide-react"; // Added Linkedin as an example, can remove if not needed

// Define structure for contact methods
interface ContactMethod {
  name: string;
  value: string;
  href: string;
  icon: React.ElementType;
  cta: string;
  ariaLabel: string;
}

const contactMethods: ContactMethod[] = [
  {
    name: "GitHub",
    value: "filipejunqueira",
    href: "https://github.com/filipejunqueira",
    icon: Github,
    cta: "View My Projects",
    ariaLabel: "View Filipe Junqueira on GitHub",
  },
  {
    name: "Email",
    value: "filipelqj@gmail.com",
    href: "mailto:filipelqj@gmail.com",
    icon: Mail,
    cta: "Send Me a Message",
    ariaLabel: "Email Filipe Junqueira",
  },
  // Example for LinkedIn - uncomment and update if you want to add it
  // {
  //   name: 'LinkedIn',
  //   value: 'filipe-junqueira', // Replace with your LinkedIn profile name/URL part
  //   href: 'https://linkedin.com/in/your-profile-here', // Replace with your actual LinkedIn profile URL
  //   icon: Linkedin,
  //   cta: 'Connect on LinkedIn',
  //   ariaLabel: 'Connect with Filipe Junqueira on LinkedIn'
  // }
];

const contactCardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.2, type: "spring", stiffness: 120, damping: 12 },
  }),
  hover: { scale: 1.05, boxShadow: "0px 10px 25px rgba(0,0,0,0.12)" },
};

const Contact: React.FC = () => {
  return (
    <AnimatedSection
      id="contact"
      className="py-20 md:py-32 bg-honeydew-bg overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-olive-text mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        {/* Section Subtitle */}
        <motion.p
          className="text-xl text-olive-text/80 mb-16 max-w-xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Interested in my tools, have a question, or just want to talk Dota?
          Feel free to reach out!
        </motion.p>
        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 max-w-3xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.name}
              className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center"
              variants={contactCardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
            >
              <method.icon className="h-14 w-14 sm:h-16 sm:w-16 text-pastel-green-dark mb-6" />
              <h3 className="text-2xl font-semibold text-olive-text mb-2">
                {method.name}
              </h3>
              <p className="text-olive-text/80 mb-6 break-all">
                {method.value}
              </p>
              <motion.a
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={method.ariaLabel}
                className="bg-pastel-green text-olive-text font-semibold py-3 px-6 rounded-lg hover:bg-pastel-green-dark hover:text-white transition-colors transform"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                {method.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
