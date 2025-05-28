// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace '<repository-name>' with your GitHub repository name
const repositoryName = "dota2-portfolio"; // Or whatever your repo is called

export default defineConfig({
  plugins: [react()],
  // This is crucial for GitHub Pages deployment
  base: process.env.NODE_ENV === "production" ? `/${repositoryName}/` : "/",
});
