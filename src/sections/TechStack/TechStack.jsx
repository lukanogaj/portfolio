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
                <li>JavaScript</li>
                <li>HTML</li>
                <li>SCSS</li>
              </ul>
            </div>

            <div className={styles.techGroup}>
              <h3 className={styles.groupTitle}>Tools</h3>
              <ul className={styles.techList}>
                <li>Git</li>
                <li>Vite</li>
                <li>Supabase</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TechStack;
