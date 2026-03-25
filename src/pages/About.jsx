import React from "react";
import {
  FaCode,
  FaGraduationCap,
  FaBriefcase,
  FaChartLine,
  FaProjectDiagram,
  FaFileExcel,
  FaDraftingCompass,
} from "react-icons/fa";

import aboutImg from "../assets/profile-image.png";

const About = () => {
  return (
    <section id="about" className="text-white pt-28 pb-24 overflow-visible">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold">
            About me
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6">

          <div className="flex justify-center items-center mb-6 md:mb-0">
            <div className="relative w-[260px] h-[380px]">

              <img
                src={aboutImg}
                alt="about"
                className="w-full h-full object-cover rounded-3xl"
              />

              <div className="absolute bottom-[-25px] right-[-25px] w-[130px] h-[130px]">

                <div className="relative w-full h-full rounded-full bg-white flex items-center justify-center shadow-lg">

                  <div className="absolute w-full h-full animate-[spin_18s_linear_infinite]">
                    <svg viewBox="0 0 200 200" className="w-full h-full">

                      <defs>
                        <path
                          id="circlePath"
                          d="
                            M 100,100
                            m -65,0
                            a 65,65 0 1,1 130,0
                            a 65,65 0 1,1 -130,0
                          "
                        />
                      </defs>

                      <text
                        fill="#444"
                        fontSize="20"
                        fontWeight="600"
                        letterSpacing="7"
                      >
                        <textPath
                          href="#circlePath"
                          startOffset="50%"
                          textAnchor="middle"
                        >
                          PLANNING  ENGINEER
                        </textPath>
                      </text>

                    </svg>
                  </div>

                  <div className="text-lg">👷‍♂️</div>

                </div>
              </div>

            </div>
          </div>

          <div className="max-w-lg lg:ml-20 md:ml-10 text-center md:text-left">

            <p className="text-gray-400 mb-10 leading-relaxed text-[14px]">
              I am a Planning Engineer with strong experience in EPC and
              infrastructure projects. Skilled in Primavera P6, scheduling,
              cost control, and project monitoring. I focus on optimizing
              resources, improving efficiency, and ensuring projects are
              delivered on time.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-10">

              <div className="group border border-white/10 rounded-xl p-5 transition-all duration-300 hover:border-purple-500 hover:-translate-y-2 hover:shadow-[0_0_18px_rgba(168,85,247,0.3)]">
                <FaCode className="mb-3 text-gray-300 group-hover:text-purple-400" />
                <h3 className="text-sm font-medium mb-1">Tools</h3>
                <p className="text-xs text-gray-400">
                  Primavera P6, MS Project, Excel
                </p>
              </div>

              <div className="group border border-white/10 rounded-xl p-5 transition-all duration-300 hover:border-purple-500 hover:-translate-y-2 hover:shadow-[0_0_18px_rgba(168,85,247,0.3)]">
                <FaGraduationCap className="mb-3 text-gray-300 group-hover:text-purple-400" />
                <h3 className="text-sm font-medium mb-1">Education</h3>
                <p className="text-xs text-gray-400">
                  M.E Civil Engineering
                </p>
              </div>

              <div className="group border border-white/10 rounded-xl p-5 transition-all duration-300 hover:border-purple-500 hover:-translate-y-2 hover:shadow-[0_0_18px_rgba(168,85,247,0.3)]">
                <FaBriefcase className="mb-3 text-gray-300 group-hover:text-purple-400" />
                <h3 className="text-sm font-medium mb-1">Projects</h3>
                <p className="text-xs text-gray-400">
                  EPC & Infrastructure Projects
                </p>
              </div>

            </div>

            <div>
              <p className="text-gray-400 mb-4 text-sm">Tools I use</p>

              <div className="flex gap-3 flex-wrap justify-center">
                {[ 
                  { icon: <FaProjectDiagram />, color: "text-orange-400" },
                  { icon: <FaProjectDiagram />, color: "text-green-500" },
                  { icon: <FaFileExcel />, color: "text-green-600" },
                  { icon: <FaChartLine />, color: "text-yellow-400" },
                  { icon: <FaDraftingCompass />, color: "text-red-500" },
                ].map((tool, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-lg transition-all duration-300 hover:border-purple-500 hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(168,85,247,0.4)]"
                  >
                    <span className={`${tool.color} text-lg`}>
                      {tool.icon}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;