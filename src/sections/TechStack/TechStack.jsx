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
                <li>JavaScript (ES6+)</li>
                <li>Next.js</li>
                <li>HTML & CSS / SCSS</li>
              </ul>
            </div>

            <div className={styles.techGroup}>
              <h3 className={styles.groupTitle}>Backend & Database</h3>
              <ul className={styles.techList}>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL / SQL</li>
                <li>REST APIs</li>
                <li>JWT & bcrypt</li>
              </ul>
            </div>

            <div className={styles.techGroup}>
              <h3 className={styles.groupTitle}>Testing & Tools</h3>
              <ul className={styles.techList}>
                <li>Vitest</li>
                <li>Git & GitHub</li>
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
