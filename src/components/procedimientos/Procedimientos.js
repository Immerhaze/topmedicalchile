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

  const [currentIndex, setCurrentIndex] = useState(0);
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
    const numCards = procedures.length;
    if (direction === "left") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? numCards - 1 : prevIndex - 1
      );
    } else if (direction === "right") {
      setCurrentIndex((prevIndex) =>
        prevIndex === numCards - 1 ? 0 : prevIndex + 1
      );
    }
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
      className="relative h-screen bg-[#FAFAFA] flex flex-col"
    >
      {/* Left Arrow */}
      {isLeftArrowVisible && (
        <div
          onClick={() => handleScroll("left")}
          className="absolute left-4 bg-white  top-1/2 z-30 flex justify-center items-center rounded-full border-2  border-blueish cursor-pointer transform -translate-y-1/2"
        >
          <span className="icon-[solar--arrow-left-broken] text-4xl text-blueish"></span>
        </div>
      )}

      {/* Right Arrow */}

      <div
        onClick={() => handleScroll("right")}
        className="absolute right-4  bg-white  top-1/2 z-30 flex justify-center items-center rounded-full border-2 border-blueish cursor-pointer transform -translate-y-1/2"
      >
        <span className="icon-[solar--arrow-right-broken] text-4xl text-blueish"></span>
      </div>

      {/*full screen cards container*/}
      <div className="h-full w-full flex flex-col">
        <div className=" h-1/5 flex flex-col justify-center py-12 space-y-8  p-4">
          {/* <span className="block border-t-[0.5px] border-black/30 w-2/3 ml-[40vh]"></span> */}
          <h2
            className={`md:pl-[20vh] text-sm md:text-lg font-bold  text-gray-800 font-sans  ${
              isVisible ? "animate-fadeInUp" : "opacity-0"
            }`}
          >
            Procedimientos & Tratamientos
          </h2>
          <p
            className={`md:pl-[20vh] text-base md:text-xl font-bold  text-gray-800 font-serif ${
              isVisible ? "animate-fadeInUp" : "opacity-0"
            }`}
          >
            Procedimientos diseñados para realzar tu belleza y confianza.
          </p>
        </div>
        <div
          ref={scrollRef}
          className=" custom-scrollbar  flex flex-nowrap overflow-x-auto w-full h-full md:pl-[20vh]   py-8 cursor-grab"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          style={{
            scrollBehavior: isDragging ? "auto" : "smooth",
          }}
        >
          {/* card */}

          {procedures.map((procedure, index) => (
            <div
              key={index}
              className={`relative flex-none h-full overflow-hidden group transition-all duration-500  ${
                VisibleInfoCard === index
                  ? "w-[100%]  md:w-[98%] lg:w-[58%] "
                  : "w-[100%]  md:w-[90%] lg:w-[40%]"
              } ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}
              style={{
                animationDelay: `${index * 300}ms`, // Add staggered delay here
              }}
            >
              <div className="relative w-full h-full ">
                {/* Image */}
                <img
                  src={procedure.image}
                  alt={procedure.name}
                  className={`w-full opacity-100 h-full object-cover transition-all duration-500 lg:group-hover:scale-110 ${
                    VisibleInfoCard !== null &&
                    VisibleInfoCard !== index &&
                    "grayscale"
                  }`}
                />
                {/* Procedure Name */}
                <div
                  className={`w-full h-full ${
                    VisibleInfoCard !== index && "lg:group-hover:bg-black/40"
                  } absolute bottom-0 left-0 right-0 flex items-end`}
                >
                  <div className="h-1/2 flex flex-col justify-end px-8 text-white text-left tracking-wide py-4 space-y-4">
                    <h2 className="text-lg font-bold font-sans">
                      {procedure.name}
                    </h2>
                    <p className="text-2xl font-medium whitespace-pre-line font-serif">
                      {procedure.description}
                    </p>
                    <button
                      onClick={() => SelectedCard(index)}
                      className="bg-white group  rounded-md w-[70%] text-black flex flex-row justify-center items-center transition-all duration-500"
                    >
                      <span className="icon-[line-md--plus-circle]  block group-hover:text-blueish  transition-all duration-300 text-lg md:text-2xl mr-2"></span>

                      <h3 className="text-base md:text-lg font-sans font-semibold">
                        Más Información
                      </h3>
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={`absolute top-0 w-full h-full  transition-transform duration-[1500ms] ease-out`}
                style={{
                  transform: `translateX(${
                    VisibleInfoCard === index ? "0%" : "-100%"
                  })`,

                  transition: "transform 1s ease-out",
                }}
              >
                <div
                  className={`w-full h-full flex flex-col  overflow-hidden `}
                >
                  <div className="w-full h-1/5 bg-blueish/70 relative flex justify-center items-center">
                    <span className="absolute top-0 text-9xl font-sans uppercase whitespace-nowrap font-bold text-white/10">
                      {procedure.name}
                    </span>
                    <span
                      className="icon-[solar--close-circle-broken] absolute top-4 right-4 text-4xl font-bold text-white cursor-pointer lg:hover:scale-125 transition-transform duration-300"
                      onClick={() => setVisibleInfoCard(null)}
                    ></span>
                    <h1 className="text-4xl  font-sans font-semibold uppercase text-center text-white">
                      {procedure.name}
                    </h1>
                  </div>
                  <div className="w-full h-1/5  px-8  text-base md:text-lg lg:text-xl xl:text-2xl  text-white font-serif bg-blueish relative flex justify-center items-center p-8">
                    {procedure.details}
                  </div>
                  <div className="w-full h-1/5 lg:px-8 bg-blueish text-white space-x-4 relative flex flex-row justify-start items-center p-8">
                    <span className="icon-[solar--clock-circle-broken]  text-3xl md:text-4xl lg:text-5xl"></span>{" "}
                    <span className="font-bold font-sans text-xl md:text-2xl lg:text-3xl ">
                      Duración:
                    </span>
                    <p className="font-serif text-lg lg:text-2xl">
                      {procedure.duration} aprox.
                    </p>
                  </div>

                  <div className="w-full h-1/5 lg:px-8 text-white bg-blueish space-x-4 relative flex flex-row justify-start items-center p-8">
                    <span className="icon-[solar--money-bag-broken] text-3xl md:text-4xl lg:text-5xl"></span>
                    <span className="font-bold text-xl md:text-2xl lg:text-3xl font-sans">
                      Precio:{" "}
                    </span>
                    <p className="text-lg lg:text-2xl font-serif">
                      desde {procedure.price}
                    </p>
                  </div>
                  <div className="w-full h-1/5 lg:px-8 text-white bg-blueish space-x-4 relative flex justify-center items-center p-8">
                    <button className="w-full flex flex-row justify-center group/arrow items-center transition-all duration-500">
                      <h3 className="font-serif font-normal text-xl md:text-2xl lg:text-3xl group-hover/arrow:underline group-hover/arrow:underline-offset-2">
                        Ver procedimiento
                      </h3>
                      <span
                        className="icon-[solar--arrow-right-broken] hidden lg:block  group-hover/arrow:translate-x-10 transition-all duration-300 text-5xl
                       ml-2"
                      ></span>
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
