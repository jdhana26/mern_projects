import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: "", mobile: "", email: "", password: "", repassword: "" });

    const handleinput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const formsubmit = (e) => {
        e.preventDefault();

        if (form.password !== form.repassword) {
            toast.error("Passwords do not match");
            return;
        }

        const storedUsers = JSON.parse(localStorage.getItem("formdata")) || [];
        storedUsers.push(form);
        localStorage.setItem("formdata", JSON.stringify(storedUsers));

        toast.success("Account created successfully!");
        setTimeout(() => {
            navigate("/login");
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center">
                    <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center shadow-lg shadow-gray-200">
                        <span className="text-white font-bold text-2xl">A</span>
                    </div>
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 tracking-tight">
                    Create Account
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600 font-medium">
                    Already have an account?{' '}
                    <button
                        onClick={() => navigate("/login")}
                        className="text-black hover:text-gray-700 underline underline-offset-4 transition-colors"
                    >
                        Sign in
                    </button>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-10 px-4 shadow-2xl shadow-gray-200/50 sm:rounded-3xl sm:px-12 border border-gray-100/50">
                    <form className="space-y-5" onSubmit={formsubmit}>
                        <div className="grid grid-cols-1 gap-5">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    required
                                    onChange={handleinput}
                                    className="mt-1 appearance-none block w-full px-4 py-3 border border-gray-200 rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-black/10 focus:border-black sm:text-sm transition-all duration-200 bg-gray-50/50 focus:bg-white"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 ml-1">Mobile Number</label>
                                <input
                                    type="tel"
                                    name="mobile"
                                    placeholder="+1 (555) 000-0000"
                                    required
                                    onChange={handleinput}
                                    className="mt-1 appearance-none block w-full px-4 py-3 border border-gray-200 rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-black/10 focus:border-black sm:text-sm transition-all duration-200 bg-gray-50/50 focus:bg-white"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 ml-1">Email address</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="name@example.com"
                                    required
                                    onChange={handleinput}
                                    className="mt-1 appearance-none block w-full px-4 py-3 border border-gray-200 rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-black/10 focus:border-black sm:text-sm transition-all duration-200 bg-gray-50/50 focus:bg-white"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 ml-1">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="••••••••"
                                        required
                                        onChange={handleinput}
                                        className="mt-1 appearance-none block w-full px-4 py-3 border border-gray-200 rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-black/10 focus:border-black sm:text-sm transition-all duration-200 bg-gray-50/50 focus:bg-white"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 ml-1">Confirm</label>
                                    <input
                                        type="password"
                                        name="repassword"
                                        placeholder="••••••••"
                                        required
                                        onChange={handleinput}
                                        className="mt-1 appearance-none block w-full px-4 py-3 border border-gray-200 rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-black/10 focus:border-black sm:text-sm transition-all duration-200 bg-gray-50/50 focus:bg-white"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-2xl shadow-xl text-sm font-bold text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transform active:scale-[0.98] transition-all duration-300 shadow-gray-200/50"
                            >
                                Create Account
                            </button>
                        </div>
                    </form>

                    <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
                </div>
            </div>
        </div>
    );
};

export default Register;
