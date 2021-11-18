import React from 'react'
import Slider from "react-slick";
import styles from './ProductSlick.module.scss';
import OrangeHoodie from '../../Images/MobileScreenImages/orangeHoodie.png'
import RightArrow from '../../Images/MobileScreenImages/rightArrow.png'
import LeftArrow from '../../Images/MobileScreenImages/leftArrow.png'
import { Button } from 'reactstrap';
import PoweredFooter from '../PoweredFooter/PoweredFooter';
const ProductSlick = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
      };
    return (
         <div className={styles.main_container}>
              <h2> Orange Hoodie</h2>
           
        <Slider {...settings} className={styles.orange_container}>
          {/* <img src={RightArrow} alt="" className={styles.rightarrow_container}/> */}
          <div>
            <img src={OrangeHoodie} alt="orange" />
          </div>
          <div>
          <img src={OrangeHoodie} alt="orange" />
          </div>
          <div>
          <img src={OrangeHoodie} alt="orange" />
          </div>
          {/* <img src={LeftArrow} alt="" className={styles.leftarrow_container} /> */}
        </Slider>
        <br />
        <div className={styles.price_container}>
          $45 <br /> USD
          <br />
        <hr />
        </div>
        <div className={styles.size_container}>
        <p>XS</p>
        <span> <p>S</p></span>
       <p>S</p>
       <p>XL</p>
       <p>L</p>
       <p>M</p>
        </div > 
        <div  className={styles.btn_container}>
          <Button>
            Add to cart
          </Button>
          <Button>
            Add to cart
          </Button>
        </div>
       
        <PoweredFooter/>
        </div>
    )
}

export default ProductSlick
