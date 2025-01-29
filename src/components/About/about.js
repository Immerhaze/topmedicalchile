export default function About() {
  return (
    <div className="relative flex flex-row bg-lime-500 w-full h-[80vh]">
      {/* Left Image */}
      <div className="w-1/3 flex justify-center items-center p-32">
        <img
          src="./pabellonabout.jpg"
          alt="Doctor at a surgery"
          className="object-contain max-w-full h-auto"
        />
      </div>
      {/* Center Text */}
      <div className="w-1/3 flex flex-col justify-center p-16">
        <h1 className="text-6xl font-semibold text-black mb-4 font-serif">
          Ofrecemos los mejores procedimientos estéticos
        </h1>
        <p className="text-lg text-black leading-relaxed font-sans">
          Traemos a tu alcance las mejores prácticas y experiencias de la
          cirugía estética, con un enfoque personalizado y de calidad.
        </p>
      </div>
      {/* Right Image */}
      <div className="w-1/3 flex justify-center items-center">
        <img
          src="./statue.jpg"
          alt="Statue of a naked woman"
          className="h-1/3"
        />
      </div>
    </div>
  );
}
