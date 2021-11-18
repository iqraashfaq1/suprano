import React from 'react'
import styles from './Footer.module.scss';
import Home from '../../Images/MobileScreenImages/home.png'
import Shopping from '../../Images/MobileScreenImages/shopping.png'
import Movies from '../../Images/MobileScreenImages/movies.png'
import Music from '../../Images/MobileScreenImages/music.png'
import Explore from '../../Images/MobileScreenImages/explore.png'

const Footer = () => {
    return (
        <div className={styles.main_container}>
            <div className={styles.images_container} >
            <img src={Home} alt="image" /> 
            <img src={Shopping} alt="image" /> 
            <img src={Movies} alt="image" /> 
            <img src={Music} alt="image" /> 
            <img src={Explore} alt="image" /> 
            </div>
        </div>
    )
}

export default Footer
