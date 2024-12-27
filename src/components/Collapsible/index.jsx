import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Collapsible.module.sass';

const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.collapsible}>
      <button
        className={`${styles.header} ${isOpen ? styles.open : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2>{title}</h2>
        <span className={styles.arrow}>&#x2303;</span>
      </button>
      {isOpen && <div className={styles.content}>{children}</div>}
    </div>
  );
};

Collapsible.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Collapsible;
