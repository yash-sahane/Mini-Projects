import React, { useState } from 'react';
import styles from './App.module.css';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';

const images = [img1, img2, img3, img4, img5];

const App = () => {
  const [current, setCurrent] = useState(0);

  const prevHandler = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextHandler = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`${styles.slide} ${idx === current ? styles.current : ''
              }`}
          >
            <img src={img} alt="" />
          </div>
        ))}
        <button className={`${styles.btn} ${styles.prev}`} onClick={prevHandler}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className={`${styles.btn} ${styles.next}`} onClick={nextHandler}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default App;