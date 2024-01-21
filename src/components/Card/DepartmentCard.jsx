
import styles from '../../pages/Home/Home.module.css';

const DepartmentCard = ({branchIcon,branch}) => {
  
  return (
    <>
      <div className={styles.departmentCardCont}>
        <div className={styles.departmentCardIconCont}>
           <img src={branchIcon} />
        </div>
        <div className={styles.departmentCartItemCont}>
          <span>{branch}</span>
        </div>
        
      </div>
    </>
  );
};

export default DepartmentCard;