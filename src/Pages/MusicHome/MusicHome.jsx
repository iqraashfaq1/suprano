import React from 'react'
import Music from '../../Components/Music/Music'
import PoweredFooter from '../../Components/PoweredFooter/PoweredFooter'
import Footer from '../../Components/Footer/Footer'
import BannerImage from '../../Images/MobileScreenImages/bannerBackground.png'
import styles from './MusicHome.module.scss';
import Arrow from '../../Images/MobileScreenImages/arrow.png'
import PurpleImage from '../../Images/MobileScreenImages/purpleImage.png'
import Group1 from '../../Images/MobileScreenImages/group1.png'
import Group2 from '../../Images/MobileScreenImages/group2.png'
import Group3 from '../../Images/MobileScreenImages/group3.png'
import Group4 from '../../Images/MobileScreenImages/group4.png'
import Groupa from '../../Images/MobileScreenImages/groupa.png'
import Groupb from '../../Images/MobileScreenImages/groupb.png'
import Groupc from '../../Images/MobileScreenImages/groupc.png'
import Groupd from '../../Images/MobileScreenImages/groupd.png'
import { Button,Row,Col } from 'reactstrap';

const rightImages = [Groupa , Groupb ,Groupc , Groupd] 
const leftImages = [Group1 , Group2 ,Group3 ,Group4] 
const firstLine = ["Artist" , "Artist"," Artist", "Artist" ] 
const secondLine = ["Dame Dash" , "The Black Guns" , "Nicolette" ,"Kanye West"]

const MusicHome = () => {
    return (
        <div className= {styles.main_container}>
            { 
            rightImages.map(function(item,index){
                return (
             <Music key={index} rightImages={rightImages[index]} leftImages={leftImages[index]} firstLine={firstLine[index]} secondLine={secondLine[index]}/>
                )
            })
        }

        <div className= {styles.images_container}>
<img src={BannerImage} alt="" />

        </div>
        <div className={styles.text_container}>
            <h1>Bluroc studios</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        </div>
        <div >
            <Row className={styles.col_container}>
                <Col xs={6} sm={6}>
<img src={PurpleImage} alt="image" />
                </Col>
                <Col xs={6} sm={6}>
<Button> <img src={Arrow} alt="" /> Listen Now</Button>
                </Col>
            </Row>
        </div>
        <PoweredFooter/>
        <Footer/>
        </div>
    )
}

export default MusicHome
