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
      
      {/* Left side Image */}
      <div className='w-full lg:w-1/2 h-full'>
        <img 
          src={worker} 
          alt="Technical Worker" 
          className='w-full h-full border-2 rounded-3xl shadow-2xl shadow-gray-200 object-cover min-h-[300px] lg:min-h-[500px]'
        />
      </div>

      {/* Right side Services List */}
      <div className='w-full lg:w-1/2 flex flex-col'>
        <h1 className='font-black text-4xl sm:text-5xl mb-10 sm:mb-16 text-center lg:text-left tracking-tighter'>
          Our Services
        </h1>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-y-12 gap-x-8 sm:gap-x-12 justify-items-center lg:justify-items-start'>
          <div className="flex flex-col items-center group cursor-pointer w-full lg:col-span-2">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-50 rounded-2xl flex items-center justify-center shadow-md group-hover:bg-black group-hover:text-white transition-all duration-300">
              <GiTv className='text-3xl sm:text-4xl'/>
            </div>
            <p className='mt-4 font-black text-sm sm:text-base text-center'>TV</p>
          </div>

          <div className="flex flex-col items-center group cursor-pointer w-full lg:col-span-2">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-50 rounded-2xl flex items-center justify-center shadow-md group-hover:bg-black group-hover:text-white transition-all duration-300">
              <GiWashingMachine className='text-3xl sm:text-4xl'/>
            </div>
            <p className='mt-4 font-black text-sm sm:text-base text-center'>Washing Machine</p>
          </div>

          <div className="flex flex-col items-center group cursor-pointer w-full lg:col-span-2">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-50 rounded-2xl flex items-center justify-center shadow-md group-hover:bg-black group-hover:text-white transition-all duration-300">
              <TbFridge className='text-3xl sm:text-4xl'/>
            </div>
            <p className='mt-4 font-black text-sm sm:text-base text-center'>Fridge</p>
          </div>

          <div className="flex flex-col items-center group cursor-pointer w-full lg:col-start-2 lg:col-span-2">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-50 rounded-2xl flex items-center justify-center shadow-md group-hover:bg-black group-hover:text-white transition-all duration-300">
              <MdOutlineMicrowave className='text-3xl sm:text-4xl'/>
            </div>
            <p className='mt-4 font-black text-sm sm:text-base text-center'>Microwave</p>
          </div>

          <div className="flex flex-col items-center group cursor-pointer w-full lg:col-start-4 lg:col-span-2">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-50 rounded-2xl flex items-center justify-center shadow-md group-hover:bg-black group-hover:text-white transition-all duration-300">
              <TbAirConditioning className='text-3xl sm:text-4xl'/>
            </div>
            <p className='mt-4 font-black text-sm sm:text-base text-center'>AC</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
