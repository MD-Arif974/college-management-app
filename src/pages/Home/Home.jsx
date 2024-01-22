import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Home.module.css";
import { useEffect, useRef, useState } from "react";
import Carousel from "../../components/Carousel/Carousel";
import Card from "../../components/Card/Card";
import DepartmentCard from "../../components/Card/DepartmentCard";
import data from '../../data';


const Home = ({bottomElem}) => {
  const imgArr = [
    "https://www.patelcollege.com/uploads/slider_2019/slider_21_jan.jpg",
    "https://www.patelcollege.com/uploads/slider_2019/oct_1.jpg",
    "https://www.patelcollege.com/uploads/slider_2019/slider_26_1.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  

  const handlePrev = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(imgArr.length - 1);
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

      <div className={styles.departmentCont} >
          <h1>Departments</h1>
          <div className={styles.departmentInnerCont}>
        
         
          {
            data.map((item,ind) => (
                  <DepartmentCard key={ind} branchIcon = {item.branchIcon} branch={item.branch} />
            ))
          }
           </div>
      </div>
      <section id = {styles.contact}  ref={bottomElem}>
            <div className={styles.contactCont}>
                   <h2>Patel Group of Instituition.</h2>
                   <div className={styles.collegeBorderCont}></div>
                   <div className={styles.pgoiBhopal}>
                   <span className={styles.contactHeading}>PGOI BHOPAL:</span>
                   <p className={styles.contactDetails}>Ratibad, Bhadbadha Road (M.p)
                    462044 India
                   </p>
                   <span className={styles.contactDetails}>Ph:- +91-755-2896281, 2896691</span>
                   </div>
                   <div className={styles.pgoiIndore}>
                   <span className={styles.contactHeading}>PGOI INDORE:</span>
                   <p className={styles.contactDetails}>Ralamandal, Bypass Road, Indore (M.P)
                    452020 India
                   </p>
                   <span className={styles.contactDetails}>Ph:- +91-731-2437100</span>
                   </div>
            </div>
            <div className={styles.contactFormCont}>
               <div className={styles.contactForm}>
                   <input type="text" placeholder="Enter Name" />
                   <input type="number" placeholder="Enter Roll No." />
                   <input type="email" placeholder="Enter Email" />
                   <textarea type="text" placeholder="Write your Issue..." />
                   <button>Submit</button>
               </div>
            </div>
      </section>
    </>
  );
};

export default Home;
