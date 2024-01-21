import styles from "../../pages/Home/Home.module.css";

const Carousel = ({ url ,handlePrev, handleNext}) => {
  return (
    <>
      <div className={styles.prevIconContainer} onClick={handlePrev}>
        <img src="https://cdn-icons-png.flaticon.com/128/3415/3415823.png" />
      </div>
      <div className={styles.carouselItem}>
        <img src={url} />
      </div>
      <div className={styles.nextIconContainer} onClick={handleNext}>
        <img src="https://cdn-icons-png.flaticon.com/128/3114/3114931.png" />
      </div>
    </>
  );
};

export default Carousel;
