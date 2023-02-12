import React from 'react';

//style
import styles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div className={styles.headerContainer}>
           <h1>ADVENTURE AWAITS</h1>
           <p>What are you waiting for?</p>
           <div className={styles.buttonContainer}>
             <button className={styles.buttonOne}>GET STARTED</button>
             <button className={styles.buttonTwo}>WATCH TRAILER <i className='fa fa-play' style={{marginLeft:'5px'}}></i></button>
           </div>
        </div>
    );
};

export default Header;