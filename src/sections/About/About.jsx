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
              I am a full-stack developer with commercial React and TypeScript
              experience, building reusable components, responsive interfaces
              and applications connected to REST APIs.
            </p>

            <p className={styles.aboutParagraph}>
              I work across the stack with React, TypeScript, Node.js, Express
              and PostgreSQL. My main full-stack project, Bus Operations
              Simulator, applies these technologies to real operational
              workflows and business problems from the public transport
              industry.
            </p>

            <p className={styles.aboutParagraph}>
              I also bring over 12 years of professional experience from London
              public transport, including operational roles requiring clear
              communication, responsibility, attention to detail and
              decision-making under pressure.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
