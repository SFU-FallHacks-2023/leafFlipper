import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import styles from './Leaf.module.css';

function Leaf() {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipLeaf = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`${styles.leaf} ${isFlipped ? styles.flipped : ''}`}
      onClick={flipLeaf}>
      <div className={styles.front}>
        <FontAwesomeIcon icon={faLeaf} size="2x" />
      </div>
      <div className={styles.back}>
        <FontAwesomeIcon icon={faLeaf} size="2x" />
      </div>
    </div>
  );
}

export default Leaf;
