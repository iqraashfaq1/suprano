import React from 'react'
import styles from './LinkPage.module.scss';
import OrignalSeries from '../../Components/OrignalSeries/OrignalSeries';
import Kill from '../../Images/MobileScreenImages/kill.png'
import Galaxy from '../../Images/MobileScreenImages/galaxy.png'
import Films from '../../Images/MobileScreenImages/films.png'
import Health from '../../Images/MobileScreenImages/health.png'
import Footer from '../../Components/Footer/Footer';
import Powered from '../../Images/MobileScreenImages/powered.png'


const imgsArray = [Kill , Galaxy , Films , Health]


const LinkPage = () => {
    
    return (
        <div>
            {
                imgsArray.map(function(item,index){
                    console.log(imgsArray[index])
                    return(
                        <OrignalSeries key={index} Images={imgsArray[index]}/>
                    )
                })
            }
          <div className={styles.powered_container}>
      <img src={Powered} alt="image" /> 
      </div>
            <Footer/>
        </div>
    )
}

export default LinkPage
