import React from 'react'
import Tiktok from '../../Components/Tiktok/Tiktok'
import styles from './TiktokPage.module.scss';
const TiktokPage = () => {
    return (
        <div className={styles.app}>
            <div className={styles.app__videos}>
            <Tiktok/>
            <Tiktok/>
            <Tiktok/>

            </div> 
           
        </div>
    )
}

export default TiktokPage
