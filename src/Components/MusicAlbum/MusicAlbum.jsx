import React from 'react'
import { Row,Col } from 'reactstrap'
import styles from './MusicAlbum.module.scss';

const MusicAlbum = ({images,time,name}) => {
    return (
        <div className= {styles.main_container}>
            <Row className= {`${styles.main_div} gx-0`}>
                <Col xs={3} sm={3}>
                    <img src={images} alt="" />
                </Col>
                <Col xs={6} sm={6}>
                    <p>{name}</p>
                </Col>
                <Col xs={3} sm={3}>
                    <p className= {styles.time_container}>{time}</p>
                </Col>
               
            </Row>
        </div>
    )
}

export default MusicAlbum
