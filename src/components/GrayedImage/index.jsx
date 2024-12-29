import PropTypes from 'prop-types';
import styles from './GreyedImage.module.sass';

const GrayedImage = ({ src, alt, height }) => {
  const containerStyle = height ? { height } : undefined;

  return (
    <div className={styles.gray} style={containerStyle}>
      <div className={styles.overlay}></div>
      <img className={styles.grayed} src={src} alt={alt} />
    </div>
  );
};

GrayedImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  height: PropTypes.string,
};

export default GrayedImage;
