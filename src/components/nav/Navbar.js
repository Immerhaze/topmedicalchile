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
      className={`fixed flex flex-row top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out p-4 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}
      style={{
        transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
      }}
    >
      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <span
          className="bg-white lg:hover:text-blueish shadow-md cursor-pointer transition-all duration-300 lg:hover:scale-110 p-2 rounded-full flex justify-center items-center"
          onClick={() => setMenuOpen(true)}
        >
          <span className="icon-[solar--hamburger-menu-broken] text-3xl text-blueish"></span>
        </span>
      </div>
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <span
            className="bg-white lg:hover:text-blueish shadow-md cursor-pointer transition-all duration-300 lg:hover:scale-110 p-2 rounded-full flex justify-center items-center "
            onClick={() => setMenuOpen(true)}
          >
            <span className="icon-[solar--hamburger-menu-broken] text-3xl"></span>
          </span>
          <a
            href="#_"
            className="relative inline-flex items-center justify-center p-4 px-10 py-3 overflow-hidden font-medium transition duration-300 ease-out border-2 bg-white rounded-full shadow-md group lg:group-hover:border-white"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blueish lg:group-hover:translate-x-0 ease">
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
            <span className="absolute uppercase font-semibold tracking-wide flex flex-row items-center justify-center w-full h-full text-blueish transition-all duration-300 transform lg:group-hover:translate-x-full ease space-x-2">
              <span className="icon-[logos--whatsapp-icon] text-2xl lg:text-3xl "></span>
              <h2 className="text-base">Agendar</h2>
            </span>
            <span className="relative invisible text-base">Agendar</span>
          </a>
        </nav>

        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <span className="text-2xl font-sans tracking-wide font-bold text-white">
            TopMedical Chile
          </span>
        </div>

        {/* Hidden Nav Menu (Mobile) */}
        <div
          className={`fixed top-0 left-0 w-full h-screen ${
            menuOpen
              ? "opacity-100 backdrop-blur-md"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Child Menu (Navigation) */}
          <div
            className={`w-4/5 md:w-2/3 h-full bg-[#fafafa] border-r-8 border-blue-400 relative shadow-md flex flex-col justify-evenly p-16 transition-all duration-500 ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div
              className="w-full absolute top-0 left-0 flex justify-start items-center p-4"
              onClick={() => setMenuOpen(false)}
            >
              <span className=" text-blueish icon-[solar--close-circle-broken] text-4xl lg:hover:scale-110 transition-all duration-500 cursor-pointer"></span>
            </div>
            {navbuttons.map((btn, index) => (
              <a
                key={index + btn}
                className={` text-xl md:text-4xl lg:text-5xl flex group ${
                  index % 2 === 0 ? "md:pl-10" : "md:pl-20"
                } cursor-pointer font-serif text-left lg:hover:scale-110 transition-all duration-300`}
              >
                <span className="icon-[tabler--separator] text-blue-500 lg:group-hover:text-blue-500"></span>
                <h2 className="text-gray-600 lg:group-hover:text-black">
                  {btn}
                </h2>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
