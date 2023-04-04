import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './Dots.module.css';

const Dots = ({ images, dotHandler, current }) => {
    return (
        <div className={styles.dotsContainer}>
            {images.map((_, index) => (
                <FontAwesomeIcon
                    key={index}
                    icon={faCircle}
                    className={`${styles.dot} ${current === index ? styles.active : ''}`}
                    onClick={() => dotHandler(index)}
                />
            ))}
        </div>
    );
};

export default Dots;