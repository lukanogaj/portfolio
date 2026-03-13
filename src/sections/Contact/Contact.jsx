import styles from "./Contact.module.scss";
import Container from "../../components/Container/Container";

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <Container>
        <div className={styles.contactContent}>
          <h2 className={styles.contactTitle}>Contact</h2>

          <div className={styles.contactLinks}>
            <a
              href="https://github.com/lukanogaj"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              LinkedIn
            </a>

            <a
              href="mailto:lukasz.nogajdev@gmail.com"
              className={styles.contactLink}
            >
              Email
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
