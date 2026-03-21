import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#140021]/90 backdrop-blur-md text-white">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <h1 className="text-xl font-semibold">
          Ajin<span className="text-purple-500">.</span>
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 px-8 py-2 border border-white/20 rounded-full">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About me</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/projects">My Work</Link></li>
          <li><Link to="/contact">Contact me</Link></li>
        </ul>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>

          <button className="px-5 py-2 border border-white/20 rounded-full">
            Contact →
          </button>
        </div>

        {/* MOBILE ICON */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)}>
            <FaBars size={22} />
          </button>
        </div>
      </div>

      {/* 🔥 OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-[#2a0040] transform transition-transform duration-500 ease-in-out z-50
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        
        <div className="flex justify-end p-6">
          <FaTimes
            size={24}
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <div className="flex flex-col items-start gap-8 px-10 text-lg bg-[#2a0040]">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About me</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>My Work</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact me</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;