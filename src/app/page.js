"use client"; // Enables client-side interactivity

import Contact from "@/components/contacto/Contacto";
import Inicio from "@/components/Inicio/Inicio";
import Footer from "@/components/footer/Footer";
import Doctors from "@/components/medicos/Medicos";
import Navbar from "@/components/nav/Navbar";
import Procedures from "@/components/procedimientos/Procedimientos";
import AnimationLoader from "@/components/loader/AnimationLoader";
import About from "@/components/About/about";

export default function Home() {
  return (
    <div className="scroll-container">
      <AnimationLoader />
      <Navbar />
      <main>
        <Inicio />
        <About />
        <Procedures />
        <Doctors />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
