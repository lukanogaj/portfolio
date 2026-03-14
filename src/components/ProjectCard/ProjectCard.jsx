import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ project }) => {
  const { title, description, stack, github, demo, image } = project;

  return (
    <article className={styles.projectCard}>
      {image && (
        <div className={styles.projectImageWrapper}>
          <img src={image} alt={title} className={styles.projectImage} />
        </div>
      )}

      <div className={styles.projectCardContent}>
        <h3 className={styles.projectTitle}>{title}</h3>

        <p className={styles.projectDescription}>{description}</p>

        <div className={styles.projectStack}>
          {stack.map((tech) => (
            <span key={tech} className={styles.projectTechTag}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.projectLinks}>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            GitHub
          </a>

          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
