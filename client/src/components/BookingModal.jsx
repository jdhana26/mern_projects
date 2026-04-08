import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';
import api from '../api/axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const BookingModal = () => {
  const { 
    auth, setAuth, 
    isModalOpen, setIsModalOpen, 
    modalProduct, setModalProduct 
  } = useContext(UserContext);
  
  const navigate = useNavigate();

  // Login form state
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  // Enquiry form state
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    mobile: '',
    address: '',
    problem: ''
  });

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setModalProduct(null);
      setEnquiryForm({ name: '', mobile: '', address: '', problem: '' });
      setLoginData({ email: '', password: '' });
    }, 200); // clear after animation if any
  };

  if (!isModalOpen) return null;

  // Login handlers
  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/login", loginData);
      const data = response.data;

      if (response.status === 200) {
        setLoginData({ email: "", password: "" });
        localStorage.setItem("isActive", JSON.stringify({ auth: true }));
        localStorage.setItem("currentUser", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);
        setAuth(true); // Automatically switches view!
        
        // Ensure admin stays on correct page, or route if admin
        if (data.user.role === 'admin') {
           navigate("/admin");
           closeModal();
        }
      } else {
        toast.error(data.msg || "Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      const errorMsg = error.response?.data?.msg || "An error occurred. Please try again.";
      toast.error(errorMsg);
    }
  };

  // Enquiry handlers
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
      const payload = {
        ...enquiryForm,
      };
      
      const response = await api.post("/enquiry", payload);
      const data = response.data;

      if (response.status === 200 || response.status === 201) {
        toast.success("Enquiry submitted successfully!");
        closeModal();
      } else {
        toast.error(data.msg || "Submission failed");
      }
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      const errorMsg = error.response?.data?.msg || "An error occurred. Please try again.";
      toast.error(errorMsg);
    }
  };

  return (
    <div
      className="fixed inset-0 backdrop-blur-md bg-black/10 flex justify-center items-center z-50 transition-opacity"
      onClick={closeModal}
    >
      <div
        className="bg-white w-[95%] sm:w-[600px] rounded-2xl p-4 sm:p-6 relative flex flex-col sm:flex-row gap-6 max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-2 right-3 text-xl text-gray-500 hover:text-black transition-colors"
        >
          ✖
        </button>

        {!auth ? (
          /* LOGIN VIEW */
           <div className="w-full flex-1 flex flex-col p-4 py-8">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center shadow-lg shadow-gray-200">
                <span className="text-white font-bold text-2xl">A</span>
              </div>
            </div>
            <h2 className="text-center text-2xl font-extrabold text-gray-900 tracking-tight mb-6">
              Sign in to Book
            </h2>

            <form className="space-y-4" onSubmit={handleLoginSubmit}>
              <div>
                <label className="block text-sm font-semibold text-gray-700 ml-1">Email address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={loginData.email}
                  onChange={handleLoginChange}
                  className="mt-1 appearance-none block w-full px-4 py-3 border border-gray-200 rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black sm:text-sm transition-all duration-200 bg-gray-50/50 focus:bg-white"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 ml-1">Password</label>
                <input
                  type="password"
                  name="password"
                  required
                  value={loginData.password}
                  onChange={handleLoginChange}
                  className="mt-1 appearance-none block w-full px-4 py-3 border border-gray-200 rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black sm:text-sm transition-all duration-200 bg-gray-50/50 focus:bg-white"
                  placeholder="••••••••"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-2xl shadow-lg text-sm font-bold text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transform active:scale-[0.98] transition-all duration-300"
                >
                  Sign In
                </button>
              </div>
              
              <div className="text-center mt-4">
                <button
                  type="button"
                  onClick={() => { closeModal(); navigate("/register"); }}
                  className="text-sm text-black font-bold hover:text-gray-700 underline underline-offset-4 transition-colors"
                >
                  Create an account
                </button>
              </div>
            </form>
           </div>
        ) : (
          /* BOOKING FORM VIEW */
          <>
            {/* LEFT SIDE IMAGE */}
            <div className="w-full sm:w-1/2 flex flex-col items-center justify-center p-2">
              {modalProduct ? (
                <>
                  <img src={modalProduct.img} alt={modalProduct.name} className="w-32 sm:w-40 object-contain drop-shadow-md" />
                  <h2 className="font-bold mt-4 text-center text-lg">{modalProduct.name}</h2>
                </>
              ) : (
                <>
                  <div className="w-20 h-20 bg-black rounded-3xl flex items-center justify-center shadow-lg shadow-gray-200 mb-4">
                    <span className="text-white font-bold text-4xl">A</span>
                  </div>
                  <h2 className="font-bold mt-2 text-center text-lg text-gray-800">General Service</h2>
                  <p className="text-sm text-center text-gray-500 mt-2">Book any appliance repair service.</p>
                </>
              )}
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="w-full sm:w-1/2 flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center sm:text-left">
                Book Service
              </h3>

              <form className="flex flex-col gap-3" onSubmit={handleEnquirySubmit}>
                <input
                  type="text"
                  name="name"
                  value={enquiryForm.name}
                  onChange={handleEnquiryChange}
                  placeholder="Name"
                  className="border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-black transition shadow-sm text-sm"
                />
                <input
                  type="tel"
                  name="mobile"
                  value={enquiryForm.mobile}
                  onChange={handleEnquiryChange}
                  placeholder="Phone"
                  className="border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-black transition shadow-sm text-sm"
                />
                <textarea
                  name="address"
                  value={enquiryForm.address}
                  onChange={handleEnquiryChange}
                  placeholder="Address"
                  rows="2"
                  className="border border-gray-300 rounded-lg p-2.5 resize-none focus:outline-none focus:ring-2 focus:ring-black transition shadow-sm text-sm"
                ></textarea>
                <textarea
                  name="problem"
                  value={enquiryForm.problem}
                  onChange={handleEnquiryChange}
                  placeholder={modalProduct ? `Describe issue with ${modalProduct.name}` : "What appliance is facing an issue?"}
                  rows="3"
                  className="border border-gray-300 rounded-lg p-2.5 resize-none focus:outline-none focus:ring-2 focus:ring-black transition shadow-sm text-sm"
                ></textarea>

                <button
                  type="submit"
                  className="mt-2 bg-black text-white py-2.5 rounded-lg hover:bg-gray-800 transition duration-300 font-medium shadow-md w-full"
                >
                  Submit Booking
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
