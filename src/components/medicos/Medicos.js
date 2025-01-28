import React, { useState } from "react";

const doctors = [
  {
    id: 1,
    name: "Dr. Juan Carlos Ramirez",
    image: "/drs/dr1.jpg",
    specialization: "Cirujano Plástico",
    info: "El Dr. Juan Pérez es un destacado cirujano plástico, especializado en procedimientos estéticos faciales y corporales. Es profesor y miembro activo de la Sociedad de Cirugía Estética de Colombia, lo que refleja su compromiso con la formación continua y su liderazgo en el ámbito de la cirugía estética.",
    yearsExperience: 15,
    message:
      "Creo que todos merecen sentirse bien con quienes son. Estoy aquí para ayudarte a resaltar lo mejor de ti.",
  },
  {
    id: 2,
    name: "Dra. Diana Carrillo",
    image: "/drs/dr2.webp",
    specialization: "Médico Cirujano",
    info: "La Dra. Diana Esperanza Carrillo es médica con más de 15 años de experiencia como funcionaria pública. Con estudios en medicina estética, para brindar tratamientos innovadores que mejoran la salud y el bienestar de sus pacientes.",
    yearsExperience: 15,
    message:
      "Mi misión es ayudarte a sentirte bien contigo mismo, porque cuando te cuidas, tu confianza crece.",
  },
];

export default function Doctors() {
  const [hoveredDoctor, setHoveredDoctor] = useState(null);

  return (
    <div className="h-screen relative bg-[#FAFAFA]">
      <div className="h-1/6 w-full flex items-end justify-center">
        <h1 className="font-sans text-4xl tracking-wide text-center font-bold">
          Equipo Medico
        </h1>
      </div>
      <div className="w-full h-5/6 flex flex-row justify-evenly items-center p-8 space-x-4">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="w-1/3 h-full relative flex flex-col rounded-md overflow-hidden shadow-lg cursor-pointer"
            onMouseEnter={() => setHoveredDoctor(doctor.id)}
            onMouseLeave={() => setHoveredDoctor(null)}
          >
            {/* Image and Gradient Overlay */}
            <div className="h-full w-full bg-red-300 relative">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="w-full h-full absolute top-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
              {/* Basic Info */}
              <div className="w-full h-full absolute top-0 flex flex-col space-y-2 justify-end p-8 text-white">
                <h2 className="text-2xl font-bold tracking-wide font-sans">
                  {doctor.name}
                </h2>
                <h3 className="text-xl font-medium tracking-wide font-serif">
                  {doctor.specialization}
                </h3>
              </div>
            </div>
            {/* Detailed Info */}
            <div
              className={`absolute inset-0 bg-white flex flex-col p-8 transition-opacity duration-500 ${
                hoveredDoctor === doctor.id ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Image on the Left */}
              <div className="flex-shrink-0 w-1/3 h-auto pr-4">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-contain rounded-lg shadow-md"
                />
              </div>
              {/* Text Info */}
              <div className="flex-grow flex flex-col justify-center space-y-4">
                <span className="text-lg text-gray-700 font-semibold font-serif">
                  {doctor.specialization}
                </span>
                <h1 className="text-3xl font-bold text-gray-900 font-sans">
                  {doctor.name}
                </h1>
                <p className="text-gray-700 text-base font-serif">
                  {doctor.info}
                </p>
                <p className="text-xl font-medium italic text-gray-600 font-sans">
                  "{doctor.message}"
                </p>
                <div className="flex flex-col items-start">
                  <span className="text-6xl font-bold text-gray-800 font-sans">
                    {doctor.yearsExperience}+
                  </span>
                  <span className="text-gray-600 text-sm font-serif">
                    Años de Experiencia
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
