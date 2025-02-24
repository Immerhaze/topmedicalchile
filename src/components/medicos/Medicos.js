import React, { useState, useRef, useEffect } from "react";

const doctors = [
  {
    id: 2,
    name: "Dra. Diana Carrillo",
    image: "/drs/dr2.png",
    specialization: "Médico Cirujano",
    info: "La Dra. Diana Esperanza Carrillo es médica con más de 15 años de experiencia como funcionaria pública. Con estudios en medicina estética, para brindar tratamientos innovadores que mejoran la salud y el bienestar de sus pacientes.",
    yearsExperience: 15,
    message:
      "Mi misión es ayudarte a sentirte bien contigo mismo, porque cuando te cuidas, tu confianza crece.",
  },
  {
    id: 1,
    name: "Dr. Juan Carlos Ramirez",
    image: "/drs/dr1.png",
    specialization: "Cirujano Plástico",
    info: "El Dr. Juan Pérez es un destacado cirujano plástico, especializado en procedimientos estéticos faciales y corporales. Es profesor y miembro activo de la Sociedad de Cirugía Estética de Colombia, lo que refleja su compromiso con la formación continua y su liderazgo en el ámbito de la cirugía estética.",
    yearsExperience: 10,
    message:
      "Creo que todos merecen sentirse bien con quienes son. Estoy aquí para ayudarte a resaltar lo mejor de ti.",
  },
];

export default function Doctors() {
  const [visible, setVisible] = useState(false);
  const parentRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      if (!parentRef.current) return;
      const rect = parentRef.current.getBoundingClientRect();
      const middleScreen = window.innerHeight / 2;
      setVisible(rect.top <= middleScreen);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={parentRef}
      id="medicos"
      className="min-h-screen w-full flex flex-col bg-[#fafafa] my-8"
    >
      {/* Title Section (1/6 height) */}
      <div className="h-1/6 flex justify-center items-center relative p-4">
        <h1 className="absolute -top-5 text-6xl text-nowrap font-bold uppercase text-blueish/10">
          EQUIPO MEDICO
        </h1>
        <h1
          className={`text-3xl md:text-5xl  font-semibold uppercase text-center text-blueish transition-all duration-500 ${
            visible ? "animate-fade-in-down" : "animate-fade-out-up"
          }`}
        >
          EQUIPO MEDICO
        </h1>
      </div>

      {/* Doctors Section (5/6 height) */}
      <div className="h-5/6 flex flex-col lg:mt-10 lg:flex-row gap-6 px-4 md:px-8">
        {doctors.map((doc) => (
          <div key={doc.id} className="w-full lg:w-1/2 h-full relative flex">
            {/* Doctor Image */}
            <img
              src={doc.image}
              alt={doc.name}
              className="h-full w-full object-cover object-top rounded-lg shadow-md"
            />

            {/* Overlay with Doctor Info */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex flex-col justify-end  space-y-4 p-4 md:p-8 text-white transition-opacity">
              <h2 className="text-xl md:text-3xl   font-bold">{doc.name}</h2>
              <h3 className="text-lg md:text-2xl  ">{doc.specialization}</h3>
              <p className="hidden md:block text-lg md:text-xl italic">
                "{doc.message}"
              </p>
              <div className="mt-4">
                <a
                  href="/medicos"
                  className="relative inline-flex items-center px-4 py-2 md:px-6 md:py-3 font-bold text-white bg-blueish/80 hover:bg-white hover:text-black border-2 border-white rounded-lg transition-all"
                >
                  <span className="text-lg md:text-xl lg:text-2xl xl:text-2xl ">
                    Más info
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
