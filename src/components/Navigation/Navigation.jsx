
import styles from "./Navigation.module.css";
import React from 'react'

const Navigation =()=> {
  
  return (
    <nav className={`${styles.navigation} container`}>
        <div className="logo">
            <img src="./images/logo.png" alt="" />
        </div>
        <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT US</li>
        </ul>
    </nav>
  )
}

export default Navigation