import React from 'react'
import worker from '../assets/worker1.jpg'
import { GiTv } from "react-icons/gi";
import { GiWashingMachine } from "react-icons/gi";
import { TbFridge } from "react-icons/tb";
import { TbAirConditioning } from "react-icons/tb";
import { MdOutlineMicrowave } from "react-icons/md";

const Search = () => {
  return (
    <div className='text-black mt-10 px-6 sm:px-10 lg:px-20 flex flex-col lg:flex-row gap-10 lg:gap-20 items-center lg:items-start mb-16'>
      {/* Left side Image */}
      <div className='w-full lg:w-1/2'>
        <img 
          src={worker} 
          alt="Technical Worker" 
          className='w-full border-2 rounded-3xl shadow-2xl shadow-gray-200 object-cover'
        />
      </div>

      {/* Right side Services List */}
      <div className='w-full lg:w-1/2'>
        <h1 className='font-black text-3xl sm:text-5xl lg:mt-10 mb-8 sm:mb-16 text-center lg:text-left tracking-tighter'>
          Our Services
        </h1>
        
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-16 justify-items-center'>
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-50 rounded-2xl flex items-center justify-center shadow-md group-hover:bg-black group-hover:text-white transition-all duration-300">
              <GiTv className='text-3xl sm:text-4xl'/>
            </div>
            <p className='mt-3 font-extrabold text-sm sm:text-base'>TV</p>
          </div>

          <div className="flex flex-col items-center group cursor-pointer">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-50 rounded-2xl flex items-center justify-center shadow-md group-hover:bg-black group-hover:text-white transition-all duration-300">
              <GiWashingMachine className='text-3xl sm:text-4xl'/>
            </div>
            <p className='mt-3 font-extrabold text-sm sm:text-base text-center'>Washing Machine</p>
          </div>

          <div className="flex flex-col items-center group cursor-pointer">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-50 rounded-2xl flex items-center justify-center shadow-md group-hover:bg-black group-hover:text-white transition-all duration-300">
              <TbFridge className='text-3xl sm:text-4xl'/>
            </div>
            <p className='mt-3 font-extrabold text-sm sm:text-base'>Fridge</p>
          </div>

          <div className="flex flex-col items-center group cursor-pointer">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-50 rounded-2xl flex items-center justify-center shadow-md group-hover:bg-black group-hover:text-white transition-all duration-300">
              <MdOutlineMicrowave className='text-3xl sm:text-4xl'/>
            </div>
            <p className='mt-3 font-extrabold text-sm sm:text-base text-center'>Microwave</p>
          </div>

          <div className="flex flex-col items-center group cursor-pointer">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-50 rounded-2xl flex items-center justify-center shadow-md group-hover:bg-black group-hover:text-white transition-all duration-300">
              <TbAirConditioning className='text-3xl sm:text-4xl'/>
            </div>
            <p className='mt-3 font-extrabold text-sm sm:text-base'>AC</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
