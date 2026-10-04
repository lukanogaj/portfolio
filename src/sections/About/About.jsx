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
              I am a full-stack JavaScript developer focused on building
              practical applications with React, TypeScript, Node.js and
              PostgreSQL.
            </p>

            <p className={styles.aboutParagraph}>
              My background in UK public transport operations gives me
              first-hand experience with real operational workflows and business
              problems, which I now apply to software development.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
