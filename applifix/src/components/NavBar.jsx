import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaHome, FaInfoCircle, FaPhoneAlt, FaUserCircle, FaSignOutAlt, FaCog, FaUser } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa6";
import { FiSun, FiMoon } from "react-icons/fi";
import UserContext from "../context/UserContext";

const NavBar = () => {
  const { auth, setAuth } = useContext(UserContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("isActive");
    localStorage.removeItem("currentUser");
    setAuth(false);
    setIsDropdownOpen(false);
    navigate("/login");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center shadow-lg shadow-gray-200 group-hover:scale-105 transition-transform duration-200">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            Applifix
          </h1>
        </Link>

        {/* Search Bar */}
        <div className="hidden md:ml-8 md:flex flex-1 max-w-md relative group">
          <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl group-focus-within:text-black transition-colors" />
          <input
            type="search"
            placeholder="Search products..."
            className="w-full pl-12 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black focus:bg-white transition-all duration-200 text-sm"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-2 lg:gap-6 ml-4">
          <div className="hidden lg:flex items-center gap-1">
            <NavLink to="/" icon={<FaHome />} label="Home" />
            <NavLink to="/about" icon={<FaCalendarCheck />} label="About" />
            <NavLink to="/contact" icon={<FaPhoneAlt />} label="Contact" />
          </div>

          <div className="h-6 w-px bg-gray-200 mx-2 lg:block hidden"></div>

          {/* Theme Toggle & Auth */}
          <div className="flex items-center gap-4">
            <button className="p-2.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200">
              <FiSun className="text-xl" />
            </button>

            {auth ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-3 p-1.5 pr-3 hover:bg-gray-100 rounded-full transition-all duration-200 border border-transparent hover:border-gray-200"
                >
                  <div className="w-9 h-9 bg-gradient-to-tr from-gray-100 to-gray-200 rounded-full flex items-center justify-center border border-gray-300 shadow-sm overflow-hidden">
                    {user?.avatar ? (
                      <img src={user.avatar} alt="Avatar" className="w-full h-full object-cover" />
                    ) : (
                      <FaUser className="text-gray-400" />
                    )}
                  </div>
                  <span className="hidden sm:block text-sm font-semibold text-gray-700">
                    {user?.name || "User"}
                  </span>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="px-4 py-3 border-b border-gray-50 mb-1">
                      <p className="text-sm font-semibold text-gray-900">{user?.name}</p>
                      <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                    </div>

                    <DropdownLink to="/profile" icon={<FaUserCircle />} label="My Profile" />
                    <DropdownLink to="/settings" icon={<FaCog />} label="Settings" />

                    <div className="h-px bg-gray-50 my-1 mx-2"></div>

                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <FaSignOutAlt className="text-lg" />
                      <span className="font-medium">Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="px-6 py-2.5 bg-gray-900 text-white text-sm font-bold rounded-xl hover:bg-gray-800 shadow-lg shadow-gray-200 active:scale-95 transition-all duration-200"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

// Helper components for cleaner code
const NavLink = ({ to, icon, label }) => (
  <Link
    to={to}
    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-50 rounded-xl transition-all duration-200"
  >
    <span className="text-lg">{icon}</span>
    {label}
  </Link>
);

const DropdownLink = ({ to, icon, label }) => (
  <Link
    to={to}
    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
  >
    <span className="text-lg text-gray-400">{icon}</span>
    <span className="font-medium">{label}</span>
  </Link>
);

export default NavBar;
