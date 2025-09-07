import React, { forwardRef } from "react";

const HeroSection = forwardRef((props, ref) => {
  return (
    <section className="w-full min-h-screen relative" ref={ref}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-1"></div>

      {/* Video */}
      <video
        src="https://ik.imagekit.io/5zi86k8wt/portfolio/HeroPortafolio.mp4?updatedAt=1754497257302"
        loop
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover blur-[3px]"
      ></video>

      <div className="absolute flex flex-col justify-center items-center w-full  h-full md:w-1/2 md:pl-5">
        <div className="z-2 text-white flex flex-col gap-5">
          <h1 className="text-5xl sm:text-8xl">Daniel Agüero</h1>
          <h2 className="text-3xl">Software engineer</h2>
          <button
            className="bg-black px-5 py-3 rounded-[10px] font-light max-w-[150px] cursor-pointer hover:-translate-y-[2px] 
        active:translate-y-[2px] hover:bg-white hover:text-black transition-all duration-300"
          >
            Donwload CSV
          </button>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
