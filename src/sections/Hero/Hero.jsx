import styles from "./Hero.module.scss";
import Container from "../../components/Container/Container";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Lukasz Nogaj</h1>

          <p className={styles.heroRole}>
            Frontend Developer (React, TypeScript)
          </p>

          <p className={styles.heroDescription}>
            Frontend developer building practical applications with React and
            TypeScript, with additional full-stack experience using Node.js,
            Express and PostgreSQL. I combine software development with
            extensive experience in UK public transport operations, giving me a
            strong understanding of real-world workflows, business logic and
            operational systems.
          </p>

          <p className={styles.heroTech}>
            React • TypeScript • JavaScript • Node.js • PostgreSQL • Docker
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
