"use client"; // For client-side interactivity

import React, { useState, useEffect } from "react";

export default function Navbar({ setView }) {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Show the navbar when scrolling up, hide it when scrolling down
      if (currentScrollPos > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentScrollPos > prevScrollPos) {
        // Scrolling down, hide the navbar
        setIsVisible(false);
      } else {
        // Scrolling up, show the navbar
        setIsVisible(true);
      }

      // Update the previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const navbuttons = [
    "Inicio",
    "Sobre Nosotros",
    "Procedimientos",
    "Equipo Medico",
    "FAQ",
    "Contacto",
  ];

  return (
    <header
      className={`w-full h-[10%] fixed top-0 z-20 flex flex-row ${
        scrolled ? "bg-white/70 shadow-lg" : "bg-none"
      } transition-all duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      {/* Logo */}
      <div className="w-1/2 lg:w-1/3 h-full flex justify-center items-center">
        <span
          className={`font-semibold ${
            scrolled ? "text-blueish" : "text-white"
          } tracking-wider text-2xl lg:text-4xl uppercase`}
        >
          TopMedical
        </span>
      </div>

      <div className="hidden lg:block lg:w-1/3 h-full">
        <ul
          className={`w-full h-full flex flex-row justify-evenly items-center text-3xl ${
            scrolled ? "text-blueish" : "text-white"
          } tracking-wider`}
        >
          <li className=" hover:scale-110 transition-all duration-300 cursor-pointer font-medium font-sans">
            Procedimientos
          </li>
          <li className=" hover:scale-110 transition-all duration-300 cursor-pointer font-medium font-sans">
            Equipo
          </li>
          <li className=" hover:scale-110 transition-all duration-300 cursor-pointer font-medium font-sans">
            Contacto
          </li>
        </ul>
      </div>

      {/* Menu Button */}
      <div className="w-1/2 lg:w-1/3 flex justify-end lg:justify-center items-center p-4">
        <div
          className="bg-blueish p-2 rounded-full flex justify-center items-center  cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="icon-[solar--hamburger-menu-broken] text-white text-3xl lg:text-5xl"></span>
        </div>
      </div>
    </header>
  );
}
