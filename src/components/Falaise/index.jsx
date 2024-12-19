import styles from './Falaise.module.sass'
import falaise from '../../assets/falaise.png'

const Falaise = () => {
    return (
        <div className={styles.falaise}>
            <img src={falaise} alt="Falaise" />
            <div className={styles.overlay}></div>
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Falaise
