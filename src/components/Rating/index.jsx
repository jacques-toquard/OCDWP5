import PropTypes from "prop-types";
import Star from "../Star";
import styles from "./Rating.module.sass";

const Rating = ({ rating }) => {
  return (
    <div className={styles.rating}>
      {Array.from({ length: rating }).map((_, index) => (
        <Star key={index} color="#FF6060" />
      ))}
      {Array.from({ length: 5 - rating }).map((_, index) => (
        <Star key={index} color="#E3E3E3" />
      ))}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
