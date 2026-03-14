import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import UserContext from '../context/UserContext';

const Contact = () => {
    const navigate = useNavigate();
    const { auth } = useContext(UserContext);
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="max-w-5xl w-full bg-white shadow-2xl rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-gray-200">

                {/* Visual Side */}
                <div className="md:w-1/3 bg-black p-12 text-white flex flex-col justify-between">
                    <div>
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6">
                            <span className="text-black font-black text-2xl">A</span>
                        </div>
                        <h2 className="text-4xl font-black tracking-tight mb-4">Contact Applifix</h2>
                        <p className="text-gray-400">We're here to help you get your appliances back in working order.</p>
                    </div>
                    <div className="hidden md:block">
                        <div className="text-sm text-gray-500 font-bold tracking-widest uppercase">Applifix HQ</div>
                        <div className="text-lg">Service with Integrity.</div>
                    </div>
                </div>

                {/* Info Side */}
                <div className="md:w-2/3 p-10 md:p-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

                        <div className="flex gap-5 group">
                            <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                                <FaPhoneAlt />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-500 uppercase text-xs tracking-widest mb-1">Call Us</h3>
                                <p className="text-lg font-bold text-gray-900">+91 9888849269</p>
                            </div>
                        </div>

                        <div className="flex gap-5 group">
                            <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-500 uppercase text-xs tracking-widest mb-1">Email Us</h3>
                                <p className="text-lg font-bold text-gray-900">support@applifix.com</p>
                            </div>
                        </div>

                        <div className="flex gap-5 group">
                            <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-500 uppercase text-xs tracking-widest mb-1">Visit Us</h3>
                                <p className="text-gray-900 leading-tight">
                                    Applifix Service Center<br />
                                    Chennai, Tamil Nadu<br />
                                    India
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-5 group">
                            <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                                <FaClock />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-500 uppercase text-xs tracking-widest mb-1">Working Hours</h3>
                                <p className="text-gray-900">
                                    Monday – Saturday<br />
                                    9:00 AM – 8:00 PM
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="mt-16 pt-10 border-t border-gray-100">
                        <button
                            onClick={() => navigate(auth ? '/cards' : '/register')}
                            className="w-full py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-black transition-all shadow-lg active:scale-[0.98] tracking-wide"
                        >
                            Book a Service Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
