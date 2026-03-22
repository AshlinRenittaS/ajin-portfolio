import { useState } from "react";
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

        <h1 className="text-xl font-semibold">Ajin<span className="text-purple-500">.</span></h1>

        <ul className="hidden md:flex items-center gap-8 px-8 py-2 border border-white/20 rounded-full">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">My Work</a></li>
          <li><a href="#contact">Contact me</a></li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <button onClick={toggleTheme} className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20">
            {dark ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)}><FaBars size={22} /></button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-[#2a0040] transform transition-transform duration-500 ease-in-out z-50 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-end p-6">
          <FaTimes size={24} className="cursor-pointer" onClick={() => setIsOpen(false)} />
        </div>

        <div className="flex flex-col items-start gap-8 px-10 text-lg bg-[#2a0040] border-b-2 border-slate-800">
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>My Work</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact me</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;