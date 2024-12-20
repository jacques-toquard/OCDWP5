import PropTypes from 'prop-types';
import styles from './GreyedImage.module.sass';

const GreyedImage = ({ src, alt }) => {
    return (
        <>
            <div className={styles.overlay}></div>
            <img className={styles.greyed} src={src} alt={alt} />
        </>
    );
};

GreyedImage.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
};

export default GreyedImage;
