import React from "react";
import profile from "../assets/profile-image.png";

const Home = () => {
  return (
    <section className="min-h-screen  bg-[#140021] text-white flex flex-col items-center justify-center text-center px-6">
      
      <img
        src={profile}
        alt="Ajin"
        className="w-40 h-40 rounded-full object-cover mb-6"
      />

      <p className="text-gray-300 mb-3">
        Hi! I'm Ajin 👋
      </p>

      <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">
        Planning Engineer <br />
         EPC Projects Specialist
      </h1>

      <p className="text-gray-400 max-w-2xl mb-8">
        Detail-oriented Planning Engineer skilled in Primavera P6, Time and Cost Control,
         Budgeting and Schedule Optimization,  Budgeting and Schedule Optimization and EVM & KPI Reports
      </p>

      <div className="flex gap-4">
        <button className="bg-gradient-to-r from-purple-500 to-orange-400 px-6 py-3 rounded-full">
          contact me →
        </button>

        <button className="border border-white/30 px-6 py-3 rounded-full">
          my resume ↓
        </button>
      </div>
    </section>
  );
};

export default Home;