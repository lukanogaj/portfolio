import styles from "./Hero.module.scss";
import Container from "../../components/Container/Container";

const Hero = () => {
	return (
		<section className={styles.hero}>
			<Container>
				<h1 className={styles.title}>Lukasz Nogaj</h1>
				<p className={styles.subtitle}>Frontend Developer</p>
			</Container>
		</section>
	);
};

export default Hero;
