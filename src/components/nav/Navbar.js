"use client"; // For client-side interactivity

import { Neonderthaw } from "next/font/google";
import React, { useState, useEffect } from "react";

export default function Navbar({ fixed }) {
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
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const navbuttons = [
    { title: "Sobre Nosotros", href: "/" },
    { title: "Procedimientos", href: "/procedimientos" },
    { title: "Equipo Médico", href: "#medicos" },
    { title: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={`w-full h-[10%] fixed top-0 z-50 flex flex-row ${
        fixed && "justify-between bg-white"
      } bg-white border-b-2 `}
    >
      {/* Logo */}
      <div
        className={` ${
          fixed ? "lg:w-1/4" : "w-1/2 lg:w-1/3"
        } h-full flex justify-start lg:justify-center items-center p-4`}
      >
        <a
          href="/"
          className={`font-semibold text-blueish tracking-wider text-2xl md:text-3xl  uppercase select-none cursor-pointer`}
        >
          TopMedical
        </a>
      </div>

      <div
        className={`hidden lg:block ${fixed && "lg:hidden"} lg:w-1/3 h-full `}
      >
        <ul
          className={`w-full h-full flex flex-row justify-center items-center  text-lg md:text-xl  tracking-wider`}
        >
          <li className=" m-4 hover:scale-110 transition-all duration-300 cursor-pointer font-medium font-sans">
            <a href="#procedimientos">Procedimientos</a>
          </li>
          <li className=" m-4 hover:scale-110 transition-all duration-300 cursor-pointer font-medium font-sans">
            <a href="#medicos">Equipo</a>
          </li>
          <li className=" m-4 hover:scale-110 transition-all duration-300 cursor-pointer font-medium font-sans">
            <a href="#proceso">Proceso</a>
          </li>
          <li className=" m-4 hover:scale-110 transition-all duration-300 cursor-pointer font-medium font-sans">
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </div>

      {/* Menu Button */}
      <div className={`w-1/2 lg:w-1/3 flex justify-end   items-center p-4`}>
        <div
          className={` m-4 bg-blueish p-2 rounded-full flex justify-center items-center cursor-pointer`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="icon-[solar--hamburger-menu-broken] text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl"></span>
        </div>
      </div>

      {/* Hidden Menu */}
      <div
        className={`hidden_menu fixed inset-0 bg-blueish/40 backdrop-blur-lg flex justify-end transition-all duration-300 ${
          menuOpen ? "opacity-100  delay-300" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`w-2/3 lg:w-1/2 xl:w-1/3 h-full bg-white border-l-4 border-blueish flex flex-col transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-2/6 w-full flex flex-col justify-start items-center relative">
            <span
              className="w-full h-auto relative flex justify-end p-4"
              onClick={() => setMenuOpen(false)}
            >
              <span className="icon-[solar--close-circle-broken] text-blueish text-3xl"></span>
            </span>
            <span className="w-full h-full flex flex-col justify-center items-center">
              <h1 className="text-blueish text-3xl md:text-4xl font-bold">
                TOPMEDICAL
              </h1>
              <h2 className="text-blueish text-xl md:text-2xl font-semibold">
                Chile
              </h2>
            </span>
          </div>
          <ul className="h-5/6 w-full flex flex-col justify-center items-start space-y-8 p-8">
            {navbuttons.map((button, index) => (
              <li
                key={index}
                className="text-blueish text-lg md:text-xl lg:text-2xl font-medium cursor-pointer hover:text-blueish/70 transition-colors"
              >
                <a href={button.href}>{button.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
