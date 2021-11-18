import React from 'react'
import Video from '../../Components/Video/Video'
import { Row,Col } from 'reactstrap'

import Circle1 from '../../Images/MobileScreenImages/circle1.png'
import Circle2 from '../../Images/MobileScreenImages/circle2.png'
import Circle3 from '../../Images/MobileScreenImages/circle3.png'
import Circle4 from '../../Images/MobileScreenImages/circle4.png'
import Circle5 from '../../Images/MobileScreenImages/circle5.png'
import Circle6 from '../../Images/MobileScreenImages/circle6.png'

import styles from './VideoPage.module.scss';
import Comments from '../../Components/Comments/Comments';

const imgsArray =[Circle1 , Circle2 , Circle3, Circle4,Circle5, Circle6]
const headings = ["La rasom" , "Amanda Robertson" , "alexis nicole" , "FtmKai" , "La rose" , "eric dizzy"]
const para =["I'm definitely loving this series already." , 
"Thank you! I am so happy to see you prospering and sharing and always finding the time to give back. Wishing you even more success.",
 "I really like DDS! So creative, very intelligent.... I support!",
 "Been a Patron from the beginning 😊 even though small I happy to a part of such a great movement👊🏾🎬🎬",
 "Glad to see that with DDS and others, black industry revives and is supported" ,
 "Glad to see that with DDS and others, black industry revives and is supported"]
 const reply = ["Reply" ,"Reply","Reply","Reply","Reply","Reply"]


const VideoPage = () => {
    return (
      
        <div>
            
        
            <Video/>


{
                imgsArray.map(function(item,index){
                    console.log(imgsArray[index])
                    return(
                       
                        <Comments key={index} imgsArray={imgsArray[index]}  headings={headings[index]} para={para[index]} reply={reply[index]} />
                    )
                })
            }
        </div>
    )
}

export default VideoPage
