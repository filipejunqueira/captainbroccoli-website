// src/components/Projects.tsx
import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./common/AnimatedSection";
import { Terminal, BarChart3, Zap, Github } from "lucide-react"; // Example icons

// Define the structure for a project
interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  detailsPlaceholder: string; // For screenshot/code snippet
  codeExample?: string; // Optional: a small code example
  tags: string[];
}

// Project data - replace with your actual CLI tool details
const projectsData: Project[] = [
  {
    id: 1,
    title: "Dota2 Match Analyzer CLI",
    description:
      "A powerful CLI tool to fetch and analyze detailed statistics from your recent Dota 2 matches, offering insights into KDA, GPM, XPM, and more.",
    icon: BarChart3,
    detailsPlaceholder: "Screenshot of CLI output showing match summary.",
    codeExample: `> d2-analyzer --match_id 78XXXXXX\nFetching data...\nPlayer 'YourNick':\n  KDA: 10/2/15 | GPM: 650 | XPM: 720\n  Net Worth: 25k | Last Hits: 300`,
    tags: ["TypeScript", "Node.js", "CLI", "API"],
  },
  {
    id: 2,
    title: "Hero Performance Tracker",
    description:
      "Track your performance with specific heroes over time. Identify win rates, common builds, and areas for improvement.",
    icon: Zap,
    detailsPlaceholder:
      "Example: `d2-hero-tracker --hero Invoker --last 20` output.",
    codeExample: `> d2-hero-tracker --hero Pudge --last 10\nHero: Pudge (10 Matches)\nWinrate: 60% (6W-4L)\nAvg KDA: 3.5/5.1/12.3`,
    tags: ["Python", "CLI", "Statistics"],
  },
  {
    id: 3,
    title: "Live Game Stats Fetcher",
    description:
      "A utility to quickly grab key stats from a live Dota 2 game using its Match ID (requires API access setup).",
    icon: Terminal,
    detailsPlaceholder:
      "Code snippet demonstrating tool interface or core logic.",
    codeExample: `> d2-live-stats --player "FilipeJ"\nScanning live games...\nFound: FilipeJ as Spectre (Lvl 15)\nNetworth: 12.3k | Kills: 7`,
    tags: ["Go", "CLI", "Real-time", "API"],
  },
];

// Animation variants for project cards
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i: number) => ({
    // Custom function to allow staggered delay
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15, // Stagger by 0.15s for each card
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  }),
  hover: { y: -8, scale: 1.03, boxShadow: "0px 15px 30px rgba(0,0,0,0.1)" },
};

const Projects: React.FC = () => {
  return (
    <AnimatedSection
      id="projects"
      className="py-20 md:py-32 bg-pastel-green-light/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-olive-text text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          My Dota 2 CLI Tools
        </motion.h2>
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col cursor-default"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible" // Animate when card itself is in view
              whileHover="hover"
              viewport={{ once: true, amount: 0.1 }} // Trigger card animation when 10% is visible
              custom={index} // Pass index for staggered delay
            >
              {/* Icon and Title */}
              <div className="flex items-center text-pastel-green-dark mb-5">
                <project.icon className="h-10 w-10 mr-4 stroke-1" />
                <h3 className="text-2xl font-semibold text-olive-text">
                  {project.title}
                </h3>
              </div>
              {/* Description */}
              <p className="text-olive-text/80 mb-5 text-sm flex-grow">
                {project.description}
              </p>

              {/* Tags */}
              <div className="mb-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-pastel-green-light text-olive-text px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Placeholder for screenshot/code */}
              <div className="bg-gray-800 text-gray-300 p-4 rounded-md font-mono text-xs sm:text-sm mb-6 overflow-x-auto">
                <p className="italic opacity-60 text-gray-400 mb-1">
                  // Placeholder: {project.detailsPlaceholder}
                </p>
                <pre className="whitespace-pre-wrap text-green-400">
                  {project.codeExample ||
                    `Placeholder for ${project.title} output or code snippet.`}
                </pre>
              </div>
              {/* GitHub Link */}
              <motion.a
                href="https://github.com/filipejunqueira" // Link to specific project repo if available, else main profile
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 bg-pastel-green text-olive-text font-semibold py-2 px-4 rounded-md hover:bg-pastel-green-dark hover:text-white transition-colors"
                whileHover={{
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={18} /> View on GitHub
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Projects;
