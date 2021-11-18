import React from 'react'
import {Row ,Col} from 'reactstrap'
import styles from './Album.module.scss';
import Icon1 from '../../Images/MobileScreenImages/fbIcon.png'
import Icon2 from '../../Images/MobileScreenImages/twitterIcon.png'
import Icon3 from '../../Images/MobileScreenImages/instaIcon.png'
import Slider1 from '../../Images/MobileScreenImages/slider1.png'
import Slider2 from '../../Images/MobileScreenImages/slide2.png'
import Slider3 from '../../Images/MobileScreenImages/slider3.png'
import LeftMan from '../../Images/MobileScreenImages/leftMan.png'

const Album = () => {
    return (
        <div className={styles.main_container}>
            <Row className= {`${styles.main_div} gx-0`}>
                <Col xs={6} sm={6}>
                    <div  className= {styles.image_container}> <img src={LeftMan} alt="man" /></div>
               
                </Col>
                <Col xs={6} sm={6}>
                    <div className= {styles.text_container}>
                    <p>Artist</p>
                    <h1>Kanya West</h1>
                    <div className= {styles.icon_container}>
                    <img src={Icon1} alt="icon" />
                    <img src={Icon2} alt="icon" />
                    <img src={Icon3} alt="icon" />

                    </div>
                    </div>
                
                </Col>
            </Row>
            <div className= {styles.slider_container}>
               
                <img src={Slider1} alt="slider" />
                <img src={Slider2} alt="slider" />
                <img src={Slider3} alt="slider" />
            </div>
            <div className= {styles.king_container}>
                <p>Album</p>
                <h1>Superhero is king</h1>
            </div>
            
        </div>
    )
}

export default Album
