import React from 'react'
import worker from '../assets/worker1.jpg'
import { GiTv } from "react-icons/gi";
import { GiWashingMachine } from "react-icons/gi";
import { TbFridge } from "react-icons/tb";
import { LuHeater } from "react-icons/lu";
import { TbAirConditioning } from "react-icons/tb";
import { MdOutlineMicrowave } from "react-icons/md";

const Search = () => {
  return (
    <>
    <div className=' text-black mt-5 columns-2 pr-10 pl-20 flex-row gap-15 '>
    
    
    <div className='  '>
      <img src={worker} alt="" className='w-300  border-2 rounded-2xl'/>
    </div>
    {/* <div className='pl-10 p-25 pr-4' > */}
      
      {/* <ul className='list-disc pl-5 mt-5 text-lg '>
        <li>Tv</li>
        <li>Washing Machine</li>
        <li>Refridgerator</li>
        <li>Heater</li>
        <li>AC conditioner</li>
        <li>Microwave</li>
      </ul> */}
      <div className=''>
        <h1 className='font-extrabold text-3xl mt-20 flex justify-center items-center  '>Our Services</h1>
        <div className='flex flex-row justify-center items-center text-black gap-30 mt-20'>
          <div >
      <GiTv className='w-15 h-15    '/>
      <p className='ml-5 '>TV</p>
      </div>
      <div className='text-black '>

      <GiWashingMachine className='w-15 h-15 ml-7    '/>
      <p className=' '>Washing Machine</p>
      </div>
     <div>
       <TbFridge className='w-15 h-15      '/>
      <p className=' ml-2'>Fridge</p>
      </div>
      </div>



      
       <div  className='flex flex-row justify-center items-center text-black gap-45 mt-23'>
<div>
  <MdOutlineMicrowave className='w-15 h-15 ml-6    '/>
      <p className='ml-4 '>Microwave</p>
</div>
       
<div> 
       <TbAirConditioning className='w-15 h-15   '/>
      <p className=' ml-5'>AC</p>
</div>
</div>
      

      {/* </>
      <LuHeater/>
      <>
      <e />
       */}
</div>
 
</div>
  

      
    </>
  )
}

export default Search 
