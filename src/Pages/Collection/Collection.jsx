import React from 'react'
import Products from '../../Components/Products/Products'
import Footer from '../../Components/Footer/Footer'
import Pic1 from '../../Images/MobileScreenImages/pic1.png'
import Pic2 from '../../Images/MobileScreenImages/pic2.png'
import Pic3 from '../../Images/MobileScreenImages/pic3.png'
import Pic4 from '../../Images/MobileScreenImages/pic4.png'
import Pic5 from '../../Images/MobileScreenImages/pic5.png'
import Pic6 from '../../Images/MobileScreenImages/pic6.png'
import Pic7 from '../../Images/MobileScreenImages/pic7.png'
import Pic8 from '../../Images/MobileScreenImages/pic8.png'
import Pic9 from '../../Images/MobileScreenImages/pic9.png'
import Pic10 from '../../Images/MobileScreenImages/pic10.png'
import ProductsPic from '../../Components/ProductsPic/ProductsPic'
import PoweredFooter from '../../Components/PoweredFooter/PoweredFooter'

const imgsLeft=[Pic1 , Pic2 , Pic3 , Pic4 , Pic5 ]
const imgsRight = [Pic6 ,Pic7 ,Pic8 ,Pic9 ,Pic10]


const Collection = () => {
    return (
       
        <div>
              <Products/>
            {
            imgsLeft.map(function(item,index){
                return (
                    <ProductsPic  key={index} imgsLeft={imgsLeft[index]} imgsRight={imgsRight[index]}/>

                )
            })
        }
              <PoweredFooter/>
              <Footer/>
              </div>
    )
}

export default Collection
