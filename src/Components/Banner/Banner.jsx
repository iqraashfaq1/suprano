import React from 'react'
import styles from './Banner.module.scss';
import Baner from '../../Images/MobileScreenImages/banner.png'

const Banner = () => {
    return (
        <div className={styles.main_container}>
            <div className={styles.image_container}>
            <img src={Baner} alt="Banner" />
            </div>
        </div>
    )
}

export default Banner
