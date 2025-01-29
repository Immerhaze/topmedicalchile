"use client"; // For client-side interactivity

import React, { useState, useEffect } from "react";

export default function Navbar({ setView }) {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // Time for the fade-in effect

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
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
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out p-4 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}
      style={{
        transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
      }}
    >
      <div
        className={`container mx-auto flex items-center justify-between px-4`}
      >
        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <span
            className="bg-white hover:text-lime-400 cursor-pointer transition-all duration-300 hover:scale-110 p-2 rounded-full flex justify-center items-center"
            onClick={() => setMenuOpen(true)}
          >
            <span className="icon-[solar--hamburger-menu-broken] text-xl"></span>
          </span>
          <a
            href="#_"
            className="relative inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden font-medium transition duration-300 ease-out border-2 bg-white rounded-full shadow-md group group-hover:border-white"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-lime-400 group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute uppercase font-bold flex items-center justify-center w-full h-full text-lime-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              Agendar Ahora
            </span>
            <span className="relative invisible text-base">Agendar Ahora</span>
          </a>
        </nav>

        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <span
            className={`text-2xl font-sans tracking-wide font-bold ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            TopMedical Chile
          </span>
        </div>

        {/* Hidden Nav Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen ${
            menuOpen
              ? "opacity-100 backdrop-blur-sm"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Child Menu (Navigation) */}
          <div
            className={`w-2/4 h-full bg-[#fafafa] border-r-8 border-lime-500/40 relative shadow-md flex flex-col justify-evenly p-16 ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div
              className="w-full absolute top-0 left-0 flex justify-start items-center p-4"
              onClick={() => setMenuOpen(false)}
            >
              <span className="icon-[solar--close-circle-broken] text-4xl hover:scale-110 transition-all duration-500 cursor-pointer"></span>
            </div>
            {navbuttons.map((btn, index) => (
              <a
                key={index + btn}
                className={`text-6xl flex group ${
                  index % 2 === 0 ? "pl-16" : "pl-32"
                } cursor-pointer font-serif text-left hover:scale-110`}
              >
                <span className="icon-[tabler--separator] group-hover:text-lime-400"></span>
                {btn}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            className={`focus:outline-none ${
              scrolled ? "text-black" : "text-white"
            }`}
            onClick={() => setMenuOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
