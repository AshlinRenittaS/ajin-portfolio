import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          Ajin
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-black">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-black">About</Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-black">Services</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-black">Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-black">Contact</Link>
          </li>
        </ul>

        {/* Resume Button */}
        <button className="hidden md:block bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800">
          Resume
        </button>

        {/* Mobile Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-4 shadow-md">
          <Link to="/" onClick={() => setIsOpen(false)} className="block">
            Home
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block">
            About
          </Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="block">
            Services
          </Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="block">
            Projects
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block">
            Contact
          </Link>

          <button className="w-full bg-black text-white py-2 rounded-full">
            Resume
          </button>
        </div>
      )}
    </nav>
  );
}