import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import Carousel from "../../components/Carousel/Carousel";
import Card from "../../components/Card/Card";
import DepartmentCard from "../../components/Card/DepartmentCard";
import data from '../../data';


const Home = () => {
  const imgArr = [
    "https://www.patelcollege.com/uploads/slider_2019/oct_1.jpg",
    "https://www.patelcollege.com/uploads/slider_2019/slider_21_jan.jpg",
    "https://www.patelcollege.com/uploads/slider_2019/slider_26_1.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(data.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
    console.log(currentIndex);
  };

  const handleNext = () => {
    if (currentIndex === imgArr.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }

    console.log(currentIndex);
  };

  return (
    <>
      <div className={styles.carousel}>
        <div className={styles.innerCarousel}>
          <Carousel
            url={imgArr[currentIndex]}
            handlePrev={handlePrev}
            handleNext={handleNext}
          />
        </div>
      </div>
      <div className={styles.collegeObjectiveCont}>
        <h1>Why Patel Group?</h1>
        <div className={styles.objectiveInnerCont}>

        
               {
                 data.map((item,ind) => (
                  <Card  type={item.type} title = {item.title} icon = {item.icon} key={ind}/>
                 ))
               }
               </div>
      </div>

      <div className={styles.departmentCont}>
          <h1>Departments</h1>
          <div className={styles.departmentInnerCont}>
        
         
          {
            data.map((item,ind) => (
                  <DepartmentCard key={ind} branchIcon = {item.branchIcon} branch={item.branch} />
            ))
          }
           </div>
      </div>
    </>
  );
};

export default Home;
