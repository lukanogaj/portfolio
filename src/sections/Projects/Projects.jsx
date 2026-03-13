import styles from "./Projects.module.scss";
import Container from "../../components/Container/Container";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <Container>
        <div className={styles.projectsContent}>
          <h2 className={styles.projectsTitle}>Projects</h2>

          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
