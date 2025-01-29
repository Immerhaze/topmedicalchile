"use client";

import React, { useRef, useState, useEffect } from "react";

const procedures = [
  {
    name: "Lipo 360°",
    image: "/procedimientos/lipo.jpg",
    description: "Moldea y estiliza tu figura con resultados armónicos.",
    duration: "3-4 horas",
    recuperation: "2 semanas",
    price: "$4,000 CLP.",
    details:
      "La Lipo 360° elimina grasa de la cintura, abdomen y espalda para crear un contorno equilibrado y definido.",
  },
  {
    name: "Minidermo",
    image: "/procedimientos/minidermo.jpg",
    description: "Elimina el exceso de piel para un abdomen más definido.",
    duration: "2-3 horas",
    recuperation: "1-2 semanas",
    price: "$3,000 CLP.",
    details:
      "La Minidermo remueve piel sobrante en el abdomen, ideal para personas con flacidez leve o moderada.",
  },
  {
    name: "Bichectomia",
    image: "/procedimientos/bichectomia.jpg",
    description: "Afina los contornos de tu rostro con precisión.",
    duration: "1 hora",
    recuperation: "1 semana",
    price: "$1,200 CLP.",
    details:
      "Procedimiento rápido para reducir las bolsas de Bichat, afinando las mejillas y definiendo el rostro.",
  },
  {
    name: "Lipopapada",
    image: "/procedimientos/lipopapada.jpg",
    description: "Reduce la papada para un perfil más estilizado.",
    duration: "1-2 horas",
    recuperation: "1 semana",
    price: "$1,500 CLP.",
    details:
      "Elimina grasa localizada bajo el mentón, mejorando el perfil del rostro de forma natural.",
  },
  {
    name: "Alectomia",
    image: "/procedimientos/alectomia.jpg",
    description: "Redefine los contornos de tu nariz con sutileza.",
    duration: "1-2 horas",
    recuperation: "1 semana",
    price: "$2,000 CLP.",
    details:
      "Corrige el ancho de las alas nasales para lograr una apariencia más refinada y proporcionada.",
  },
  {
    name: "Hilos Tensores",
    image: "/procedimientos/hilos.jpg",
    description: "Levanta y reafirma sin necesidad de cirugía.",
    duration: "1-2 horas",
    recuperation: "1-2 semanas",
    price: "$2,000 CLP.",
    details:
      "Los hilos tensores son una técnica no invasiva para mejorar la flacidez facial y corporal, proporcionando un lifting natural.",
  },
  {
    name: "Rinomodelación",
    image: "/procedimientos/rinomodelacion.webp",
    description: "Corrige y perfila tu nariz de manera natural.",
    duration: "1-2 horas",
    recuperation: "1 semana",
    price: "$1,500 CLP.",
    details:
      "Este procedimiento no quirúrgico mejora la forma de la nariz mediante rellenos, ideal para quienes buscan cambios sutiles.",
  },
  {
    name: "Lifting",
    image: "/procedimientos/lifting.webp",
    description: "Restaura la firmeza de tu piel con un efecto rejuvenecedor.",
    duration: "2-4 horas",
    recuperation: "2-3 semanas",
    price: "$5,000 CLP.",
    details:
      "El lifting facial estira y reafirma la piel para reducir los signos de envejecimiento, devolviendo un aspecto más joven.",
  },
  {
    name: "Otomodelacion",
    image: "/procedimientos/otomodelacion.jpg",
    description: "Armoniza la forma de tus orejas con resultados delicados.",
    duration: "1-2 horas",
    recuperation: "1 semana",
    price: "$1,500 CLP.",
    details:
      "La otomodelación mejora la forma de las orejas, corrigiendo su posición o tamaño para lograr un aspecto más equilibrado.",
  },
  {
    name: "Blefaroplastia",
    image: "/procedimientos/blefaro.jpg",
    description: "Rejuvenece tu mirada eliminando el exceso de piel.",
    duration: "1-2 horas",
    recuperation: "1-2 semanas",
    price: "$3,000 CLP.",
    details:
      "La blefaroplastia corrige los párpados caídos y elimina el exceso de piel o grasa, devolviendo una mirada más joven y fresca.",
  },
];

