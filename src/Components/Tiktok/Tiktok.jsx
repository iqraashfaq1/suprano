import React from 'react'
// import {Row,Col} from 'reactstrap'
import styles from './Tiktok.module.scss';
import Video from '../../Images/MobileScreenImages/tiktok.mp4'

const Tiktok = () => {
    return (
        <div className={styles.main_container} >
            <div className={styles.video_container}>
                {/* <h1> This is video</h1> */}
                <video width="100%" height="100%" src={Video} type="video/mp4" />
 
            </div>
           
        </div>
    )
}

export default Tiktok
