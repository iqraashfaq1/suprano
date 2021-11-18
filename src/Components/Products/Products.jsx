import React from 'react'
import Product from '../../Images/MobileScreenImages/product.png'
import Cart from '../../Images/MobileScreenImages/cart.png'
import Search from '../../Images/MobileScreenImages/search.png'
// import Shorts from '../../Images/MobileScreenImages/shorts.png'
// import Hoodie from '../../Images/MobileScreenImages/hoodie.png'
import styles from './Products.module.scss';
import {Row,Col} from 'reactstrap'

const Products = ({imgsLeft,imgsRight}) => {
    return (
        <div className={styles.main_container}>
        <Row className={styles.gx-0}>
<Col sm={12} xs={12} className={styles.product_container}>
<img src={Product} alt="product" />
</Col>
<div className={styles.vector_container}>
<img src={Search} alt="" />


<p>New</p>
<span><p>Appareal</p></span>

<p>Lifestyle</p>
<img src={Cart} alt="cart" />
</div>
 
        </Row>
        </div>
    )
}

export default Products
