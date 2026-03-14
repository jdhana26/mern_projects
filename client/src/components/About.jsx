import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="max-w-4xl bg-white shadow-2xl rounded-3xl p-10 md:p-16 transform transition duration-500 hover:scale-[1.01]">
                <div className="flex flex-col items-center mb-8">
                    <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center shadow-xl mb-4">
                        <span className="text-white font-black text-3xl">A</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">About Applifix</h1>
                    <div className="w-24 h-1 bg-black mt-4 rounded-full"></div>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-center md:text-left">
                    <p className="font-semibold text-gray-900">
                        Applifix is an online appliance repair service platform that helps customers easily book repair services for home appliances.
                    </p>
                    <p>
                        Our platform connects users with skilled technicians who can repair washing machines, refrigerators, air conditioners, microwaves, and other household appliances.
                    </p>
                    <p className="bg-gray-100 p-6 rounded-2xl italic border-l-4 border-black">
                        Applifix aims to provide fast, reliable, and convenient repair services with a simple booking process and professional support.
                    </p>
                </div>
                
                <div className="mt-12 flex justify-center">
                    <button 
                        onClick={() => navigate('/')}
                        className="px-8 py-3 bg-black text-white font-bold rounded-2xl hover:bg-gray-800 transition-all shadow-lg active:scale-95"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
