import styles from "./About.module.scss";
import Container from "../../components/Container/Container";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <Container>
        <div className={styles.aboutContent}>
          <h2 className={styles.aboutTitle}>About</h2>

          <p className={styles.aboutText}>
            I am a frontend developer focused on building structured React
            applications and clean UI.
          </p>

          <p className={styles.aboutText}>
            Currently working on production-ready projects and preparing for my
            first frontend role.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default About;
