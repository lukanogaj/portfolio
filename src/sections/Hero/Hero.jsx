import styles from "./Hero.module.scss";
import Container from "../../components/Container/Container";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Lukasz Nogaj</h1>

          <p className={styles.heroRole}>Frontend Developer</p>

          <p className={styles.heroDescription}>
            I build clean React applications with a focus on simple architecture
            and practical UI.
          </p>

          <p className={styles.heroTech}>
            React • JavaScript • Supabase • SCSS
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
