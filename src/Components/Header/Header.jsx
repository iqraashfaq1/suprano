import React from 'react'
// import {Row,Col} from 'reactstrap'

import styles from './Header.module.scss';
// import Logo from '../../Images/Header/logo.png'
// import Icon from '../../Images/Header/icon.png'
// import Vector from '../../Images/Header/vector.png'



const Header = () => {
    return (
        <div className={styles.main_container}>
            <div className={styles.left_side} >
            {/* <img className={styles.logo} src={Logo} alt="Image" /> */}

            </div>
            <div className={styles.right_side}>
            {/* <img className={styles.icon} src={Icon} alt="Image" />
            <img className={styles.vector} src={Vector} alt="Image" /> */}
            </div>
             
        </div>
    )
}

export default Header
