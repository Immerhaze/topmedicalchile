"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const aboutRef = useRef(null);
  const [blurAmount, setBlurAmount] = useState(10); // Start fully blurred
  const [scrollY, setScrollY] = useState(0); // Track scroll position
  const [offsetY, setOffsetY] = useState(100); // Start images below view

  useEffect(() => {
    const handleScroll = () => {
      if (!aboutRef.current) return;

      // Update scroll position
      setScrollY(window.scrollY);

      // Update parallax offset (reduce as it scrolls up)
      setOffsetY(Math.max(0, 50 - window.scrollY * 30)); // Adjust speed factor
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={aboutRef}
      className="flex flex-col  bg-blueish py-8  h-screen transition-all duration-300"
    >
      {/* Left Image */}
      <div
        className="w-full h-1/3 lg:h-2/5 flex justify-start items-start  md:items-center"
        style={{
          transform: `translateY(${offsetY}px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <img
          src="./pabellonabout.jpg"
          alt="Doctor at a surgery"
          className="object-cover w-1/2 h-full border-white border-r-4 border-t-4  pr-4"
        />
      </div>

      {/* Center Text with Parallax Effect */}
      <div className="w-full h-1/3 lg:h-1/5 bg-white  relative  flex flex-col justify-center items-center lg:justify-center">
        {/* Background Moving Text */}
        <div className="marquee-text absolute">
          <div className="marquee-text-track text-[9rem] text-black/5 font-sans uppercase whitespace-nowrap font-bold ">
            <p>Ars Medica, Perfectio Vitae</p>
            <p>Summum Medicinae, Summum Officium </p>
            <p>Ad Culmen Medicinae Perfectionis </p>
            <p>Praestantia Medica, Salus Populi</p>
            <p>Medicina Absoluta, Vita Absoluta</p>
            <p>Eximia Medicina, Eximia Cura</p>
            <p aria-hidden="true">Ars Medica, Perfectio Vitae</p>
            <p aria-hidden="true">Summum Medicinae, Summum Officium </p>
            <p aria-hidden="true">Ad Culmen Medicinae Perfectionis </p>
            <p aria-hidden="true">Praestantia Medica, Salus Populi</p>
            <p aria-hidden="true">Medicina Absoluta, Vita Absoluta</p>
            <p aria-hidden="true">Eximia Medicina, Eximia Cura</p>
          </div>
        </div>

        <h1 className=" text-3xl md:text-3xl lg:text-4xl text-center  font-semibold text-blueish mb-4 font-serif">
          Excelencia en procedimientos estéticos
        </h1>
        <p className="hidden md:flex md:text-lg lg:text-xl lg:px-12 text-center font-sem text-blueish leading-relaxed font-sans">
          Nos enfocamos en ti, ofreciéndote soluciones estéticas seguras y
          personalizadas, con un equipo de expertos que siempre está al día con
          los últimos avances.
        </p>
      </div>

      {/* Right Image */}
      <div
        className=" w-full h-1/3 lg:h-2/5 flex justify-end items-end"
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
