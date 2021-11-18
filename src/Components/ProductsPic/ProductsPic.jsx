import React from 'react'
import {Row,Col} from 'reactstrap'
import styles from './ProductPic.module.scss';

const ProductsPic = ({imgsLeft,imgsRight}) => {
    return (
        <div className={styles.main_container} >
            <Row>
            <div className={styles.products_container}> 

<Col sm={6} xs={6} className={styles.shorts_container}>
<img src={imgsLeft} alt="shorts" />
<h1>DDTV Shorts</h1>
<p>$35.00 US</p>
</Col>
<Col  sm={6} xs={6} className={styles.hoodie_container}>
<img src={imgsRight} alt="hoodie" />
<h1>DDTV Hoodie</h1>
<p>$35.00 US</p>
</Col>
 </div>
            </Row>
        </div>
    )
}

export default ProductsPic
