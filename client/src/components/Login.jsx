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

  const handlelogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(logindata),
      });

      const data = await response.json();

      if (response.ok) {
        setLogindata({ email: "", password: "" });
        localStorage.setItem("isActive", JSON.stringify({ auth: true }));
        localStorage.setItem("currentUser", JSON.stringify(data.user));
        setAuth(true);
        if (data.user.role === 'admin') {
          navigate("/admin");
        } else {
          navigate("/cards");
        }
      } else {
        alert(data.msg || "Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
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

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-2xl shadow-xl text-sm font-bold text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transform active:scale-[0.98] transition-all duration-300 shadow-gray-200/50"
              >
                Sign In
              </button>
            </div>

            <div className="text-center mt-6">
              <p className="text-sm text-gray-600 font-medium">
                New to Applifix?{' '}
                <button
                  type="button"
                  onClick={() => navigate("/register")}
                  className="text-black font-bold hover:text-gray-700 underline underline-offset-4 transition-colors"
                >
                  Create an account
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
