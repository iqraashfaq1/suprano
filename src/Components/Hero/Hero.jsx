import React from 'react'
import styles from './Hero.module.scss';
import Dog from '../../Images/MobileScreenImages/dog.png'
import Banner from '../Banner/Banner';
import News from '../News/News';
import Stream from '../Stream/Stream';
import Poppington from '../Poppington/Poppington';
import Footer from '../Footer/Footer';

const Hero = () => {
    return (
        <div className={styles.main_container}>
            <div className={styles.bg_image}>
                <div className={styles.text_container}>
                <img src={Dog} alt="Dog" />
                <h1>
                    <span> DAME DASH</span> STUDIOS
                </h1>
                <p>A streaming platform for <br/> millennial trendsetters,<br/>  founded by American <br/>  entrepreneur Damon Dash</p>


                </div>
            

        

            </div>
            <Banner/>
            <News/>
            <Stream/>
            <Poppington/>
            <Footer/>
        </div>
    )
}

export default Hero
