import React from 'react'
import styles from './Comments.module.scss';
import { Row,Col } from 'reactstrap';
// import Circle1 from '../../Images/MobileScreenImages/circle1.png'
// import Circle2 from '../../Images/MobileScreenImages/circle2.png'
// import Circle3 from '../../Images/MobileScreenImages/circle3.png'
// import Circle4 from '../../Images/MobileScreenImages/circle4.png'
// import Circle5 from '../../Images/MobileScreenImages/circle5.png'
// import Circle6 from '../../Images/MobileScreenImages/circle6.png'



const Comments = ({imgsArray , para , headings, reply}) => {
    return (
        <div>
             <Row>
                <Col sm={3} xs={3}>
                <div className={styles.image_container}>
            <img src={imgsArray} alt="Circle" />
            </div>

                </Col>
                <Col sm={9} xs={9}>
<div className={styles.text_container}>
   <h3>{headings}</h3>
   <p>{para}</p>
   <h3> {reply}</h3>
    <hr />
</div>
                </Col>
            </Row>
        </div>
    )
}

export default Comments
