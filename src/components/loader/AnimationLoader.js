import React, { useState, useEffect } from "react";

export default function AnimationLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    // Disable scrolling when the animation is visible
    document.body.style.overflow = "hidden";

    // Timeout for the fade-in effect and slide-down transition
    const timeout = setTimeout(() => {
      setAnimationCompleted(true);
    }, 2000); // Time for the fade-in and slide-down combined

    // Re-enable scrolling after the animation ends
    const removeTimeout = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "auto";
    }, 4000); // Duration until the overlay completely disappears

    return () => {
      clearTimeout(timeout);
      clearTimeout(removeTimeout);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 bg-blueish flex items-center justify-center transition-all ${
        animationCompleted ? "translate-y-full" : "opacity-100"
      } z-50`}
      style={{
        transition: "transform 1500ms ease-out, opacity 1s ease-in-out",
        overflow: "hidden",
      }}
    >
      {/* <div
       className={`fixed w-full h-full bg-red-200 flex items-center justify-center z-50 transition-all`}
     > */}
      <div
        className={`flex flex-col justify-center items-center text-white  space-y-8 transition-opacity duration-1000`}
      >
        <h1 className="text-8xl font-semibold text-white font-sans tracking-wide">
          TOPMEDICAL
        </h1>
        <h2 className="text-3xl font-normal text-white font-serif tracking-wide">
          CHILE
        </h2>
      </div>
    </div>
  );
}
