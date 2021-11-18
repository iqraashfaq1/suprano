import React from 'react'
import styles from './Poppington.module.scss';
import {Row, Col ,Button} from 'reactstrap'
import Image1 from '../../Images/MobileScreenImages/image1.png'
import Image2 from '../../Images/MobileScreenImages/image2.png'
import Image3 from '../../Images/MobileScreenImages/image3.png'
import Image4 from '../../Images/MobileScreenImages/image4.png'
import Text from '../../Images/MobileScreenImages/text.png'
import Powered from '../../Images/MobileScreenImages/powered.png'
const Poppington = () => {
    return (
        <div className={styles.main_container}>
            <div  className={styles.text_container}>
            <img src={Text} alt="image" /> 
                {/* <h1>
                    POPPINGTON
                </h1>
                <p>2020</p> */}
            </div>
        <Row>
        
            <Col sm={7} xs={6}  className={styles.first_image} >

<img src={Image1} alt="image" /> 

</Col>
<Col sm={5} xs={6}  className={styles.second_image}>

<img src={Image2} alt="image" /> 


</Col>

         <Col sm={6} xs={6} className={styles.third_image} >
      
         <img src={Image3} alt="image" /> 
         
         </Col>
         <Col sm={6} xs={6} className={styles.forth_image}>
        
         <img src={Image4} alt="image" /> 
        
         </Col>
         </Row>
         <div className={styles.btn_cont} >
         <Button> SHOP NOW</Button>
         </div>
      <div className={styles.powered_container}>
      <img src={Powered} alt="image" /> 
      </div>
        </div>
    )
}

export default Poppington
