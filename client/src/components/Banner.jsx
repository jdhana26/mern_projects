import React from 'react'
import bannerimg from '../assets/image.jpg'
import Search from './Search'
import Footer from './Footer'


const Banner = () => {
  return (
    <>
    
    <div>
     <div>
        <img src={bannerimg} alt="" />
    </div>
     
    </div>


   <Search/>
       
    
    </>
  )
}

export default Banner
