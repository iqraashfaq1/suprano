import React from 'react'
// import Streams from '../../Images/MobileScreenImages/stream.png'
import styles from './Stream.module.scss';
import {Button} from 'reactstrap'

const Stream = () => {
    return (
        <div>
            <div className={styles.main_container}>
           
            <div className={styles.text_container}>
<h1> <span> YZY TV</span>  </h1>
<p>Original Programming <br/> Behind the scenes footage</p>
<Button>STREAM NOW</Button>

<p>$9.99 a month or $100 a <br/> year after 3-day free trial</p>
            </div>
            </div>
        </div>
    )
}

export default Stream
