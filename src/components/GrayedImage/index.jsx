import PropTypes from 'prop-types';
import styles from './GreyedImage.module.sass';

const GrayedImage = ({ src, alt }) => {
    return (
        <>
            <div className={styles.overlay}></div>
            <img className={styles.greyed} src={src} alt={alt} />
        </>
    );
};

GrayedImage.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
};

export default GrayedImage;
