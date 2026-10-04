import styles from "./Hero.module.scss";
import Container from "../../components/Container/Container";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Lukasz Nogaj</h1>

          <p className={styles.heroRole}>Full-Stack JavaScript Developer</p>

          <p className={styles.heroDescription}>
            Full-stack developer focused on building practical applications with
            React, TypeScript, Node.js and PostgreSQL. I bring extensive
            experience in UK public transport operations into software
            development, building systems around real-world operational problems
            and business logic.
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
