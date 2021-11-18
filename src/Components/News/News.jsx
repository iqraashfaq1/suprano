import React from 'react'
import styles from './News.module.scss';
import {Row,Col} from 'reactstrap'
import RightImage from '../../Images/MobileScreenImages/rightImage.png'
import LeftImage from '../../Images/MobileScreenImages/leftImage.png'
const News = () => {
    return (
        <div className={styles.main_container}>
            <Row>
                <h1>Daily News</h1>
                <Col sm={12} xs={12}>
                    <div className={styles.main_div}>
                    <div className={styles.first_div}>
                    <img src={LeftImage} alt="LeftImage" />
                    <p>Therapy: the rocuseries</p>
                    </div>
                    <div className={styles.second_div}>
                    <img src={RightImage} alt="RightImage" />
                    <p>Dressed to Kill
</p>
                    </div>
                    <div className={styles.third_div}>
                    <img src={LeftImage} alt="LeftImage" />
                    <p>Therapy: the rocuseries</p>
                    </div>
                    <div className={styles.forth_div}>
                    <img src={RightImage} alt="RightImage" />
                    <p>Dressed to Kill
</p>
                    </div>
                    </div>
                </Col>
                
            </Row>
        </div>
    )
}

export default News
