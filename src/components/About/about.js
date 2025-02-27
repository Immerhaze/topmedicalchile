"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const aboutRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [offsetY, setOffsetY] = useState(100);

  useEffect(() => {
    const handleScroll = () => {
      if (!aboutRef.current) return;
      setScrollY(window.scrollY);
      setOffsetY(Math.max(0, 50 - window.scrollY * 30));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={aboutRef}
      className="flex flex-col bg-blueish py-8 h-screen w-screen overflow-x-hidden transition-all duration-300"
    >
      {/* Left Image */}
      <div
        className="w-full h-2/5 lg:h-2/5 flex justify-start items-start md:items-center"
        style={{
          transform: `translateY(${offsetY}px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <img
          src="./pabellonabout.jpg"
          alt="Doctor at a surgery"
          className="object-cover w-1/2 h-full border-white border-r-4 border-t-4 pr-4"
        />
      </div>

      {/* Center Text with Parallax Effect */}
      <div className="w-full h-1/5 bg-[#fafafa] relative flex flex-col justify-center items-center lg:justify-center p-4 lg:px-16">
        {/* Background Moving Text */}
        <div className="marquee-text absolute">
          <div className="marquee-text-track text-[7rem] md:text-[8rem] lg:text-[9rem] text-black/5 font-sans uppercase whitespace-nowrap font-bold">
            <p>Ars Medica, Perfectio Vitae</p>
            <p>Summum Medicinae, Summum Officium</p>
            <p>Ad Culmen Medicinae Perfectionis</p>
            <p>Praestantia Medica, Salus Populi</p>
            <p>Medicina Absoluta, Vita Absoluta</p>
            <p>Eximia Medicina, Eximia Cura</p>
            <p aria-hidden="true">Ars Medica, Perfectio Vitae</p>
            <p aria-hidden="true">Summum Medicinae, Summum Officium</p>
            <p aria-hidden="true">Ad Culmen Medicinae Perfectionis</p>
            <p aria-hidden="true">Praestantia Medica, Salus Populi</p>
            <p aria-hidden="true">Medicina Absoluta, Vita Absoluta</p>
            <p aria-hidden="true">Eximia Medicina, Eximia Cura</p>
          </div>
        </div>

        <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-semibold text-blueish mb-4 font-serif">
          Excelencia en procedimientos estéticos
        </h1>
        <p className="hidden md:flex text-lg  lg:text-xl  lg:px-12 text-center font-medium text-blueish leading-relaxed font-sans">
          Nos enfocamos en ti, ofreciéndote soluciones estéticas seguras y
          personalizadas, con un equipo de expertos que siempre está al día con
          los últimos avances.
        </p>
      </div>

      {/* Right Image */}
      <div
        className="w-full h-2/5 lg:h-2/5 flex justify-end items-end"
        style={{
          transform: `translateY(${offsetY}px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <img
          src="./statue.jpg"
          alt="Statue of a naked woman"
          className="w-1/2 h-full object-cover object-top border-white border-l-4 border-b-4 pl-4"
        />
      </div>
    </div>
  );
}
