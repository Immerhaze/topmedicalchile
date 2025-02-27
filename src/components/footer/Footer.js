export default function Footer() {
  return (
    <footer className="bg-blueish relative h-[50vh] flex flex-col justify-center items-center">
      <div className="text-center">
        <p className="text-base md:text-xl  text-white">
          © {new Date().getFullYear()} TopMedical Chile. Todos los derechos
          reservados.
        </p>
        <nav className="mt-4 flex text-xs md:text-xl justify-center space-x-6">
          <a
            href="/privacy-policy"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Política de Privacidad
          </a>
          <a
            href="/terms-of-service"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Términos del Servicio
          </a>
          <a
            href="/contact"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Contáctanos
          </a>
        </nav>
      </div>
      <div className="w-full h-1/6 absolute bottom-0 flex justify-center items-center text-lg ">
        <h3 className="text-gray-400">
          Página web por{" "}
          <a className="underline text-white cursor-pointer">Nicolascode</a>
        </h3>
      </div>
    </footer>
  );
}
