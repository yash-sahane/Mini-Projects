import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCircle } from '@fortawesome/free-solid-svg-icons';
import Dots from './Dots';
import styles from './App.module.css';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';

const App = () => {
  const images = [img1, img2, img3, img4, img5];
  const [current, setCurrent] = useState(0);
  const [activeDot, setActiveDot] = useState(0);

  const prevHandler = () => {
    const newIndex = (current === 0) ? images.length - 1 : current - 1;
    setCurrent(newIndex);
  };

  const nextHandler = () => {
    const newIndex = (current === images.length - 1) ? 0 : current + 1;
    setCurrent(newIndex);
  };

  const dotHandler = (index) => {
    setCurrent(index);
  }
  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`${styles.slide} ${current === idx ? styles.current : ''}`}
          >
            <img src={img} alt="" />
          </div>
        ))}
        <button className={`${styles.btn} ${styles.prev}`} onClick={prevHandler}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className={`${styles.btn} ${styles.next}`} onClick={nextHandler}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        <Dots images={images} dotHandler={dotHandler} setActiveDot={setActiveDot} current={current} />
      </div>
    </div>
  );
};

export default App;