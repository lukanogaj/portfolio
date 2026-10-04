import busOperationsPreview from "../assets/images/projects/bus-operations-preview.png";
import dayflowPreview from "../assets/images/projects/dayflow-preview.png";
import madreDiDioPreview from "../assets/images/projects/madre-di-dio-preview.png";

export const projects = [
  {
    id: "bus-operations-simulator",
    title: "Bus Operations Simulator",
    description:
      "Full-stack operations platform based on real-world bus garage workflows, including driver scheduling, rota allocation, sign-on, absences, incidents and operational issue management.",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Docker",
    ],
    github: "https://github.com/lukanogaj/bus-operations-simulator",
    demo: "https://bus-operations-simulator.onrender.com",
    image: busOperationsPreview,
  },
  {
    id: "dayflow",
    title: "Dayflow",
    description:
      "React and TypeScript application focused on predictable data flow, derived state, reusable helpers and automated testing.",
    stack: ["React", "TypeScript", "Vitest"],
    github: "https://github.com/lukanogaj/dayflow",
    demo: "https://dayflow-seven-psi.vercel.app",
    image: dayflowPreview,
  },
  {
    id: "madre-di-dio",
    title: "Madre di Dio",
    description:
      "Responsive React and TypeScript website for a wedding music ensemble, featuring reusable components, custom visual design and light and dark themes.",
    stack: ["React", "TypeScript", "Vite", "CSS"],
    github: "https://github.com/lukanogaj/madre-di-dio",
    demo: "https://madre-di-dio.vercel.app",
    image: madreDiDioPreview,
  },
];
