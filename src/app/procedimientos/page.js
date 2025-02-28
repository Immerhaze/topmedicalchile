"use client";
import Navbar from "@/components/nav/Navbar";
import React, { useState, useEffect, useRef } from "react";

const procedures = [
  {
    name: "Lipo 360°",
    url: "/procedimientos/lipo.jpg",
    description:
      "Moldea y estiliza tu figura con resultados armónicos. Este procedimiento elimina la grasa localizada en la cintura, abdomen y espalda, creando un contorno más definido y equilibrado.",
    duration: "3-4 horas",
    price: "$2.500.000 CLP.",
    details:
      "La Lipo 360° es ideal para quienes buscan una transformación completa de su silueta. Utilizando técnicas avanzadas, nuestros expertos aseguran un resultado natural y duradero. Este procedimiento es perfecto para aquellos que desean eliminar la grasa persistente y lograr una apariencia más tonificada.",
  },
  {
    name: "Minidermo",
    url: "/procedimientos/minidermo.jpg",
    description:
      "Elimina el exceso de piel en el abdomen para lograr una apariencia más tonificada y definida.",
    duration: "2-3 horas",
    price: "$1.400.000 CLP.",
    details:
      "La Minidermo es perfecta para personas con flacidez leve o moderada en el abdomen. Este procedimiento remueve el exceso de piel, proporcionando un contorno más firme y juvenil. Es una excelente opción para aquellos que desean mejorar la apariencia de su abdomen sin necesidad de una cirugía mayor.",
  },
  {
    name: "Bichectomía",
    url: "/procedimientos/bichectomia.jpg",
    description:
      "Afina los contornos de tu rostro con precisión, eliminando las bolsas de Bichat.",
    duration: "1 hora",
    price: "$350.000 CLP.",
    details:
      "La Bichectomía es un procedimiento rápido y efectivo para afinar las mejillas y definir el rostro, logrando un aspecto más estilizado y armonioso. Es ideal para aquellos que desean mejorar la definición facial sin un tiempo de recuperación prolongado.",
  },
  {
    name: "Lipopapada",
    url: "/procedimientos/lipopapada.jpg",
    description: "Reduce la papada para un perfil más estilizado y definido.",
    duration: "1-2 horas",
    price: "$400.000 CLP.",
    details:
      "La Lipopapada elimina la grasa localizada bajo el mentón, mejorando el perfil facial de manera natural y efectiva. Este procedimiento es perfecto para aquellos que desean un perfil más definido y juvenil.",
  },
  {
    name: "Alectomía",
    url: "/procedimientos/alectomia.jpg",
    description:
      "Redefine los contornos de tu nariz con sutileza, corrigiendo el ancho de las alas nasales.",
    duration: "1-2 horas",
    price: "$1.300.000 CLP.",
    details:
      "La Alectomía es ideal para aquellos que desean una nariz más refinada y proporcionada. Este procedimiento corrige el ancho de las alas nasales, mejorando la armonía facial y proporcionando un aspecto más equilibrado.",
  },
  {
    name: "Botox Zonas",
    url: "/procedimientos/botox.jpg",
    description:
      "Rejuvenece y suaviza líneas de expresión sin cirugía, relajando los músculos faciales.",
    duration: "30-60 minutos",
    price: "$350.000 CLP.",
    details:
      "El Botox es un tratamiento rápido y seguro que reduce las arrugas y líneas de expresión, proporcionando un aspecto más joven y descansado. Es ideal para aquellos que desean mejorar la apariencia de su piel sin necesidad de una cirugía mayor.",
  },
  {
    name: "Lifting",
    url: "/procedimientos/lifting.webp",
    description:
      "Restaura la firmeza de tu piel con un efecto rejuvenecedor, estirando y reafirmando la piel facial.",
    duration: "2-4 horas",
    price: "$2.000.000 CLP.",
    details:
      "El Lifting facial es ideal para reducir los signos de envejecimiento, devolviendo un aspecto más joven y fresco. Este procedimiento estira y reafirma la piel, proporcionando una apariencia más tonificada y juvenil.",
  },
  {
    name: "Otomodelación",
    url: "/procedimientos/otomodelacion.jpg",
    description:
      "Armoniza la forma de tus orejas con resultados delicados, corrigiendo su posición o tamaño.",
    duration: "1-2 horas",
    price: "$650.000 CLP.",
    details:
      "La Otomodelación mejora la apariencia de las orejas, corrigiendo su posición o tamaño para lograr un aspecto más equilibrado y natural. Es ideal para aquellos que desean mejorar la armonía facial.",
  },
  {
    name: "Blefaroplastia",
    url: "/procedimientos/blefaro.jpg",
    description:
      "Rejuvenece tu mirada eliminando el exceso de piel en los párpados, logrando una apariencia más fresca y descansada.",
    duration: "1-2 horas",
    price: "$1.500.000 CLP.",
    details:
      "La Blefaroplastia corrige los párpados caídos y elimina el exceso de piel o grasa, devolviendo una mirada más joven y fresca. Este procedimiento es perfecto para aquellos que desean mejorar la apariencia de sus ojos.",
  },
];

