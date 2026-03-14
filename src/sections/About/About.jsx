import styles from "./About.module.scss";
import Container from "../../components/Container/Container";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <Container>
        <div className={styles.aboutContent}>
          <h2 className={styles.aboutTitle}>About</h2>

          <div className={styles.aboutText}>
            <p className={styles.aboutParagraph}>
              I am a frontend developer focused on building structured React
              applications with clean architecture and practical UI.
            </p>

            <p className={styles.aboutParagraph}>
              Currently working on production-ready projects and preparing for
              my first frontend role.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
