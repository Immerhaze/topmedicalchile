import { useState, useEffect, useRef } from "react";

export default function Steps() {
  const containerRef = useRef(null);
  const [topValue, setTopValue] = useState(33);
  const [imageHeights, setImageHeights] = useState([100, 0, 0, 0]); // First image always 100%
  const [activeText, setActiveText] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [rotation, setRotation] = useState(0); // State for rotation

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollY = window.scrollY;
      const containerOffsetTop = containerRef.current.offsetTop;
      const windowHeight = window.innerHeight;

      const progress = Math.min(
        Math.max(
          (scrollY - containerOffsetTop + windowHeight) / windowHeight,
          0
        ),
        1
      );

      const newTop = 33 - progress * 33;
      setTopValue(newTop);

      // Calculate scale based on scroll position
      const scaleValue = Math.max(1 - progress * 0.5, 0.5); // Scale starts at 1, scales down to 0.5
      setImageHeights((prevHeights) => {
        const newImageHeights = [...prevHeights];
        newImageHeights[0] = 100 * scaleValue; // Apply scale to first image (always full height)
        return newImageHeights;
      });

      // Scroll-based rotation logic
      setRotation(scrollY / 10); // Rotate based on scroll progress

      // Get all text sections
      const textDivs = document.querySelectorAll(".text-section");
      let newImageHeights = [100, 0, 0, 0]; // First image is always full height
      let newActiveText = activeText;

      textDivs.forEach((div, index) => {
        const rect = div.getBoundingClientRect();
        const textTop = rect.top;

        // Logic for next images (not the first)
        if (index !== 0) {
          if (textTop <= 0) {
            newImageHeights[index] = 100;
          } else if (textTop <= windowHeight) {
            const visibilityProgress = 1 - textTop / windowHeight;
            newImageHeights[index] = Math.min(visibilityProgress * 100, 100);
          }
        }

        // Update active text based on image visibility
        if (textTop <= windowHeight / 2) {
          newActiveText = index;
        }
      });

      setImageHeights(newImageHeights);
      setActiveText(newActiveText);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [imageHeights, activeText]);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 1000); // Remove animation class after 1 second

    return () => clearTimeout(timer);
  }, [activeText]); // Trigger animation whenever activeText changes

  const textContent = [
    {
      img: "/steps/step1.png",
      title: "Evaluación",
      number: "01",
      content:
        "Todo comienza con una consulta personalizada donde resolvemos tus dudas y diseñamos el mejor plan para ti. Nuestro equipo te guía en cada detalle, asegurando seguridad y confianza desde el primer momento.",
    },
    {
      img: "/steps/step2.png",
      title: "Preparación",
      number: "02",
      content:
        "Te preparamos para que llegues en óptimas condiciones a tu procedimiento. Desde exámenes hasta recomendaciones clave, todo está diseñado para que vivas una experiencia segura y sin preocupaciones.",
    },
    {
      img: "/steps/step3.png",
      title: "Procedimiento",
      number: "03",
      content:
        "Tu belleza está en manos expertas. Con tecnología avanzada y técnicas de alta precisión, garantizamos resultados naturales y armónicos. Seguridad, profesionalismo y excelencia en cada detalle.",
    },
    {
      img: "/steps/step4.png",
      title: "Posoperatorio",
      number: "04",
      content:
        "Aquí está nuestra mayor diferencia. no solo operamos, te acompañamos en todo el proceso de recuperación. Controles médicos, terapias postoperatorias y atención constante para que tu evolución sea rápida, segura y con los mejores resultados. ¡Nos aseguramos de que ames tu cambio y disfrutes cada paso del proceso!",
    },
  ];

  return (
    <div id="proceso" className="w-full h-auto  flex flex-row bg-blueish">
      <div className="w-full md:w-1/2 h-auto relative">
        <div className="hidden md:block sticky top-0 left-0 w-full h-screen text-white z-10  tracking-wide text-center p-12">
          <div className="h-full font-semibold lg:px-[10%] flex flex-col justify-start items-center">
            <span className="w-full h-1/2  flex flex-col justify-center items-center">
              <span className="text-4xl xl:text-5xl font-bold ">
                {textContent[activeText].number}
              </span>
              <span
                className={`text-5xl xl:text-6xl mb-10 ${
                  isAnimating ? "animate-fade-in-up" : ""
                }`}
              >
                {textContent[activeText].title}
              </span>
            </span>
            <span className="w-full h-1/2  flex justify-end  items-end mb-16">
              <span
                className={`text-lg font-light ${
                  isAnimating ? "animate-fade-in-up" : ""
                }`}
              >
                {textContent[activeText].content}
              </span>
            </span>
          </div>
        </div>
        <div className="relative z-0">
          {textContent.map((content, index) => (
            <div
              key={index}
              className="w-full h-screen flex flex-col justify-center text-left text-section"
            >
              <p className="md:hidden font-semibold p-8 h-full flex flex-col bg-blueish space-y-4 text-white  ">
                <span className="text-2xl font-bold ">{content.number}</span>
                <span className={`text-4xl md:text-5xl`}>{content.title}</span>
                <br />
                <span className={`text-lg md:text-xl font-light`}>
                  {content.content}
                </span>
              </p>
              <img className="md:hidden mb-8" src={content.img} />
            </div>
          ))}
        </div>
      </div>

      {/* Image Container */}
      <div
        ref={containerRef}
        className="hidden md:block containerimg w-1/2 h-screen sticky top-0 bg-blueish"
        style={{
          transform: `translateY(${topValue}%)`,
        }}
      >
        <div
          className="w-1/6 absolute left-[-8.5%] z-30 flex justify-center items-center"
          style={{
            top: "50%",
            transform: `translateY(-50%) rotate(${rotation}deg)`, // Adjusted to use scroll-based rotation
          }}
        >
          <img src="/steps/topmedical.svg" className="bg-cover" />
        </div>
        <div
          className="w-1/6 absolute left-[-8.5%] z-30 flex justify-center items-center"
          style={{
            top: "50%",
            transform: `translateY(-50%) rotate(${-rotation}deg)`, // Adjusted to use scroll-based rotation
          }}
        >
          <img src="/steps/cruz.svg" className="bg-cover" />
        </div>
        {["step1.png", "step2.png", "step3.png", "step4.png"].map(
          (imgSrc, index) => (
            <img
              key={index}
              className={`absolute bottom-0 w-full object-cover ${
                index === 0 ? "h-full" : ""
              }`}
              srcSet={`/steps/${imgSrc} 320w, /steps/medium${imgSrc} 768w`}
              src={`/steps/${imgSrc}`}
              style={
                index !== 0
                  ? {
                      height: `${imageHeights[index]}%`,
                      transition: "height 0.5s ease-in-out",
                    }
                  : {}
              }
            />
          )
        )}
      </div>
    </div>
  );
}
