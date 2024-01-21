import styles from '../../pages/Home/Home.module.css';

const Card = ({type,title,icon}) => {
  
  return (
    <>
      <div className={styles.cardCont}>
        <div className={styles.cardIconCont}>
           <img src={icon} />
        </div>
        <div className={styles.cartItemCont}>
          <h3>{type}</h3>
          <p>{title}</p>
        </div>
        
      </div>
    </>
  );
};

export default Card;