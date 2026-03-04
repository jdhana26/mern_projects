import React, { useState } from 'react'
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

  const [isOpen, setIsOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <>
      <div className='grid grid-cols-5 gap-6 p-10 bg-gray-200'>
        {list.map((e, i) => (
          <div key={i} className='bg-white p-10 flex flex-col rounded-2xl shadow-lg'>
            <img src={e.img} alt="" />
            <p className='mt-1 font-bold'>{e.name}</p>

            <button
              onClick={() => {
                setSelectedProduct(e)
                setIsOpen(true)
              }}
              className='bg-white text-black border border-black rounded px-3 py-1 mt-2'
            >
              Enquiry now
            </button>

          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {isOpen && selectedProduct && (
        <div
          className="fixed inset-0 backdrop-blur-md bg-black/10 flex justify-center items-center"
          onClick={() => setIsOpen(false)}
        >

          <div
            className="bg-white w-[600px] rounded-xl p-6 relative flex gap-6"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-xl "
            >
              ✖
            </button>

            {/* LEFT SIDE IMAGE */}
            <div className="w-1/2 flex flex-col items-center">
              <img src={selectedProduct.img} alt="" className="w-40" />
              <h2 className="font-bold mt-3">{selectedProduct.name}</h2>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="w-1/2">
  <h3 className="text-xl font-semibold mb-4 text-gray-800">
    Book Service
  </h3>

  <form className="flex flex-col gap-4">

    <input
      type="text"
      placeholder="Name"
      className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black transition"
    />

    <input
      type="tel"
      placeholder="Phone"
      className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black transition"
    />

    <textarea
      placeholder="Address"
      rows="2"
      className="border border-gray-300 rounded-lg p-2 resize-none focus:outline-none focus:ring-2 focus:ring-black transition"
    ></textarea>

    <textarea
      placeholder="Problem Description"
      rows="3"
      className="border border-gray-300 rounded-lg p-2 resize-none focus:outline-none focus:ring-2 focus:ring-black transition"
    ></textarea>

    <button
      type="submit"
      className="bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300"
    >
      Submit
    </button>

  </form>
</div>
            </div>

          </div>
        
      )}
 <ImageSlider/>

    </>
  )
}

export default Cards
