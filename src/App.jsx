import Hero from "./sections/Hero/Hero";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import { projects } from "./data/projects";
const App = () => {
	return (
		<>
			<Hero />
			<ProjectCard project={projects[0]} />
		</>
	);
};

export default App;
