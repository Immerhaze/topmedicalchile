import React, { useState, useRef, useEffect, Component } from "react";

const doctors = [
  {
    id: 1,
    name: "Dr. Juan Carlos Ramirez",
    image: "/drs/dr1.jpg",
    specialization: "Cirujano Plástico",
    info: "El Dr. Juan Pérez es un destacado cirujano plástico, especializado en procedimientos estéticos faciales y corporales. Es profesor y miembro activo de la Sociedad de Cirugía Estética de Colombia, lo que refleja su compromiso con la formación continua y su liderazgo en el ámbito de la cirugía estética.",
    yearsExperience: 10,
    message:
      "Creo que todos merecen sentirse bien con quienes son. Estoy aquí para ayudarte a resaltar lo mejor de ti.",
  },
  {
    id: 2,
    name: "Dra. Diana Carrillo",
    image: "/drs/dr2.jpg",
    specialization: "Médico Cirujano",
    info: "La Dra. Diana Esperanza Carrillo es médica con más de 15 años de experiencia como funcionaria pública. Con estudios en medicina estética, para brindar tratamientos innovadores que mejoran la salud y el bienestar de sus pacientes.",
    yearsExperience: 15,
    message:
      "Mi misión es ayudarte a sentirte bien contigo mismo, porque cuando te cuidas, tu confianza crece.",
  },
];

export default function Doctors() {
  const [visible1, setvisible1] = useState(false);
  const parentdiv = useRef(null);

  useEffect(() => {
    function handleScroll() {
      if (!parentdiv.current) return;
      const rect = parentdiv.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const middleScreen = windowHeight / 2;
      const componentTop = rect.top;
      const componentMiddle = rect.top + rect.height / 2;

      // Calculate blur effect
      if (componentTop <= middleScreen) {
        setvisible1(true);
      } else {
        setvisible1(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={parentdiv} className="h-screen  bg-[#fafafa] py-8">
      <div
        className={`w-full h-full bg-blueish flex flex-col py-8   overflow-hidden`}
      >
        <div className="w-full  h-1/6 bg-blueish/70 relative flex justify-center items-center">
          <span className="absolute top-0 text-7xl md:text-9xl font-sans uppercase whitespace-nowrap font-bold text-white/10">
            <h1>EQUIPO MEDICO</h1>
          </span>
          <h1
            className={`text-3xl md:text-6xl font-sans font-semibold uppercase text-center text-white ${
              visible1 ? "animate-fade-in-down" : "animate-fade-out-up"
            }`}
          >
            EQUIPO MEDICO
          </h1>
        </div>
        <div className="w-full h-full flex flex-col p-4 space-y-4  overflow-hidden">
          {doctors.map((doc, index) => (
            <div key={index} className={`w-full h-1/2 flex flex-row `}>
              <div
                className={`w-1/2 md:w-1/3 h-2/3 bg-white overflow-hidden  ${
                  index == 0
                    ? "rounded-tr-lg rounded-bl-lg"
                    : "rounded-tl-lg rounded-br-lg"
                }`}
              >
                <img
                  src={doc.image}
                  alt={doc.name}
                  className={`h-full w-full object-cover lg:object-contain object-top ${
                    index == 1 && "md:object-center "
                  }`}
                />
              </div>
              <div
                className={`w-1/2 md:w-2/3 h-full flex-grow flex flex-col p-2 md:px-8 md:justify-center space-y-4 text-white  ${
                  visible1 ? "animate-fade-in-down" : "animate-fade-out-up"
                }`}
                style={{ animationDelay: "500ms" }}
              >
                <span className="text-lg  font-semibold font-serif">
                  {doc.specialization}
                </span>
                <h1 className="text-2xl font-bold font-sans">{doc.name}</h1>
                <p className=" text-sm md:text-sm font-serif hidden lg:flex">
                  {doc.info}
                </p>
                <p className=" text-sm hidden md:flex  md:text-xl font-semibold italic  font-sans">
                  "{doc.message}"
                </p>
                <div className="w-full h-full flex flex-row items-center lg:items-start justify-center lg:justify-between">
                  <div className="lg:flex flex-col items-start w-full  relative hidden ">
                    <span className="text-sm md:text-3xl font-bold font-sans">
                      +{doc.yearsExperience}
                    </span>
                    <span className=" text-sm font-serif">
                      Años de Experiencia
                    </span>
                  </div>
                  <a
                    href="#_"
                    className="relative w-32 flex  justify-center items-center font-bold  group"
                  >
                    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-blue-900/30 lg:group-hover:bg-white lg:group-hover:translate-x-0 lg:group-hover:translate-y-0  rounded-tl-lg rounded-br-lg"></span>
                    <span className="absolute inset-0 w-full h-full border-2 border-white lg:group-hover:border-white rounded-tl-lg rounded-br-lg "></span>
                    <span className="relative flex flex-row justify-center items-center space-x-2 tracking-wide text-white font-sans  lg:group-hover:text-black">
                      <span className="icon-[tabler--circle-dashed-plus] text-2xl "></span>
                      <h3>Más info</h3>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
