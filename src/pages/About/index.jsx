import styles from "./About.module.sass";
import GrayedImage from "../../components/GrayedImage";
import paysage from "../../assets/paysage.png";

const About = () => {
  return (
    <div className={styles.about}>
      <GrayedImage src={paysage} alt="Paysage" />
      <h1>A propos</h1>
    </div>
  );
};

export default About;
