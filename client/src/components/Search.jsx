import React from 'react'
import worker from '../assets/worker1.jpg'
import { GiTv } from "react-icons/gi";
import { GiWashingMachine } from "react-icons/gi";
import { TbFridge } from "react-icons/tb";
import { TbAirConditioning } from "react-icons/tb";
import { MdOutlineMicrowave } from "react-icons/md";

const Search = () => {
  return (
    <div className='text-black mt-20 px-6 sm:px-10 lg:px-20 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start mb-24'>
      
      {/* Left side Services List */}
      <div className='w-full lg:w-1/2 flex flex-col'>
        <h1 className='font-black text-4xl sm:text-5xl mb-10 sm:mb-16 text-center lg:text-left tracking-tighter'>
          Our Services
        </h1>
        
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-y-12 gap-x-8 sm:gap-x-16 justify-items-center lg:justify-items-start'>
          <div className="flex flex-col items-center group cursor-pointer w-full">
            <div 
              className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-50 flex items-center justify-center shadow-md group-hover:bg-black group-hover:text-white transition-all duration-300"
              style={{ clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)" }}
            >
              <GiTv className='text-3xl sm:text-4xl'/>
            </div>
            <p className='mt-4 font-black text-sm sm:text-base text-center'>TV</p>
          </div>

          <div className="flex flex-col items-center group cursor-pointer w-full">
            <div 
              className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-50 flex items-center justify-center shadow-md group-hover:bg-black group-hover:text-white transition-all duration-300"
              style={{ clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)" }}
            >
              <GiWashingMachine className='text-3xl sm:text-4xl'/>
            </div>
            <p className='mt-4 font-black text-sm sm:text-base text-center'>Washing Machine</p>
          </div>

          <div className="flex flex-col items-center group cursor-pointer w-full">
            <div 
              className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-50 flex items-center justify-center shadow-md group-hover:bg-black group-hover:text-white transition-all duration-300"
              style={{ clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)" }}
            >
              <TbFridge className='text-3xl sm:text-4xl'/>
            </div>
            <p className='mt-4 font-black text-sm sm:text-base text-center'>Fridge</p>
          </div>

          <div className="flex flex-col items-center group cursor-pointer w-full">
            <div 
              className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-50 flex items-center justify-center shadow-md group-hover:bg-black group-hover:text-white transition-all duration-300"
              style={{ clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)" }}
            >
              <MdOutlineMicrowave className='text-3xl sm:text-4xl'/>
            </div>
            <p className='mt-4 font-black text-sm sm:text-base text-center'>Microwave</p>
          </div>

          <div className="flex flex-col items-center group cursor-pointer w-full">
            <div 
              className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-50 flex items-center justify-center shadow-md group-hover:bg-black group-hover:text-white transition-all duration-300"
              style={{ clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)" }}
            >
              <TbAirConditioning className='text-3xl sm:text-4xl'/>
            </div>
            <p className='mt-4 font-black text-sm sm:text-base text-center'>AC</p>
          </div>
        </div>
      </div>

      {/* Right side Image */}
      <div className='w-full lg:w-1/2 h-full'>
        <img 
          src={worker} 
          alt="Technical Worker" 
          className='w-full h-full border-2 rounded-3xl shadow-2xl shadow-gray-200 object-cover min-h-[300px] lg:min-h-[500px]'
        />
      </div>
    </div>
  )
}

export default Search
