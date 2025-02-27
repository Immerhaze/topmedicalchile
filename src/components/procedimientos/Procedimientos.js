"use client";
import React, { useRef, useState, useEffect } from "react";

const procedures = [
  {
    name: "Lipo 360°",
    image: "/procedimientos/lipo.jpg",
    description: "Moldea y estiliza tu figura con resultados armónicos.",
    duration: "3-4 horas",
    price: "$2.500.000 CLP.",
    details:
      "La Lipo 360° elimina grasa de la cintura, abdomen y espalda, creando un contorno más definido y equilibrado.",
  },
  {
    name: "Minidermo",
    image: "/procedimientos/minidermo.jpg",
    description: "Elimina el exceso de piel para un abdomen más definido.",
    duration: "2-3 horas",
    price: "$1.400.000 CLP.",
    details:
      "La Minidermo remueve piel sobrante en el abdomen, ideal para personas con flacidez leve o moderada.",
  },
  {
    name: "Bichectomía",
    image: "/procedimientos/bichectomia.jpg",
    description: "Afina los contornos de tu rostro con precisión.",
    duration: "1 hora",
    price: "$350.000 CLP.",
    details:
      "Procedimiento rápido para reducir las bolsas de Bichat, afinando las mejillas y definiendo el rostro.",
  },
  {
    name: "Lipopapada",
    image: "/procedimientos/lipopapada.jpg",
    description: "Reduce la papada para un perfil más estilizado.",
    duration: "1-2 horas",
    price: "$400.000 CLP.",
    details:
      "Elimina grasa localizada bajo el mentón, mejorando el perfil del rostro de forma natural.",
  },
  {
    name: "Alectomía",
    image: "/procedimientos/alectomia.jpg",
    description: "Redefine los contornos de tu nariz con sutileza.",
    duration: "1-2 horas",
    price: "$1.300.000 CLP.",
    details:
      "Corrige el ancho de las alas nasales para lograr una apariencia más refinada y proporcionada.",
  },
  {
    name: "Botox Zonas",
    image: "/procedimientos/botox.jpg",
    description: "Rejuvenece y suaviza líneas de expresión sin cirugía.",
    duration: "30-60 minutos",
    price: "$350.000 CLP.",
    details:
      "Reduce las arrugas y líneas de expresión, proporcionando un aspecto más joven y descansado.",
  },
  {
    name: "Lifting",
    image: "/procedimientos/lifting.webp",
    description: "Restaura la firmeza de tu piel con un efecto rejuvenecedor.",
    duration: "2-4 horas",
    price: "$2.000.000 CLP.",
    details:
      "El lifting facial estira y reafirma la piel, proporcionando una apariencia más tonificada y juvenil.",
  },
  {
    name: "Otomodelación",
    image: "/procedimientos/otomodelacion.jpg",
    description: "Armoniza la forma de tus orejas con resultados delicados.",
    duration: "1-2 horas",
    price: "$650.000 CLP.",
    details:
      "La otomodelación mejora la forma de las orejas, corrigiendo su posición o tamaño para lograr un aspecto más equilibrado.",
  },
  {
    name: "Blefaroplastia",
    image: "/procedimientos/blefaro.jpg",
    description: "Rejuvenece tu mirada eliminando el exceso de piel.",
    duration: "1-2 horas",
    price: "$1.500.000 CLP.",
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [VisibleInfoCard, setVisibleInfoCard] = useState(null);

  const parentRef = useRef(null); // Ref for the parent container
  const [isVisible, setIsVisible] = useState(false); // State to track visibility

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

    const screenWidth = window.innerWidth;
    const newScrollLeft =
      direction === "left"
        ? scrollRef.current.scrollLeft - screenWidth
        : scrollRef.current.scrollLeft + screenWidth;

    scrollRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth;
      const scrollLeft = currentIndex * cardWidth;
      scrollRef.current.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

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
        }, 400); // 400ms delay
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

  const isLeftArrowVisible = scrollRef.current
    ? scrollRef.current.scrollLeft >= scrollRef.current.offsetWidth / 3
    : false;

  return (
    <section
      ref={parentRef}
      id="procedimientos"
      className="flex relative w-auto h-screen bg-[#FAFAFA] flex-col"
    >
      {/* Left Arrow */}
      {isLeftArrowVisible && (
        <div
          onClick={() => handleScroll("left")}
          className="absolute left-4 bg-[#fafafa] top-1/2 z-30 flex justify-center items-center rounded-full border-2 border-blueish cursor-pointer transform -translate-y-1/2"
        >
          <span className="icon-[solar--arrow-left-broken] text-4xl text-blueish"></span>
        </div>
      )}

      {/* Right Arrow */}
      <div
        onClick={() => handleScroll("right")}
        className="absolute right-4 bg-[#fafafa] top-1/2 z-30 flex justify-center items-center rounded-full border-2 border-blueish cursor-pointer transform -translate-y-1/2"
      >
        <span className="icon-[solar--arrow-right-broken] text-4xl text-blueish"></span>
      </div>

      {/* Full screen cards container */}
      <div className="h-full w-full flex flex-col">
        <div className="h-1/5 flex flex-col justify-center py-12 space-y-8 p-4">
          <h2
            className={`md:pl-[20vh] text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-blueish font-sans ${
              isVisible ? "animate-fadeInUp" : "opacity-0"
            }`}
          >
            Procedimientos & Tratamientos
          </h2>
          <p
            className={`md:pl-[20vh] text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 font-serif ${
              isVisible ? "animate-fadeInUp" : "opacity-0"
            }`}
          >
            Procedimientos diseñados para realzar tu belleza y confianza.
          </p>
        </div>
        <div
          ref={scrollRef}
          className="custom-scrollbar flex flex-nowrap overflow-x-auto w-full h-4/5 md:pl-[20vh] py-8 cursor-grab"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          style={{
            scrollBehavior: isDragging ? "auto" : "smooth",
          }}
        >
          {/* Card */}
          {procedures.map((procedure, index) => (
            <div
              key={index}
              className={`relative flex-none h-full overflow-hidden group transition-all duration-500 ${
                VisibleInfoCard === index
                  ? "w-[100%] md:w-[98%] lg:w-[58%]"
                  : "w-[100%] md:w-[90%] lg:w-[40%]"
              } ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}
            >
              <div
                className={`relative z-10 ${
                  VisibleInfoCard === index ? "w-full lg:w-1/2" : "w-full"
                } h-full overflow-hidden`}
              >
                {/* Image */}
                <img
                  src={procedure.image}
                  alt={procedure.name}
                  className={`w-full h-full object-cover transition-all duration-500  ${
                    VisibleInfoCard !== index && "lg:group-hover:scale-110"
                  } ${
                    VisibleInfoCard !== null &&
                    VisibleInfoCard !== index &&
                    "grayscale"
                  }`}
                />

                {/* Procedure Name - Stays inside image */}
                <div
                  className={`absolute top-0 flex flex-col justify-end space-y-8 p-4 md:p-6 text-white tracking-wide w-full h-full object-cover transition-all duration-500 bg-gradient-to-b from-transparent to-black/30 ${
                    VisibleInfoCard !== index && "lg:group-hover:bg-black/40"
                  }`}
                  style={{
                    height: "100%", // Keep within image
                  }}
                >
                  <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-sans">
                    {procedure.name}
                  </h2>
                  <p className="text-sm md:text-lg xl:text-xl font-medium font-serif">
                    {procedure.description}
                  </p>
                  <button
                    onClick={() => SelectedCard(index)}
                    className="bg-white group rounded-md text-black flex items-center justify-center transition-all duration-500 p-2 w-[80%] max-w-[250px]"
                  >
                    <span className="icon-[line-md--plus-circle] block group-hover:text-blueish transition-all duration-300 text-lg md:text-2xl mr-2"></span>
                    <h3 className="text-sm md:text-lg font-sans font-semibold">
                      Más Información
                    </h3>
                  </button>
                </div>
              </div>

              <div
                className={`absolute top-0 md:right-0  w-full lg:w-1/2 h-full transition-transform duration-[1500ms] ease-out ${
                  VisibleInfoCard === index && "z-20"
                }`}
                style={{
                  transform: `lg:translateX(${
                    VisibleInfoCard === index ? "0%" : "-100%"
                  })`,
                  transition: "transform 1s ease-out",
                }}
              >
                <div className="w-full h-full flex flex-col overflow-hidden">
                  <div className="w-full h-1/5 bg-blueish/70 relative flex justify-center items-center">
                    <span className="absolute md:top-[5%] md:left-[5%] lg:top-[10%] text-8xl font-sans uppercase whitespace-nowrap font-bold text-white/10">
                      {procedure.name}
                    </span>
                    <span
                      className="icon-[solar--close-circle-broken] absolute top-4 right-4 text-4xl font-bold text-white  lg:hover:scale-125 transition-transform duration-300 cursor-pointer"
                      onClick={() => setVisibleInfoCard(null)}
                    ></span>
                    <h1 className="text-4xl font-sans font-semibold uppercase text-center text-white">
                      {procedure.name}
                    </h1>
                  </div>
                  <div className="w-full h-1/5 px-4 text-sm lg:text-base text-white font-serif bg-blueish relative flex justify-center items-center p-8">
                    {procedure.details}
                  </div>
                  <div className="w-full h-1/5 lg:px-8 bg-blueish text-white space-x-4 relative flex flex-row justify-start items-center p-8">
                    <span className="icon-[solar--clock-circle-broken] text-5xl lg:text-5xl"></span>
                    <span className="font-bold font-sans text-xl">
                      Duración:
                    </span>
                    <p className="font-serif text-lg">
                      {procedure.duration} aprox.
                    </p>
                  </div>
                  <div className="w-full h-1/5 lg:px-8 text-white bg-blueish space-x-4 relative flex flex-row justify-start items-center p-8">
                    <span className="icon-[solar--money-bag-broken] text-5xl lg:text-5xl"></span>
                    <span className="font-bold text-xl font-sans">Precio:</span>
                    <p className="text-lg font-serif">
                      desde {procedure.price}
                    </p>
                  </div>
                  <div className="w-full h-1/5 lg:px-8 text-white bg-blueish space-x-4 relative flex justify-center items-center p-8">
                    <button className="w-full flex flex-row justify-center group/arrow items-center transition-all duration-500">
                      <a
                        href="/procedimientos"
                        className="font-serif font-normal text-xl md:text-2xl underline cursor-pointer"
                      >
                        Ver procedimiento
                      </a>
                      <span className="icon-[solar--arrow-right-broken] hidden lg:block group-hover/arrow:translate-x-10 transition-all duration-300 text-4xl tracking-wider ml-2"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
