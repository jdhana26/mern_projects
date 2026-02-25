import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../context/UserContext';

const Login = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(UserContext);
  const [logindata, setLogindata] = useState({ email: "", password: "" });

  const handchange = (e) => {
    setLogindata({ ...logindata, [e.target.name]: e.target.value });
  };

  const handlelogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("formdata")) || [];
    const user = users.find((u) => u.email === logindata.email);

    if (!user) {
      alert("User not found");
      return;
    }

    if (user.password === logindata.password) {
      setLogindata({ email: "", password: "" });
      localStorage.setItem("isActive", JSON.stringify({ auth: true }));
      localStorage.setItem("currentUser", JSON.stringify(user));
      setAuth(true);
      navigate("/cards");
    } else {
      alert("Invalid password");
    }
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
          Welcome Back
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 font-medium">
          New to Applifix?{' '}
          <button
            onClick={() => navigate("/register")}
            className="text-black hover:text-gray-700 underline underline-offset-4 transition-colors"
          >
            Create an account
          </button>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-10 px-4 shadow-2xl shadow-gray-200/50 sm:rounded-3xl sm:px-12 border border-gray-100/50">
          <form className="space-y-6" onSubmit={handlelogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 ml-1">
                Email address
              </label>
              <div className="mt-1.5 focus-within:scale-[1.01] transition-transform duration-200">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={handchange}
                  className="appearance-none block w-full px-4 py-3.5 border border-gray-200 rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-black/10 focus:border-black sm:text-sm transition-all duration-200 bg-gray-50/50 focus:bg-white"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 ml-1">
                Password
              </label>
              <div className="mt-1.5 focus-within:scale-[1.01] transition-transform duration-200">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={handchange}
                  className="appearance-none block w-full px-4 py-3.5 border border-gray-200 rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-black/10 focus:border-black sm:text-sm transition-all duration-200 bg-gray-50/50 focus:bg-white"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between px-1">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded-lg cursor-pointer"
                />
                <label htmlFor="remember-me" className="ml-2.5 block text-sm text-gray-700 font-medium cursor-pointer">
                  Keep me signed in
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-semibold text-black hover:text-gray-700 transition-colors">
                  Forgot?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-2xl shadow-xl text-sm font-bold text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transform active:scale-[0.98] transition-all duration-300 shadow-gray-200/50"
              >
                Sign In
              </button>
            </div>
          </form>

          <div className="mt-10">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-400 font-medium">Quick Access</span>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {/* Placeholders for Social Logins to look premium */}
              <button className="w-full inline-flex justify-center py-3 px-4 border border-gray-100 rounded-2xl bg-white text-sm font-semibold text-gray-600 hover:bg-gray-50 shadow-sm transition-all duration-200">
                Google
              </button>
              <button className="w-full inline-flex justify-center py-3 px-4 border border-gray-100 rounded-2xl bg-white text-sm font-semibold text-gray-600 hover:bg-gray-50 shadow-sm transition-all duration-200">
                Apple
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
