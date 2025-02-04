"use client"; // Enables client-side interactivity

import { useEffect, useState } from "react";

const Inicio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Update the scrollY value on scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up the event listener on component unmount
    };
  }, []);

  // Handle image load to trigger zoom-out effect
  useEffect(() => {
    // Time for the fade-in and slide-down combined
    const timeout = setTimeout(() => {
      setImageLoaded(true);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="relative w-full h-screen section">
      {/* Parallax background image with zoom-out effect */}
      <img
        src="/home.jpg"
        alt="Silueta de cuerpo fit"
        className=" h-screen md:w-full fixed brightness-50 object-cover object-top"
        style={{
          transform: `scale(${1 + scrollY * 0.0001}) scale(${
            imageLoaded ? 1 : 1.2
          })`, // Initial zoom-in and then zoom-out on load
          transition: "transform 1s ease-out", // Smooth zoom-out transition
        }}
      />

      {/* Text content */}
      <div
        className="absolute top-0 w-full h-full flex flex-col space-y-4 justify-center items-center"
        style={{
          transform: `translateY(${-scrollY * 0.4}px)`, // Smooth text movement
          transition: "transform 0.3s ease-out", // Smooth transition for text
        }}
      >
        <h1 className="text-5xl md:text-6l lg:text-8xl  font-semibold text-white font-sans tracking-wide">
          TOPMEDICAL
        </h1>
        <h2 className="text-3xl md:text-4xl   font-normal text-white font-serif tracking-wide">
          CHILE
        </h2>
      </div>
    </section>
  );
};

export default Inicio;
