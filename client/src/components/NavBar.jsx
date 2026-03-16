import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaHome, FaPhoneAlt, FaSignOutAlt, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa6";
import UserContext from "../context/UserContext";

// Helper components for cleaner code
const NavLink = ({ to, icon, label, onClick }) => (
  <Link
    to={to || "/"}
    onClick={onClick}
    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-50 rounded-xl transition-all duration-200"
  >
    <span className="text-lg">{icon}</span>
    {label}
  </Link>
);

const NavBar = () => {
  const { auth, setAuth } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const user = (() => {
    try {
      const saved = localStorage.getItem("currentUser");
      if (!saved) return null;
      return JSON.parse(saved);
    } catch (e) {
      console.error("User data parsing error:", e);
      return null;
    }
  })();

  const handleScrollToTop = (e) => {
    // Check if we are already on the home page
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isActive");
    localStorage.removeItem("currentUser");
    setAuth(false);
    navigate("/");
  };



  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm px-6 py-3 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          onClick={handleScrollToTop}
          className="flex items-center gap-2 group"
        >
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

        {/* Navigation Links (Desktop) */}
        <div className="flex items-center gap-2 lg:gap-6 ml-4">
          <div className="hidden md:flex items-center gap-1">
            <NavLink to="/" icon={<FaHome />} label="Home" onClick={handleScrollToTop} />
            <NavLink to="/about" icon={<FaCalendarCheck />} label="About" />
            <NavLink to="/contact" icon={<FaPhoneAlt />} label="Contact" />
            {auth && <NavLink to="/cards" icon={<FaCalendarCheck />} label="Book a Service" />}
          </div>

          <div className="h-6 w-px bg-gray-200 mx-2 hidden md:block"></div>

          {/* Theme Toggle & Auth (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            {auth ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                    <FaUser className="text-white text-xs" />
                  </div>
                  <span className="text-sm font-bold text-gray-900">
                    {user?.name || "User"}
                  </span>
                </div>
                
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200"
                >
                  <FaSignOutAlt className="text-lg" />
                  <span className="hidden sm:block">Logout</span>
                </button>
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

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600 hover:text-black transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Overlay) */}
      {isMenuOpen && (
        <div className="md:hidden pt-4 pb-6 space-y-4 border-t border-gray-100 mt-3 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-2 space-y-1">
            <NavLink to="/" icon={<FaHome />} label="Home" onClick={(e) => { handleScrollToTop(e); setIsMenuOpen(false); }} />
            <NavLink to="/about" icon={<FaCalendarCheck />} label="About" onClick={() => setIsMenuOpen(false)} />
            <NavLink to="/contact" icon={<FaPhoneAlt />} label="Contact" onClick={() => setIsMenuOpen(false)} />
            {auth && <NavLink to="/cards" icon={<FaCalendarCheck />} label="Book a Service" onClick={() => setIsMenuOpen(false)} />}
          </div>
          
          <div className="px-4 pt-4 border-t border-gray-100">
            {auth ? (
              <div className="space-y-4">
                <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                    <FaUser className="text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 font-medium">Logged in as</span>
                    <span className="text-sm font-extrabold text-gray-900">{user?.name || "User"}</span>
                  </div>
                </div>
                <button
                  onClick={() => { handleLogout(); setIsMenuOpen(false); }}
                  className="w-full flex items-center justify-center gap-3 px-6 py-3.5 text-sm font-bold text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition-all duration-200"
                >
                  <FaSignOutAlt className="text-lg" />
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="w-full flex items-center justify-center px-6 py-3.5 bg-gray-900 text-white text-sm font-bold rounded-xl hover:bg-gray-800 shadow-lg shadow-gray-200 active:scale-95 transition-all duration-200"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};





export default NavBar;
