import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Navbar.module.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import React from "react";

const Navbar = () => {
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
              <div className={styles.departmentContainer}>
                <span>Departments</span>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2951/2951226.png"
                  alt="dropdown-menu"
                />
              </div>
            </li>
            <li className={styles.navList}>
              <Link className={styles.linkStyle} to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
          <div className={styles.dropDownMenu}>
            <li>Computer Science</li>
                <li>Mechanical Engineering</li>
                <li>Civil Engineering</li>
                <li>Electrical & Electronics</li>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
