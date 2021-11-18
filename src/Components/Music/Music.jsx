import React from 'react'
import {Row,Col} from 'reactstrap'
import styles from './Music.module.scss';

const Music = ({rightImages,leftImages , firstLine , secondLine}) => {
    return (
        <div>
            <Row className= {`${styles.main_container} gx-0`}>
                <Col sm={4} xs={4}  className={styles.first_col}> <img src={leftImages} alt="" /></Col>
                <Col sm={4} xs={4}  className={styles.second_col}> 
                <p>{firstLine}</p>
                <h1>{secondLine}</h1></Col>
                <Col sm={4} xs={4}  className={styles.third_col}> <img src={rightImages} alt="" /></Col>
            </Row>
        </div>
    )
}

export default Music
