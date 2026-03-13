import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ project }) => {
  const { title, description, stack, github, demo } = project;

  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>

      <p className={styles.description}>{description}</p>

      <div className={styles.stack}>
        {stack.map((tech) => (
          <span key={tech} className={styles.tech}>
            {tech}
          </span>
        ))}
      </div>

      <div className={styles.links}>
        <a href={github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>

        <a href={demo} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
