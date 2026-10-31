import styles from "./Hero.module.scss";
import Container from "../../components/Container/Container";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Lukasz Nogaj</h1>

          <p className={styles.heroRole}>
            Full-Stack Developer (React, TypeScript, Node.js, PostgreSQL)
          </p>

          <p className={styles.heroDescription}>
            Full-stack developer with commercial React and TypeScript
            experience, building modern web applications across the frontend and
            backend with Node.js, Express and PostgreSQL. I combine software
            development with over 12 years of experience in UK public transport
            operations, giving me a strong understanding of real-world
            workflows, business logic and operational systems.
          </p>

          <p className={styles.heroTech}>
            React • TypeScript • Node.js • Express • PostgreSQL • Docker
          </p>

          <div className={styles.heroActions}>
            <a href="#projects" className={styles.primaryButton}>
              View Projects
            </a>

            <a
              href="https://github.com/lukanogaj"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryButton}
            >
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
