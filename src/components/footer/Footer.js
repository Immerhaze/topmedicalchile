export default function Footer() {
  return (
    <footer className="bg-blueish relative  bg-[#FAFAFA] h-[50vh] flex flex-col justify-center items-center">
      <div className="text-center">
        <p className="text-sm text-white">
          © {new Date().getFullYear()} TopMedical Chile. Todos los derechos
          reservados.
        </p>
        <nav className="mt-4 flex justify-center space-x-6">
          <a
            href="/privacy-policy"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            Política de Privacidad
          </a>
          <a
            href="/terms-of-service"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            Términos del Servicio
          </a>
          <a
            href="/contact"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            Contáctanos
          </a>
        </nav>
      </div>
    </footer>
  );
}
