import React from "react";
import aboutImg from "../assets/profile-image.png";
import primaveraImg from "../assets/icons/primaveraP6.jpeg";
import excelImg from "../assets/icons/microsoftExcel.jpeg";
import powerbiImg from "../assets/icons/microsoftPowerBI.jpeg";
import autocadImg from "../assets/icons/autoCAD.jpeg";

const About = () => {
  const tools = [
    { img: primaveraImg, name: "Primavera P6" },
    { img: excelImg, name: "Excel" },
    { img: powerbiImg, name: "Power BI" },
    { img: autocadImg, name: "AutoCAD" },
  ];

  return (
    <section id="about" className="text-white pt-28 pb-24">
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

              {/* Rotating Badge */}
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
                          PLANNING ENGINEER
                        </textPath>
                      </text>
                    </svg>
                  </div>

                  <div className="text-lg">👨‍💻</div>

                </div>
              </div>

            </div>
          </div>

          {/* Content */}
          <div className="max-w-lg lg:ml-20 md:ml-10 text-center md:text-left">

            <p className="text-gray-400 mb-10 leading-relaxed text-[14px]">
              I am a Planning Engineer with strong experience in EPC and
              infrastructure projects. Skilled in Primavera P6, scheduling,
              cost control, and project monitoring. I focus on optimizing
              resources, improving efficiency, and ensuring projects are
              delivered on time.
            </p>

            {/* Cards */}
            <div className="grid sm:grid-cols-3 gap-4 mb-10">

              <div className="border border-white/10 rounded-xl p-5 hover:border-purple-500 hover:-translate-y-2 transition-all">
                <h3 className="text-sm font-medium mb-1">Tools</h3>
                <p className="text-xs text-gray-400">
                  Primavera P6, MS Project, Excel
                </p>
              </div>

              <div className="border border-white/10 rounded-xl p-5 hover:border-purple-500 hover:-translate-y-2 transition-all">
                <h3 className="text-sm font-medium mb-1">Education</h3>
                <p className="text-xs text-gray-400">
                  M.E Civil Engineering
                </p>
              </div>

              <div className="border border-white/10 rounded-xl p-5 hover:border-purple-500 hover:-translate-y-2 transition-all">
                <h3 className="text-sm font-medium mb-1">Projects</h3>
                <p className="text-xs text-gray-400">
                  EPC & Infrastructure Projects
                </p>
              </div>

            </div>
            
            <div>
              <p className="text-gray-400 mb-4 text-sm">Tools I use</p>

              <div className="flex gap-3 flex-wrap justify-center md:justify-start">
                {tools.map((tool, i) => (
                  <div
                    key={i}
                    title={tool.name}
                    className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-lg p-2 transition-all duration-300 hover:border-purple-500 hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(168,85,247,0.4)]"
                  >
                    <img
                      src={tool.img}
                      alt={tool.name}
                      className="w-full h-full object-contain"
                    />
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