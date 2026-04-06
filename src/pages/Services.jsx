import React, { useState } from "react";

const servicesData = [
  {
    title: "Strategic Project Scheduling",
    short:
      "I develop comprehensive baseline schedules for large-scale developments...",
    full: `I develop comprehensive baseline schedules for large-scale developments using industry-leading tools like Primavera P6, ASTA Powerproject, and MS Project. My approach ensures every phase—from design to handover—is mapped for maximum efficiency.`,
  },
  {
    title: "Project Controls & Cost Management",
    short:
      "I specialize in maintaining project health through cost tracking...",
    full: `I specialize in maintaining project health through rigorous cost tracking, revenue metric monitoring, and cash flow projection. By aligning operational performance with business targets, I ensure high-end projects remain profitable and within budget.`,
  },
  {
    title: "Regulatory & Authority Liaison",
    short:
      "Navigating complex regulatory landscapes is a core strength...",
    full: `Navigating complex regulatory landscapes is a core strength. I manage end-to-end documentation and approvals for major bodies, including Dubai Municipality, DEWA, RERA, and BCC.`,
  },
  {
    title: "Resource & Procurement Optimization",
    short:
      "Using SAP and ERP systems, I manage procurement and resources...",
    full: `Using SAP and ERP systems, I manage the lifecycle of material procurement and labor allocation, ensuring efficient supply chain and execution.`,
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="text-white py-24 px-6 md:px-20">
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-sm text-gray-400">What I offer</p>
        <h2 className="text-4xl md:text-5xl font-semibold mt-2">
          My Roles
        </h2>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="border border-white/10 rounded-xl p-6 
            transition-all duration-300 
            hover:-translate-y-2 hover:border-purple-500 
            hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
          >
            <h3 className="text-lg font-semibold mb-3">
              {service.title}
            </h3>

            <p className="text-sm text-gray-400 mb-4">
              {service.short}
            </p>

            <button
              onClick={() => setSelectedService(service)}
              className="text-pink-400 text-sm hover:underline"
            >
              Read more →
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          
          <div className="bg-[#1c002b] rounded-xl p-8 max-w-lg w-full relative">
            
            <h2 className="text-2xl font-semibold mb-4">
              {selectedService.title}
            </h2>

            <p className="text-gray-300 leading-relaxed">
              {selectedService.full}
            </p>

            <button
              onClick={() => setSelectedService(null)}
              className="mt-6 bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-lg"
            >
              Close
            </button>

          </div>

          {/* Click outside to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={() => setSelectedService(null)}
          ></div>
        </div>
      )}
    </section>
  );
};

export default Services;