export default function ProceduresSection() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const [VisibleInfoCard, setVisibleInfoCard] = useState(null);

  const parentRef = useRef(null); // Ref for the parent container
  const [isVisible, setIsVisible] = useState(false); // State to tr

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX; // Distance moved
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleScroll = (direction) => {
    if (!scrollRef.current) return;

    const containerWidth = scrollRef.current.offsetWidth;
    const scrollOffset = containerWidth / 3; // Move by one item width

    if (direction === "left") {
      scrollRef.current.scrollLeft -= scrollOffset;
    } else if (direction === "right") {
      scrollRef.current.scrollLeft += scrollOffset;
    }
  };

  function SelectedCard(index) {
    // Check if the clicked item is already selected
    if (VisibleInfoCard === index) {
      setVisibleInfoCard(null);
    } else {
      setVisibleInfoCard(index);

      // Calculate the position of the clicked procedure
      const itemWidth = scrollRef.current.children[index].offsetWidth;

      // Scroll to the clicked item
      const newScrollLeft = index * itemWidth;
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });

      // If it's the last item, wait 1 second, then scroll to the end of the row
      if (index === procedures.length - 1) {
        setTimeout(() => {
          scrollRef.current.scrollTo({
            left: scrollRef.current.scrollWidth,
            behavior: "smooth",
          });
        }, 400); // 1000ms delay (1 second)
      }
    }
  }

  useEffect(() => {
    const handleScrollEvent = () => {
      if (scrollRef.current) {
        setScrollPosition(scrollRef.current.scrollLeft);
      }
    };

    const scrollContainer = scrollRef.current;
    scrollContainer?.addEventListener("scroll", handleScrollEvent);

    return () => {
      scrollContainer?.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when visible
          observer.unobserve(entry.target); // Stop observing after triggering once
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (parentRef.current) {
      observer.observe(parentRef.current); // Observe the parent container
    }

    return () => {
      if (parentRef.current) {
        observer.unobserve(parentRef.current); // Cleanup observer
      }
    };
  }, []);

  const isLeftArrowVisible =
    scrollPosition >= scrollRef.current?.offsetWidth / 3;

  return (
    <section
      ref={parentRef}
      className="parent relative h-screen bg-[#FAFAFA] section flex flex-col"
    >
      {/* Left Arrow */}
      {isLeftArrowVisible && (
        <div
          onClick={() => handleScroll("left")}
          className="absolute left-4 bg-transparent hover:bg-lime-600/50 bg-green-200 top-1/2 z-30 flex justify-center items-center rounded-full border-2 border-lime-500 cursor-pointer transform -translate-y-1/2"
        >
          <span className="icon-[solar--arrow-left-broken] text-7xl text-white"></span>
        </div>
      )}

      {/* Right Arrow */}

      <div
        onClick={() => handleScroll("right")}
        className="absolute right-4 bg-transparent hover:bg-lime-600/50 top-1/2 z-30 flex justify-center items-center rounded-full border-2 border-lime-500 cursor-pointer transform -translate-y-1/2"
      >
        <span className="icon-[solar--arrow-right-broken] text-7xl text-white"></span>
      </div>

      {/* Cards */}
      <div className="h-full flex flex-col justify-evenly">
        <div className=" h-1/5 flex flex-col justify-end py-12 space-y-8 ">
          {/* <span className="block border-t-[0.5px] border-black/30 w-2/3 ml-[40vh]"></span> */}
          <h2
            className={`pl-[40vh] text-base font-bold  text-gray-800 font-sans  ${
              isVisible ? "animate-fadeInUp" : "opacity-0"
            }`}
          >
            Procedimientos & Tratamientos
          </h2>
          <p
            className={`pl-[40vh] text-xl font-bold  text-gray-800 font-serif ${
              isVisible ? "animate-fadeInUp" : "opacity-0"
            }`}
          >
            Procedimientos diseñados para realzar tu belleza y confianza.
          </p>
        </div>
        <div
          ref={scrollRef}
          className="custom-scrollbar flex  flex-nowrap overflow-x-auto w-full h-[70vh] pl-[40vh] cursor-grab"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          style={{
            scrollBehavior: isDragging ? "auto" : "smooth",
          }}
        >
          {procedures.map((procedure, index) => (
            <div
              key={index}
              onClick={() => SelectedCard(index)}
              className={`relative flex-none h-full group  transition-all duration-500 ${
                VisibleInfoCard === index ? "w-2/3 flex flex-row" : "w-1/3"
              } ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}
              style={{
                animationDelay: `${index * 300}ms`, // Add staggered delay here
              }}
            >
              <div className="relative w-[55vh] h-full overflow-hidden z-10">
                {/* Image */}
                <img
                  src={procedure.image}
                  alt={procedure.name}
                  className={`w-[55vh] h-full object-cover transition-all duration-500 group-hover:scale-110 ${
                    VisibleInfoCard !== null &&
                    VisibleInfoCard !== index &&
                    "grayscale"
                  }`}
                />
                {/* Procedure Name */}
                <div
                  className={`w-full h-full ${
                    VisibleInfoCard !== index && "group-hover:bg-black/40"
                  } absolute bottom-0 left-0 right-0 flex items-end`}
                >
                  <div className="h-1/2 flex flex-col justify-center px-8 text-white text-left space-y-4 tracking-wide">
                    <h2 className="text-lg font-bold font-sans">
                      {procedure.name}
                    </h2>
                    <p className="text-2xl font-medium whitespace-pre-line font-serif">
                      {procedure.description}
                    </p>

                    <button
                      className={`bg-white hover:scale-105 rounded-md p-2 w-1/3 text-black flex justify-center items-center transition-all duration-500  translate-y-4 ${
                        VisibleInfoCard === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <span className="icon-[line-md--plus-circle] mx-1 text-3xl transition-colors duration-300"></span>
                      <h3 className="text-xl font-sans font-semibold">
                        Más Info
                      </h3>
                    </button>
                  </div>
                </div>
              </div>

              {/* Info Card */}
              <div
                className={`${
                  VisibleInfoCard === index
                    ? "absolute right-0"
                    : "absolute top-0"
                } w-1/2 h-full bg-red-400 flex flex-col text-xl overflow-hidden transition-all duration-500 ease-in-out`}
              >
                <div className="w-full h-1/5 bg-green-200 relative flex justify-center items-center">
                  <span className="absolute top-0 text-9xl font-sans uppercase whitespace-nowrap font-bold text-black/5">
                    {procedure.name}
                  </span>
                  <span
                    className="icon-[solar--close-circle-broken] absolute top-4 right-4 text-4xl font-bold text-black cursor-pointer hover:scale-125 transition-transform duration-300"
                    onClick={() => setVisibleInfoCard(null)}
                  ></span>
                  <h1 className="text-4xl font-sans font-semibold uppercase text-center">
                    {procedure.name}
                  </h1>
                </div>
                <div className="w-full h-1/5 font-serif bg-green-300 relative flex justify-center items-center p-8">
                  {procedure.details}
                </div>
                <div className="w-full h-1/5 bg-green-400 space-x-4 relative flex flex-row justify-start items-center p-8">
                  <span className="icon-[solar--clock-circle-broken]  text-5xl"></span>{" "}
                  <span className="font-bold font-sans text-2xl">
                    Duración:
                  </span>
                  <p className="font-serif text-xl">
                    {procedure.duration} aprox.
                  </p>
                </div>
                <div className="w-full h-1/5 bg-green-500 space-x-4 relative flex flex-row justify-start items-center p-8">
                  <span className="icon-[solar--health-broken] text-5xl"></span>
                  <span className="font-bold font-sans text-2xl">
                    Recuperación:{" "}
                  </span>
                  <p className="font-serif text-xl">
                    {procedure.recuperation} aprox.
                  </p>
                </div>
                <div className="w-full h-1/5 bg-green-600 space-x-4 relative flex flex-row justify-start items-center p-8">
                  <span className="icon-[solar--money-bag-broken] text-5xl"></span>
                  <span className="font-bold text-2xl font-sans">Precio: </span>
                  <p className="text-xl font-serif">desde {procedure.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
