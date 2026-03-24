import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { ToastContainer, toast } from 'react-toastify';
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
  const { auth, searchTerm } = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    mobile: '',
    address: '',
    problem: ''
  });

  const handleEnquiryChange = (e) => {
    setEnquiryForm({ ...enquiryForm, [e.target.name]: e.target.value });
  };

  const handleEnquirySubmit = async (e) => {
    e.preventDefault();
    if (!enquiryForm.name || !enquiryForm.mobile || !enquiryForm.address || !enquiryForm.problem) {
      toast.error('All fields are required');
      return;
    }

    try {
      const response = await api.post("/enquiry", enquiryForm);
      const data = response.data;

      if (response.status === 200 || response.status === 201) {
        toast.success("Enquiry submitted successfully!");
        setIsOpen(false);
        setEnquiryForm({ name: '', mobile: '', address: '', problem: '' });
      } else {
        toast.error(data.msg || "Submission failed");
      }
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      const errorMsg = error.response?.data?.msg || "An error occurred. Please try again.";
      toast.error(errorMsg);
    }
  };

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
                const user = localStorage.getItem("user");
                if (!user) {
                  toast.info("Please login to book a service.");
                  navigate("/login"); 
                  return;
                }
                setSelectedProduct(e)
                setIsOpen(true)
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

      {/* Popup Modal */}
      {isOpen && selectedProduct && (
        <div
          className="fixed inset-0 backdrop-blur-md bg-black/10 flex justify-center items-center"
          onClick={() => setIsOpen(false)}
        >

          <div
            className="bg-white w-[95%] sm:w-[600px] rounded-2xl p-4 sm:p-6 relative flex flex-col sm:flex-row gap-6 max-h-[90vh] overflow-y-auto"
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
            <div className="w-full sm:w-1/2 flex flex-col items-center">
              <img src={selectedProduct.img} alt="" className="w-32 sm:w-40" />
              <h2 className="font-bold mt-3 text-center">{selectedProduct.name}</h2>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="w-full sm:w-1/2">
  <h3 className="text-xl font-semibold mb-4 text-gray-800">
    Book Service
  </h3>

  <form className="flex flex-col gap-4" onSubmit={handleEnquirySubmit}>

    <input
      type="text"
      name="name"
      value={enquiryForm.name}
      onChange={handleEnquiryChange}
      placeholder="Name"
      className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black transition"
    />

    <input
      type="tel"
      name="mobile"
      value={enquiryForm.mobile}
      onChange={handleEnquiryChange}
      placeholder="Phone"
      className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black transition"
    />

    <textarea
      name="address"
      value={enquiryForm.address}
      onChange={handleEnquiryChange}
      placeholder="Address"
      rows="2"
      className="border border-gray-300 rounded-lg p-2 resize-none focus:outline-none focus:ring-2 focus:ring-black transition"
    ></textarea>

    <textarea
      name="problem"
      value={enquiryForm.problem}
      onChange={handleEnquiryChange}
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

    <ToastContainer position="top-center" autoClose={3000} hideProgressBar />

    </>
  )
}

export default Cards
