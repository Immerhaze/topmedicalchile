"use client";
import Navbar from "@/components/nav/Navbar";

export default function Medicos() {
  let doc = {
    id: 2,
    name: "Dra. Diana Carrillo",
    image: "/drs/dr2.png",
    specialization: "Médico Cirujano",
    info: "La Dra. Diana Esperanza Carrillo es médica con más de 15 años de experiencia como funcionaria pública. Con estudios en medicina estética, para brindar tratamientos innovadores que mejoran la salud y el bienestar de sus pacientes.",
    yearsExperience: 15,
    message:
      "Mi misión es ayudarte a sentirte bien contigo mismo, porque cuando te cuidas, tu confianza crece.",
  };

  return (
    <div className="w-full min-h-screen bg-[#fdfdfd] flex flex-col items-center overflow-x-hidden">
      <Navbar />
      <div className="w-full flex flex-col md:flex-row h-auto md:h-screen ">
        {/* Sección de la imagen */}
        <div className="w-full md:w-1/2 h-full pt-[10%] lg:pt-0  flex justify-center items-center md:h-full">
          <img
            src={doc.image}
            alt={`Imagen de ${doc.name}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Sección de información */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-4 md:space-y-8 p-6 md:p-8 lg:pr-48 pt-10 md:pt-[10%] font-sans">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold font-serif animate-fadeInDown">
            {doc.specialization}
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold  animate-fadeInDown animate-delay-200 ">
            {doc.name}
          </h2>
          <p className="text-sm md:text-base lg:text-lg  animate-fadeInDown animate-delay-300">
            {doc.info}
          </p>
          <h3 className="text-base md:text-lg lg:text-xl font-medium italic  animate-fadeInDown animate-delay-300">
            "{doc.message}"{" "}
          </h3>
          <a
            href="/medicos"
            className="relative inline-flex items-center px-4 py-2 md:px-6 md:py-3 font-bold text-white bg-blue-600 hover:bg-blue-700 border-2 border-transparent hover:border-white rounded-lg transition-all"
          >
            <span className="text-lg md:text-xl">Agendar Hora</span>
          </a>
        </div>
      </div>
    </div>
  );
}
