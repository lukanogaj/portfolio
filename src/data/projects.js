import anchorPreview from "../assets/images/projects/anchor-preview.png";
import strapiLandingPreview from "../assets/images/projects/strapi-landing-preview.png";

export const projects = [
  {
    id: "anchor",
    title: "Anchor — Task Scheduler",
    description:
      "A React task scheduler with realtime updates and structured architecture.",
    stack: ["React", "Supabase", "SCSS"],
    github: "https://github.com/lukanogaj/anchor",
    demo: "https://anchor-phi-sandy.vercel.app",
    image: anchorPreview,
  },
  {
    id: "landing-builder",
    title: "Strapi Landing Page",
    description:
      "A modular vanilla JavaScript project for building landing pages.",
    stack: ["JavaScript", "HTML", "CSS"],
    github: "YOUR_REAL_GITHUB_LINK",
    demo: "YOUR_REAL_LIVE_DEMO_LINK",
    image: strapiLandingPreview,
  },
  {
    id: "portfolio",
    title: "Developer Portfolio",
    description: "Minimal React portfolio showcasing selected projects.",
    stack: ["React", "Vite", "SCSS"],
    github: "https://github.com/lukanogaj/portfolio",
    demo: "#",
  },
];
