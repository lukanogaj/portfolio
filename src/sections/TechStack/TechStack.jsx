import styles from "./TechStack.module.scss";
import Container from "../../components/Container/Container";

const TechStack = () => {
  return (
    <section className={styles.techStackSection}>
      <Container>
        <div className={styles.techStackContent}>
          <h2 className={styles.techStackTitle}>Tech Stack</h2>

          <div className={styles.techGroups}>
            <div className={styles.techGroup}>
              <h3 className={styles.groupTitle}>Frontend</h3>
              <ul className={styles.techList}>
                <li>React</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>HTML & CSS</li>
              </ul>
            </div>

            <div className={styles.techGroup}>
              <h3 className={styles.groupTitle}>Backend & Database</h3>
              <ul className={styles.techList}>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>REST APIs</li>
              </ul>
            </div>

            <div className={styles.techGroup}>
              <h3 className={styles.groupTitle}>Tools & Deployment</h3>
              <ul className={styles.techList}>
                <li>Git & GitHub</li>
                <li>Vitest</li>
                <li>Docker</li>
                <li>Vite</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TechStack;
