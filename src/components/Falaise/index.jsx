import styles from './Falaise.module.sass'
import falaise from '../../assets/falaise.png'
import GrayedImage from '../GrayedImage'

const Falaise = () => {
    return (
        <div className={styles.falaise}>
            <GrayedImage src={falaise} alt="Falaise" />
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Falaise
