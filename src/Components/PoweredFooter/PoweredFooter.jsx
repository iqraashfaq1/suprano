import React from 'react'
import Powered from '../../Images/MobileScreenImages/powered.png'
import styles from './PoweredFooter.module.scss';
const PoweredFooter = () => {
    return (
        <div>
     <div className={styles.powered_container}>
      <img src={Powered} alt="image" /> 
      </div>
        </div>
    )
}

export default PoweredFooter
