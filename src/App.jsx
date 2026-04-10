import React, { useEffect } from "react";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {

  // Default theme (dark)
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div
      className="bg-white text-black 
      dark:bg-[#140021] dark:text-white 
      scroll-smooth transition-colors duration-300"
    >
      <Navbar />

      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"   // matches your dark UI 🔥
      />
    </div>
  );
};

export default App;