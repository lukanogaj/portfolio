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
              I am a frontend developer focused on React and TypeScript,
              building reusable components, responsive interfaces and
              applications connected to REST APIs.
            </p>

            <p className={styles.aboutParagraph}>
              I also work across the stack with Node.js, Express and PostgreSQL.
              My background in UK public transport operations gives me
              first-hand experience with complex operational workflows and
              business problems, which I apply to software development.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
