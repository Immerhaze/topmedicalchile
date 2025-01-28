export default function Contact() {
  const Contact = [
    {
      icono: "icon-[solar--phone-broken]",
      data: "+569 123 456 78",
      link: "https://wa.me/56912345678",
    },
    {
      icono: "icon-[solar--inbox-line-broken]",
      data: "equipo@topmedicachile.cl",
      link: "mailto:equipo@topmedicachile.cl",
    },
  ];

  const Socials = [
    {
      icono: "icon-[prime--instagram]",
      link: "https://instagram.com",
    },
    {
      icono: "icon-[fa6-brands--facebook]",
      link: "https://facebook.com",
    },
  ];

  return (
    <section className="relative h-screen bg-[#FAFAFA] flex flex-row items-end py-12 section">
      <div className="w-2/3 h-1/2 flex justify-center items-center">
        <div className="w-1/2 h-full flex flex-col justify-center space-y-8">
          <h1 className="text-7xl font-sans font-bold">
            Comunícate con nosotros!
          </h1>
          <p className="text-xl font-serif font-light leading-relaxed tracking-wide">
            ¿Tienes una pregunta o necesitas asistencia? Nuestro equipo en
            TopMedical Chile está aquí para ayudarte. Escríbenos un email o por
            WhatsApp, ¡te esperamos!
          </p>
        </div>
      </div>
      <div className="w-1/2 h-1/2 flex flex-col justify-center items-center space-y-4">
        <div className="w-2/3 h-full shadow-md flex flex-col justify-center items-center space-y-4 bg-gray-400/40 rounded-lg p-8">
          {/* WhatsApp and Email Links */}
          {Contact.map((via, index) => (
            <a
              key={index}
              href={via.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-1/5 bg-white p-4 flex flex-row items-center space-x-4 rounded-md group transition-all duration-300 "
            >
              <span
                className={`${via.icono} text-3xl font-bold text-black group-hover:scale-110`}
              ></span>
              <h3 className="text-lg font-light tracking-wide font-sans">
                {via.data}
              </h3>
            </a>
          ))}

          {/* Social Media Icons */}
          <div className="w-full flex flex-row justify-start space-x-4">
            {Socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white w-16 h-16 flex group justify-center items-center rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300 "
              >
                <span
                  className={`${social.icono} ${
                    index == 0 ? "text-4xl" : "text-3xl"
                  } text-black group-hover:scale-110`}
                ></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
