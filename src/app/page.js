"use client"; // Enables client-side interactivity

import Contact from "@/components/contacto/Contacto";
import Inicio from "@/components/Inicio/Inicio";
import Footer from "@/components/footer/Footer";
import Doctors from "@/components/medicos/Medicos";
import Navbar from "@/components/nav/Navbar";
import Procedures from "@/components/procedimientos/Procedimientos";
import AnimationLoader from "@/components/loader/AnimationLoader";
import About from "@/components/About/about";
import Steps from "@/components/steps/Steps";

export default function Home() {
  return (
    <div className="h-auto w-full bg-[#fafafa] ">
      <AnimationLoader />
      <Navbar />
      <Inicio />
      <About />
      <Procedures />
      <Doctors />
      <Steps />
      <Contact />
      <Footer />
    </div>
  );
}
