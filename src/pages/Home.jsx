import React from "react";
import profile from "../assets/profile-image.png";

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28">
      <img src={profile} alt="Ajin" className="w-40 h-40 rounded-full object-cover mb-6" />

      <p className="text-gray-300 mb-3">Hi! I'm Ajin 👋</p>

      <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">Planning Engineer</h1>

      <p className="text-gray-400 max-w-2xl mb-8">
        I am a Planning Engineer with expertise in Primavera P6, specializing in time and cost control for EPC projects. I have strong experience in budgeting, schedule optimization, and preparing EVM and KPI reports.
      </p>

      <div className="flex gap-4">
        <a href="#contact" className="bg-gradient-to-r from-purple-500 to-orange-400 px-6 py-3 rounded-full">Contact Me →</a>
        <a href="/" className="border border-white/30 px-6 py-3 rounded-full">My Resume ↓</a>
      </div>
    </section>
  );
};

export default Home;