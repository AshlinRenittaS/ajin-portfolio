import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const navLink =
  "inline-block transition-all duration-300 hover:-translate-y-1 hover:text-purple-500";

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    setDark(!dark);
  };

  const handleNavClick = (id) => {
    setIsOpen(false);
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md 
    text-black dark:text-white transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-3xl font-semibold">
          Ajin<span className="text-purple-500">.</span>
        </h1>

        {/* Desktop */}
<ul className="hidden md:flex items-center gap-8 px-8 py-4 
border border-black/20 dark:border-white/20 rounded-full">

  <li><a href="#home" className={navLink}>Home</a></li>
  <li><a href="#about" className={navLink}>About me</a></li>
  <li><a href="#services" className={navLink}>Roles</a></li>
  <li><a href="#projects" className={navLink}>My Work</a></li>
  <li><a href="#contact" className={navLink}>Contact me</a></li>

</ul>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full 
            border border-black/20 dark:border-white/20"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full 
            border border-black/20 dark:border-white/20"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>

          <button onClick={() => setIsOpen(true)}>
            <FaBars size={22} />
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* ✅ FIXED MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-screen w-3/4 max-w-sm 
        bg-white dark:bg-[#2a0040]   /* ✅ BACKGROUND FIX */
        text-black dark:text-white  /* ✅ TEXT FIX */
        transform transition-transform duration-500 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <FaTimes
            size={24}
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <div className="flex flex-col items-start gap-8 px-10 text-lg pt-6">
          <button onClick={() => handleNavClick("home")} className="hover:text-purple-400">
            Home
          </button>
          <button onClick={() => handleNavClick("about")} className="hover:text-purple-400">
            About me
          </button>
          <button onClick={() => handleNavClick("services")} className="hover:text-purple-400">
            Roles
          </button>
          <button onClick={() => handleNavClick("projects")} className="hover:text-purple-400">
            My Projects
          </button>
          <button onClick={() => handleNavClick("contact")} className="hover:text-purple-400">
            Contact me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;