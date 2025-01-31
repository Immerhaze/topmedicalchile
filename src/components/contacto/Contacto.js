export default function Contact() {
  const Contact = [
    {
      icono: "icon-[solar--phone-broken]",
      data: "+569 6700 4543",
      link: "https://wa.me/56967004543",
    },
    {
      icono: "icon-[solar--inbox-line-broken]",
      data: "topmedicalchile@outlook.com",
      link: "mailto:topmedicalchile@outlook.com",
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
    <section className="relative h-screen flex items-end justify-center">
      {/* Parallax Background */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/santiago2.png')" }}
      ></div>

      {/* Overlay Container */}
      <div className="relative w-full h-2/3 bg-white/50 backdrop-blur-md shadow-lg flex flex-row justify-evenly items-center p-8 rounded-t-xl">
        <div className="w-1/3 h-full flex flex-col justify-center items-center space-y-8">
          <h1 className="text-7xl font-sans font-bold">
            ¡Comunícate con nosotros!
          </h1>
          <p className="text-xl font-serif font-light leading-relaxed tracking-wide">
            ¿Tienes una pregunta o necesitas asistencia? Nuestro equipo en
            TopMedical Chile está aquí para ayudarte. Escríbenos un email o por
            WhatsApp, ¡te esperamos!
          </p>
        </div>

        {/* Contact Information */}
        <div className="w-1/3">
          <div className="mt-6 flex flex-col space-y-4 w-full max-w-lg">
            {Contact.map((via, index) => (
              <a
                key={index}
                href={via.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-4 bg-white flex items-center space-x-4 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300"
              >
                <span className={`${via.icono} text-3xl text-black`}></span>
                <h3 className="text-lg text-gray-900">{via.data}</h3>
              </a>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="mt-6 flex space-x-4">
            {Socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white w-16 h-16 flex justify-center items-center group rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300"
              >
                <span
                  className={`${social.icono} text-4xl text-black group-hover:scale-110 transition-all duration-300`}
                ></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