export default function ProceduresPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProcedure, setSelectedProcedure] = useState({
    name: "Lipo 360°",
    url: "/procedimientos/lipo.jpg",
    description:
      "Moldea y estiliza tu figura con resultados armónicos. Este procedimiento elimina la grasa localizada en la cintura, abdomen y espalda, creando un contorno más definido y equilibrado.",
    duration: "3-4 horas",
    price: "$2.500.000 CLP.",
    details:
      "La Lipo 360° es ideal para quienes buscan una transformación completa de su silueta. Utilizando técnicas avanzadas, nuestros expertos aseguran un resultado natural y duradero. Este procedimiento es perfecto para aquellos que desean eliminar la grasa persistente y lograr una apariencia más tonificada.",
  });
  const textreference = useRef();
  const proceduresListRef = useRef(null);

  const filteredProcedures = procedures.filter((procedure) =>
    procedure.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProcedureClick = (procedure) => {
    setSelectedProcedure(procedure);
  };

  useEffect(() => {
    textreference.current.scrollIntoView({
      behavior: "smooth",
      block: "center", // Scroll it to the center of the viewport
    });
  }, [selectedProcedure.name]);

  console.log("SELECTEDPROCEDURE:", selectedProcedure);
  return (
    <>
      <div className="h-auto lg:h-screen w-full flex flex-col ">
        <Navbar fixed={true} />
        <div className="w-full h-full flex flex-col lg:flex-row ">
          {/* Left Side: Procedure List */}
          <div className="overflow-hidden   w-full h-1/2 lg:w-1/4 lg:h-full p-6 bg-white shadow-lg border-r pt-20">
            <div className="relative bg-blueish  rounded-md w-full h-16 flex flex-row p-2 my-4 border-[1px] justify-center items-center">
              <span className="icon-[stash--search-box] text-6xl m-2 text-white"></span>
              <input
                type="text"
                placeholder="Buscar procedimiento..."
                className="w-full h-full p-4 border rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <span className="text-blueish font-semibold tracking-wider text-lg font-serif">
              Procedimientos:
            </span>

            <ul
              ref={proceduresListRef}
              className={`customscroll overflow-y-auto flex flex-row lg:flex-col custom_scrollbar   overflow-x-scroll lg:overflow-x-hidden  border-r-2 border-l-2 border-blueish/20 lg:border-r-0 lg:border-l-0
               max-h-[60%]`}
            >
              {filteredProcedures.map((procedure, index) => (
                <li
                  key={index}
                  className={`min-w-40 p-2 my-4 rounded-lg lg:border-b hover:bg-gray-300 mx-4 cursor-pointer ${
                    procedure.name === selectedProcedure.name
                      ? "bg-blueish text-white"
                      : "bg-blueish/80 lg:bg-white text-black"
                  }`}
                  onClick={() => handleProcedureClick(procedure)}
                >
                  {procedure.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Procedure Details */}
          <div className=" w-full h-1/2 lg:w-3/4 lg:h-full lg:pt-20 shadow-lg overflow-hidden bg-white">
            <div className="h-1/6 flex justify-center items-center relative">
              <h1 className="absolute top-[15%] text-5xl   text-nowrap font-bold uppercase text-blueish/10">
                {selectedProcedure?.name}
              </h1>
              <h1
                className={`text-3xl md:text-3xl  font-semibold uppercase text-center text-blueish transition-all duration-500 animate-fade-in-down animate-duration-300`}
              >
                {selectedProcedure?.name}
              </h1>
            </div>
            {selectedProcedure ? (
              <div
                key={selectedProcedure?.name}
                className="w-full h-5/6 flex flex-col md:flex-row p-4"
              >
                <div className="w-full md:w-1/2 overflow-hidden">
                  <img
                    src={selectedProcedure.url}
                    alt={selectedProcedure.name}
                    className="w-full h-full object-cover rounded mb-4 md:mb-0 animate-blurred-fade-in "
                  />
                </div>
                <div className="w-full md:w-1/2 h-full md:p-4 flex flex-col justify-start space-y-4 font-sans">
                  <p className="text-gray-700 mb-6 text-base animate-fade-in-down animate-duration-300 ">
                    {selectedProcedure.description}
                  </p>
                  <p className="text-gray-800 text-base animate-fade-in-down animate-duration-300 animate-delay-400">
                    {selectedProcedure.details}
                  </p>
                  <div className="mb-6 flex flex-col space-y-8 text-center animate-fade-in-down animate-duration-300 animate-delay-700">
                    {/* <p className="text-gray-600 ">
                      <strong className="text-blueish font-serif tracking-wider font-black">
                        Precio:
                      </strong>{" "}
                      Desde {selectedProcedure.price}
                    </p>
                    <p className="text-gray-600">
                      <strong className="text-blueish font-serif tracking-wider font-black">
                        Duración:
                      </strong>{" "}
                      {selectedProcedure.duration} (aproximada)
                    </p> */}
                    <div ref={textreference} className="mt-">
                      <a
                        href="https://wa.me/56967004543"
                        target="_blank"
                        class="relative inline-flex items-center shadow-blueish shadow-sm justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white border-2 border-blueish rounded hover:bg-white group"
                      >
                        <span class="w-48 h-48 rounded rotate-[-40deg] bg-blueish absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span class="relative w-full text-left text-blueish font-black tracking-widest transition-colors duration-300 ease-in-out group-hover:text-white">
                          AGENDAR AHORA
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-gray-500 text-lg">
                Selecciona un procedimiento para ver los detalles.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
