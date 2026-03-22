import React from "react";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="bg-[#140021] text-white scroll-smooth">
      <Navbar />

      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;