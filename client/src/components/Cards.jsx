import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import ImageSlider from './ImageSlider'
import api from '../api/axios';
 
const list = [
  { img: tv, name: "Television" },
  { img: wm, name: "Washing Machine" },
  { img: ac, name: "AC" },
  { img: heater, name: "Heater" },
  { img: fridge, name: "Fridge" },
  { img: mw, name: "Microwave" },
  { img: chimney, name: "Chimney" },
  { img: mixer, name: "Mixer" },
  { img: purifier, name: "Water purifier" },
  { img: induction, name: "Induction" }
]

const Cards = () => {
  const navigate = useNavigate();
  const { searchTerm, setIsModalOpen, setModalProduct } = useContext(UserContext);

  const filteredList = list.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 p-4 md:p-10 bg-gray-200'>
        {filteredList.map((e, i) => (
          <div key={i} className='bg-white p-10 flex flex-col rounded-2xl shadow-lg'>
            <img src={e.img} alt="" />
            <p className='mt-1 font-bold'>{e.name}</p>

            <button
              onClick={() => {
                setModalProduct(e);
                setIsModalOpen(true);
              }}
              className='bg-white text-black border border-black rounded px-3 py-1 mt-2 hover:bg-black hover:text-white transition-colors'
            >
              Book Now
            </button>

          </div>
        ))}
        {filteredList.length === 0 && (
          <div className="col-span-full text-center py-10 text-gray-500 font-semibold">
            No services found matching "{searchTerm}"
          </div>
        )}
      </div>
 <ImageSlider/>

    </>
  )
}

export default Cards
