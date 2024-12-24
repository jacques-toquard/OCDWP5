import PropTypes from 'prop-types';
import styles from './GreyedImage.module.sass';

const GrayedImage = ({ src, alt }) => {
    return (
        <div className={styles.gray}>
            <div className={styles.overlay}></div>
            <img className={styles.grayed} src={src} alt={alt} />
        </div>
    );
};

GrayedImage.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
};

export default GrayedImage;
