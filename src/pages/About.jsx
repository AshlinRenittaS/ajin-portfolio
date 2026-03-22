import React from "react";
import { FaCode, FaGraduationCap, FaBriefcase, FaProjectDiagram, FaFileExcel, FaChartLine, FaDraftingCompass } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="bg-[#140021] text-white pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold tracking-wide mb-6">INTRODUCTION</h2>
          <p className="text-gray-400 mt-4 text-lg max-w-3xl mx-auto leading-relaxed">
            I am a Planning Engineer with expertise in EPC and infrastructure projects. 
            I specialize in project planning, scheduling, cost control, and resource optimization.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-10 text-center">
          <div className="group border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-purple-500 hover:-translate-y-2 hover:shadow-[0_0_18px_rgba(168,85,247,0.3)]">
            <FaCode className="mb-3 text-gray-300 group-hover:text-purple-400 text-2xl mx-auto" />
            <h4 className="text-sm font-medium mb-1">Tools</h4>
            <p className="text-xs text-gray-400">Primavera P6, MS Project, Excel</p>
          </div>

          <div className="group border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-purple-500 hover:-translate-y-2 hover:shadow-[0_0_18px_rgba(168,85,247,0.3)]">
            <FaGraduationCap className="mb-3 text-gray-300 group-hover:text-purple-400 text-2xl mx-auto" />
            <h4 className="text-sm font-medium mb-1">Education</h4>
            <p className="text-xs text-gray-400">M.E Civil Engineering</p>
          </div>

          <div className="group border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-purple-500 hover:-translate-y-2 hover:shadow-[0_0_18px_rgba(168,85,247,0.3)]">
            <FaBriefcase className="mb-3 text-gray-300 group-hover:text-purple-400 text-2xl mx-auto" />
            <h4 className="text-sm font-medium mb-1">Projects</h4>
            <p className="text-xs text-gray-400">EPC & Infrastructure Projects</p>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-white text-lg font-semibold mb-4">Tools I Use</h3>
          <div className="flex gap-4 justify-center flex-wrap">
            {[
              { icon: <FaProjectDiagram />, color: "text-orange-400" },
              { icon: <FaProjectDiagram />, color: "text-green-500" },
              { icon: <FaFileExcel />, color: "text-green-600" },
              { icon: <FaChartLine />, color: "text-yellow-400" },
              { icon: <FaDraftingCompass />, color: "text-red-500" },
            ].map((tool, i) => (
              <div
                key={i}
                className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-lg transition-all duration-300 hover:border-purple-500 hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(168,85,247,0.4)]"
              >
                <span className={`${tool.color} text-2xl`}>{tool.icon}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;