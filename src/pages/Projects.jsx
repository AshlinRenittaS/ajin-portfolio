import React, { useState } from "react";

import sobhaDubai from "../assets/images/sobhaDubai.jpg";
import totalEnv from "../assets/images/totalEnv.jpg";
import brigade from "../assets/images/brigade.jpg";
import sobhaBlr from "../assets/images/SobhaBangalore.jpg";
import lnt from "../assets/images/LtConstruction.webp";

const projectsData = [
  {
    title: "Sobha Construction",
    subtitle: "High-End Residential & Commercial",
    location: "Dubai, UAE (2025 – Present)",
    img: sobhaDubai,
    scope:
      "Leading planning for 110 luxury villas, beachfront properties, and high-rise commercial buildings.",
    achievement:
      "Implementing risk management and delay analysis strategies while managing authority inspections.",
  },
  {
    title: "Total Environment",
    subtitle: "Over the Rainbow & Suntikoppa",
    location: "Bangalore, India (2024 – 2025)",
    img: totalEnv,
    scope:
      "Managed planning for villa developments across 30 and 75 acres and projects in Goa.",
    achievement:
      "Established CPMO workflows and sprint dashboards for tracking.",
  },
  {
    title: "Brigade Enterprises",
    subtitle: "Brigade Horizon",
    location: "Bangalore, India (2022 – 2024)",
    img: brigade,
    scope:
      "Apartment project spanning 4.65 Lakhs Sq.ft across 18 blocks.",
    achievement:
      "Developed budgets and handled procurement via SAP.",
  },
  {
    title: "Sobha Limited",
    subtitle: "Sobha Royal Pavilion",
    location: "Bangalore, India (2021 – 2022)",
    img: sobhaBlr,
    scope:
      "Luxury development of 22.25 Lakhs Sq.ft with 16 towers.",
    achievement:
      "Managed logistics, phasing, and asset tracking.",
  },
  {
    title: "Larsen & Toubro",
    subtitle: "Tirunelveli Sewerage Scheme",
    location: "Tamil Nadu, India (2019 – 2021)",
    img: lnt,
    scope:
      "Large-scale municipal infrastructure project.",
    achievement:
      "Managed machinery assets and municipal coordination.",
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const visibleProjects = showAll
    ? projectsData
    : projectsData.slice(0, 3);

  return (
    <section id="projects" className="bg-[#14001f] text-white py-24 px-6 md:px-20">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold mt-2">
          My Projects
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm">
          Explore a collection of projects showcasing my experience in planning and execution.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className="relative rounded-xl overflow-hidden cursor-pointer group"
          >
            {/* Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-[280px] object-cover group-hover:scale-105 transition duration-300"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Bottom Card */}
            <div className="absolute bottom-4 left-4 right-4 bg-white text-black rounded-lg px-4 py-3 flex justify-between items-center">
              <div>
                <h3 className="text-sm font-semibold">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-600">
                  {project.subtitle}
                </p>
              </div>

              <div className="w-8 h-8 flex items-center justify-center border rounded-full">
                ➜
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Less */}
      <div className="text-center mt-12">
        <button
          onClick={() => setShowAll(!showAll)}
          className="border border-white/20 px-6 py-2 rounded-full hover:border-purple-500 hover:text-purple-400 transition"
        >
          {showAll ? "Show less ←" : "Show more →"}
        </button>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#1c002b] rounded-xl p-8 max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-semibold mb-2">
              {selectedProject.title}
            </h2>

            <p className="text-purple-400 mb-2">
              {selectedProject.subtitle}
            </p>

            <p className="text-sm text-gray-400 mb-4">
              {selectedProject.location}
            </p>

            <div className="mb-4">
              <h4 className="font-semibold mb-1">Scope:</h4>
              <p className="text-gray-300 text-sm">
                {selectedProject.scope}
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">
                Key Achievement:
              </h4>
              <p className="text-gray-300 text-sm">
                {selectedProject.achievement}
              </p>
            </div>

            <button
              onClick={() => setSelectedProject(null)}
              className="mt-6 bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;