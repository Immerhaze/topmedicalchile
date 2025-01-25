"use client"; // For client-side interactivity

import React, { useState, useEffect } from "react";

export default function Navbar({ setView }) {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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
    }, 2000); // Time for the fade-in effect

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      } ${scrolled ? "bg-white shadow-lg h-16" : "bg-transparent h-20"}`}
      style={{
        transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
      }}
    >
      <div
        className={`container mx-auto flex items-center justify-between px-4 ${
          scrolled ? "py-2" : "py-4"
        } transition-all duration-500 ease-in-out`}
      >
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="Logo"
            className={`h-10 w-10 transition-transform duration-500 ease-in-out ${
              scrolled ? "scale-90" : "scale-100"
            }`}
          />
          <span
            className={`text-xl font-bold transition-colors duration-500 ease-in-out ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            Top Medical Chile
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <button
            className={`transition-colors duration-500 ease-in-out ${
              scrolled
                ? "text-black hover:text-blue-500"
                : "text-white hover:text-blue-300"
            }`}
            onClick={() => setView("contact")}
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            className={`focus:outline-none transition-colors duration-500 ease-in-out ${
              scrolled ? "text-black" : "text-white"
            }`}
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
