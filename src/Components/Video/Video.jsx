import React from 'react'
import styles from './Video.module.scss';
import Sad from '../../Images/MobileScreenImages/sad.mp4'
import News from '../../Components/News/News'
const Video = () => {
    return (
        <div className={styles.main_container}>
            
         {/* <video className={styles.video_container} autoPlay="true" >
                    <source src={Sad} type="video/mp4" />
                </video> */}

                <video  className={styles.video_container} autoPlay="true" width="100%" height="240" controls>
  <source src={Sad} type="video/mp4"/>
 
</video>

<div  className={styles.text_container}>
<h2>DDS Original Series</h2>
<h1>Dressed to Kill - Episode 1 "My Name Is Fleetwood"

</h1>
<p>New TV Series Directed by Damon Dash and Executive Produced By Kanye West. Enjoy a unique story about Fleetwood and his gangster family going through life changes, dangerous and overwhelming life events…</p>
<hr/>
</div>
<News/>
<hr/>

        </div>
    )
}

export default Video
