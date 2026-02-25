import React from 'react'
import tv from '../assets/tv.png'
import wm from '../assets/wm.png'
import heater from '../assets/heater.png'
import ac from '../assets/ac.png'
import fridge from '../assets/fridge.png'
import mw from '../assets/microwave.png'
import chimney from '../assets/chimney.png'
import mixer from '../assets/mixer.png'
import purifier from '../assets/purifier.png'
import induction from '../assets/induction.png'





const list =[
  {img:tv,name:"Television"},
{img:wm,name:"Washing Machine"},
{img:ac,name:"AC"},
{img:heater,name:"Heater"},
{img:fridge,name:"Fridge"},
 {img:mw,name:"Microwave"},
{img:chimney,name:"Chimney"},
{img:mixer,name:"Mixer"},
{img:purifier,name:"Water purifier"},
{img:induction,name:"Induction"}]

 
const Cards = () => {
 

 
  return (
    <>
    
     
    
    <div className='grid grid-cols-5 gap-6 p-10 bg-gray-200 '>
      {list.map((e,i)=>(
        <div key={i} className='bg-white p-10 flex flex-col  rounded-2xl  shadow-lg '>
        <img src={e.img} alt="" />
        <p className='mt-1 font-bold'>{e.name}</p>
       
        

      </div>
      ))}
      
    </div>
     </>
  )
   
}

export default Cards
