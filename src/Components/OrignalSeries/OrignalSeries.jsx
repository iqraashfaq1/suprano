import React from 'react'
import styles from './OrignalSeries.module.scss';

const OrignalSeries = ({Images}) => {
    return (
        
        <div className={styles.main_container}>
            <div className={styles.first_container}>
            {/* <h1>
        POWERED BY SUPRANO.AI
            </h1>
            <p>
            VIDEO
            </p> */}

            <div className={styles.image_container}>
<img src={Images} alt="image" /> 

{/* <h1> DDC Orginal Series</h1> */}
        

</div>
            </div>
        


        </div>
      
    
    )
}

export default OrignalSeries
