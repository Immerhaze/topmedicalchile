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
    <section className="h-screen w-full flex items-end justify-center relative py-40 my-16">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center   "
        style={{ backgroundImage: "url('/santiago2.png')" }}
      ></div>

      {/* Overlay Container */}
      <div className="relative w-full h-full  bg-[url('/santiago2.png')]  bg-no-repeat bg-cover   shadow-lg flex flex-col lg:flex-row justify-evenly items-center p-4 md:p-8 overflow-hidden">
        <div className="w-full h-full block bg-white/90 absolute top-0"></div>

        <div className="w-full h-1/2 flex flex-col justify-center items-start space-y-8 lg:px-16 z-10">
          <h1 className="text-4xl md:text-5xl font-sans font-bold text-blueish">
            ¡Comunícate con nosotros!
          </h1>
          <p className="text-sm md:text-xl lg:text-3xl font-serif font-light leading-relaxed tracking-wide">
            ¿Tienes una pregunta o necesitas asistencia? Nuestro equipo en
            TopMedical Chile está aquí para ayudarte. Escríbenos un email o por
            WhatsApp, ¡te esperamos!
          </p>
        </div>

        {/* Contact Information */}
        <div className="w-full h-1/2 md:flex md:justify-center md:items-center md:flex-col lg:px-8 z-10">
          <div className="mt-6 flex flex-col space-y-4 w-full max-w-lg">
            {Contact.map((via, index) => (
              <a
                key={index}
                href={via.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-4 bg-white flex items-center space-x-4 rounded-lg group  shadow-blueish shadow-md lg:hover:bg-blueish  transition-all duration-300"
              >
                <span
                  className={`${via.icono} text-xl lg:text-3xl xl:text-4xl text-blueish lg:group-hover:text-white`}
                ></span>
                <h3 className="text-base lg:text-2xl xl:text-3xl text-gray-900 lg:group-hover:text-white">
                  {via.data}
                </h3>
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
                className="bg-white p-4 flex justify-center items-center group rounded-lg shadow-md shadow-blueish lg:hover:bg-blueish transition-all duration-300"
              >
                <span
                  className={`${social.icono} text-4xl lg:text-5xl xl:text-6xl  text-black lg:group-hover:text-white lg:group-hover:scale-110 transition-all duration-300`}
                ></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
