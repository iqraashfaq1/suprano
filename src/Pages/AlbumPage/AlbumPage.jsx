import React from 'react'
import Album from '../../Components/Album/Album'
import MusicAlbum from '../../Components/MusicAlbum/MusicAlbum'
import PoweredFooter from '../../Components/PoweredFooter/PoweredFooter'
import Footer from '../../Components/Footer/Footer'
import BlueImg from '../../Images/MobileScreenImages/blueImg.png'

const AlbumPage = () => {
    const images = [BlueImg,BlueImg,BlueImg,BlueImg,BlueImg,BlueImg,BlueImg,BlueImg,BlueImg,BlueImg]
    const name =["Every Hour — Sunday Service Choir","Saleh","Follow God", "Closed on Sunday","On God","Every Thing We Need","Water — Ant Clemons","God Is","Hands On — Fred Hammond","Use This Gospel — Clipse, Kenny G"]
    const time = ["3:01" , "2:04" ,"4:02" ,"3:03","4:01","7:03","1:02","2:09","3:02","9:01"]  
    return (
        <div>

            <Album/>
{
                images.map(function(item,index){
                    console.log(images[index])
                    return(
                       
                        <MusicAlbum key={index} images={images[index]}  name={name[index]} time={time[index]} />
                    )
                })
            }

        <PoweredFooter/>
        <Footer/>
        </div>
    )
}

export default AlbumPage
