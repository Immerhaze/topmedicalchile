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

      const rect = aboutRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const middleScreen = windowHeight / 2;
      const componentMiddle = rect.top + rect.height / 2;

      // Calculate blur effect
      if (componentMiddle <= middleScreen) {
        setBlurAmount(0);
      } else {
        const distanceFromCenter =
          (componentMiddle - middleScreen) / (windowHeight / 2);
        setBlurAmount(Math.min(10, Math.max(0, distanceFromCenter * 10)));
      }

      // Update scroll position
      setScrollY(window.scrollY);

      // Update parallax offset (reduce as it scrolls up)
      setOffsetY(Math.max(0, 100 - window.scrollY * 30)); // Adjust speed factor
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={aboutRef}
      className="relative flex flex-row bg-blueish w-full h-[80vh] transition-all duration-300"
    >
      {/* Left Image */}
      <div
        className=" w-1/2 md:w-1/3 flex  justify-start  items-start md:justify-center md:items-center"
        style={{
          transform: `translateY(${offsetY}px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <img
          src="./pabellonabout.jpg"
          alt="Doctor at a surgery"
          className="object-contain max-w-full h-auto border-white border-r-4 border-b-4 pr-4"
        />
      </div>

      {/* Center Text with Parallax Effect */}
      <div
        className="md:w-1/3 absolute  left-1/2 sm:static  flex flex-col justify-start lg:justify-center  pl-4 md:pl-8 "
        style={{
          transform: `translateY(${scrollY * 0.1}px)`, // Adjust parallax intensity
        }}
      >
        <h1 className=" text-xl  md:text-5xl font-semibold text-white mb-4 font-serif">
          Excelencia en procedimientos estéticos
        </h1>
        <p className="hidden md:flex md:text-lg text-white leading-relaxed font-sans">
          Nos enfocamos en ti, ofreciéndote soluciones estéticas seguras y
          personalizadas, con un equipo de expertos que siempre está al día con
          los últimos avances.
        </p>
      </div>

      {/* Right Image */}
      <div
        className="w-1/2 md:w-1/3   flex justify-end items-end pb-4"
        style={{
          transform: `translateY(${offsetY}px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <img
          src="./statue.jpg"
          alt="Statue of a naked woman"
          className="w-full md:w-3/4 border-white border-l-4 border-t-4 pl-4"
        />
      </div>
    </div>
  );
}
