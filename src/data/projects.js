import anchorPreview from "../assets/images/projects/anchor-preview.png";
import jsLandingBuilderPreview from "../assets/images/projects/strapi-landing-preview.png";
import portfolioPreview from "../assets/images/projects/portfolio-preview.png";

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
    title: "JS Landing Page Builder",
    description:
      "A modular vanilla JavaScript project for building landing pages.",
    stack: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/lukanogaj/strapi-landing-clone",
    demo: "https://lukanogaj.github.io/js-landing-builder/",
    image: jsLandingBuilderPreview,
  },
  {
    id: "portfolio",
    title: "Developer Portfolio",
    description: "Minimal React portfolio showcasing selected projects.",
    stack: ["React", "Vite", "SCSS"],
    github: "https://github.com/lukanogaj/portfolio",
    demo: "https://portfolio-theta-two-8m64j7gyg9.vercel.app/",
    image: portfolioPreview,
  },
];
