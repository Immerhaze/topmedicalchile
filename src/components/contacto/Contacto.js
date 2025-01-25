export default function Contact() {
  return (
    <section className="relative bg-[#FAFAFA] py-12 section">
      <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between gap-8 px-4">
        {/* Left Column */}
        <div className="lg:w-1/2 flex flex-col items-start space-y-6">
          <img src="/logo.png" alt="Logo" className="w-32 h-auto" />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Contáctanos</h2>
            <p className="text-gray-600 mt-2">
              Estamos aquí para ayudarte. Escríbenos o visita nuestras redes
              sociales.
            </p>
          </div>
          <div>
            <p className="text-gray-800">
              📍 <strong>Dirección:</strong> Av. Providencia 1234, Santiago,
              Chile
            </p>
            <p className="text-gray-800">
              📧 <strong>Email:</strong> contacto@topmedical.cl
            </p>
            <p className="text-gray-800">
              📞 <strong>Teléfono:</strong> +56 9 1234 5678
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-800"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600"
            >
              Twitter
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800">
            Formulario de Contacto
          </h2>
          <form className="mt-6 space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Tu nombre"
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Tu correo"
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Asunto del mensaje"
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Escribe tu mensaje aquí..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
