import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Navbar.module.css";
import { Link, Outlet } from "react-router-dom";
import React, { useState } from "react";


const Navbar = ({scrollViewToBottom, handleDropdownMenu, activeDropdownMenu, setActiveDropDownMenu}) => {
  const [activeDepartment,setActiveDepartment] = useState(false);


  const handleDepartment = () => {
     setActiveDepartment(!activeDepartment);
  }

  

  return (
    <>
      <nav className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <img
            src="https://www.patelcollege.com/images/patel-group-logo.png"
            alt="college-logo"
          />
        </div>
        <div className={styles.navbarListContainer}>
          <ul>
            <li className={styles.navList}>
              <Link className={styles.linkStyle} to="/">
                Home
              </Link>
            </li>
            <li className={styles.navList}>
              <Link className={styles.linkStyle} to="/about">
                About
              </Link>
            </li>
            
            <li className={styles.navList}>
              <div className={styles.departmentContainer} onClick={handleDepartment}>
                <span>Departments</span>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2951/2951226.png"
                  alt="dropdown-menu"
                />
                 
              </div>
            </li>
            <li className={styles.navList} onClick={scrollViewToBottom}>Contact Us</li>
            <li className={styles.navMenuList} onClick={handleDropdownMenu}>
              <img src="https://cdn-icons-png.flaticon.com/128/2976/2976215.png" />
              
            </li>
          </ul>
          {
            activeDepartment ?
            <div className={styles.dropDownMenu} >
            <li>Computer Science</li>
            <li>Mechanical Engineering</li>
            <li>Civil Engineering</li>
            <li>Electrical & Electronics</li>
          </div>
            :null
          }
          
        </div>

        
      </nav>
      {
        activeDropdownMenu ? 
        <div className={styles.mobileNavList} >
          <li onClick={() => setActiveDropDownMenu(false)}><Link to="/" className={styles.linkStyle}>Home</Link></li>
          <li onClick={() => setActiveDropDownMenu(false)}><Link to="/about" className={styles.linkStyle}>About</Link></li>
          <li onClick={() => setActiveDropDownMenu(false)}>Department</li>
          <li onClick={scrollViewToBottom}>Contact</li>
        </div> : null
      }
      
      <Outlet />
    </>
  );
};

export default Navbar;
