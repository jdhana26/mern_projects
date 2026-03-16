import React from 'react'
import bannerimg from '../assets/image.jpg'
import Search from './Search'
import Footer from './Footer'


const Banner = () => {
  return (
    <>
    
    <div className="relative w-full overflow-hidden">
      <div className="w-full">
        <img 
          src={bannerimg} 
          alt="Home Banner" 
          className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center px-6 md:px-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-4">
              Quality Appliance <br />
              <span className="text-gray-300">Repair Services</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-medium max-w-md">
              Fast, reliable, and professional repair services for all your home appliances.
            </p>
          </div>
        </div>
      </div>
    </div>


   <Search/>
       
    
    </>
  )
}

export default Banner
