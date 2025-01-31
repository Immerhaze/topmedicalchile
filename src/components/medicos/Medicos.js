import React, { useState, useRef, useEffect, Component } from "react";

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
    <div ref={parentdiv} className="h-screen relative bg-[#fafafa] py-8">
      <div
        className={`w-full h-full bg-blueish flex flex-col p-8  overflow-hidden`}
      >
        <div className="w-full h-1/6 bg-blueish/70 relative flex justify-center items-center">
          <span className="absolute top-0 text-9xl font-sans uppercase whitespace-nowrap font-bold text-white/10">
            EQUIPO MEDICO
          </span>
          <h1
            className={`text-6xl font-sans font-semibold uppercase text-center text-white ${
              visible1 ? "animate-fade-in-down" : "animate-fade-out-up"
            }`}
          >
            EQUIPO MEDICO
          </h1>
        </div>
        <div className="w-full h-full bg-blueish flex flex-col space-y-4 p-8 overflow-hidden">
          {doctors.map((doc, index) => (
            <div
              className={`w-full h-1/2 flex ${
                index == 0 ? "flex-row " : " flex-row-reverse "
              } `}
            >
              <div
                className={`w-1/3  bg-white overflow-hidden  border-white ${
                  index == 0
                    ? "rounded-tl-2xl rounded-br-2xl  mr-4"
                    : "rounded-br-2xl rounded-tl-2xl  ml-4"
                }`}
              >
                <img src={doc.image} alt={doc.name} />
              </div>
              <div
                className={` w-2/3 flex-grow flex flex-col justify-center space-y-4 p-24 text-white   ${
                  index == 0 ? "border-b-2 border-l-2" : "border-t-2 border-r-2"
                } ${visible1 ? "animate-fade-in-down" : "animate-fade-out-up"}`}
                style={{ animationDelay: "500ms" }}
              >
                <span className="text-lg  font-semibold font-serif">
                  {doc.specialization}
                </span>
                <h1 className="text-3xl font-bold font-sans">{doc.name}</h1>
                <p className=" text-base font-serif">{doc.info}</p>
                <p className="text-xl font-medium italic  font-sans">
                  "{doc.message}"
                </p>
                <div className="w-full flex  flex-row justify-between">
                  <div className="flex flex-col items-start w-full  relative">
                    <span className="text-6xl font-bold font-sans">
                      {doc.yearsExperience}+
                    </span>
                    <span className=" text-sm font-serif">
                      Años de Experiencia
                    </span>
                  </div>
                  <a
                    href="#_"
                    class="relative w-32 flex  justify-center items-center font-bold  group"
                  >
                    <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-blue-900/30 group-hover:bg-white group-hover:translate-x-0 group-hover:translate-y-0  rounded-tl-lg rounded-br-lg"></span>
                    <span class="absolute inset-0 w-full h-full border-2 border-white group-hover:border-white rounded-tl-lg rounded-br-lg "></span>
                    <span class="relative flex flex-row justify-center items-center space-x-2 tracking-wide text-white font-sans  group-hover:text-black">
                      <span class="icon-[tabler--circle-dashed-plus] text-2xl "></span>
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

// <div className="h-1/6 w-full flex items-end justify-center">
// <h1 className="font-sans text-4xl tracking-wide text-center font-bold">
//   Equipo Medico
// </h1>
// </div>
// <div className="w-full h-5/6 flex flex-row justify-evenly items-center p-8 space-x-4">
// {doctors.map((doctor) => (
//   <div
//     key={doctor.id}
//     className="w-1/3 h-full relative flex flex-col rounded-md overflow-hidden shadow-lg cursor-pointer"
//     onMouseEnter={() => setHoveredDoctor(doctor.id)}
//     onMouseLeave={() => setHoveredDoctor(null)}
//   >
//     {/* Image and Gradient Overlay */}
//     <div className="h-full w-full bg-red-300 relative">
//
//       <div className="w-full h-full absolute top-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
//       {/* Basic Info */}
//       <div className="w-full h-full absolute top-0 flex flex-col space-y-2 justify-end p-8 text-white">
//         <h2 className="text-2xl font-bold tracking-wide font-sans">
//           {doctor.name}
//         </h2>
//         <h3 className="text-xl font-medium tracking-wide font-serif">
//           {doctor.specialization}
//         </h3>
//       </div>
//     </div>
//     {/* Detailed Info */}
//     <div
//       className={`absolute inset-0 bg-white flex flex-col p-8 transition-opacity duration-500 ${
//         hoveredDoctor === doctor.id ? "opacity-100" : "opacity-0"
//       }`}
//     >
//       {/* Image on the Left */}
//       <div className="flex-shrink-0 w-1/3 h-auto pr-4">
//         <img
//           src={doctor.image}
//           alt={doctor.name}
//           className="w-full h-full object-contain rounded-lg shadow-md"
//         />
//       </div>
//       {/* Text Info */}
//       <div className="flex-grow flex flex-col justify-center space-y-4">
//         <span className="text-lg text-gray-700 font-semibold font-serif">
//           {doctor.specialization}
//         </span>
//         <h1 className="text-3xl font-bold text-gray-900 font-sans">
//           {doctor.name}
//         </h1>
//         <p className="text-gray-700 text-base font-serif">
//           {doctor.info}
//         </p>
//         <p className="text-xl font-medium italic text-gray-600 font-sans">
//           "{doctor.message}"
//         </p>
//         <div className="flex flex-col items-start">
//           <span className="text-6xl font-bold text-gray-800 font-sans">
//             {doctor.yearsExperience}+
//           </span>
//           <span className="text-gray-600 text-sm font-serif">
//             Años de Experiencia
//           </span>
//         </div>
//       </div>
//     </div>
//   </div>
// ))}
// </div>
