import React, { forwardRef } from "react";

const AboutMeSection = forwardRef((props, ref) => {
  return (
    <section
      className="min-h-screen w-full flex justify-center py-30 mt-[100px]  items-center"
      ref={ref}
    >
      <div className="md:w-[700px] md:h-[800px] flex flex-col justify-center items-center relative w-[500px] overflow-hidden h-[600px] lg:w-[600px] lg:h-[600px] xl:w-[750px] xl:h-[800px]">
        <div className="md:w-[400px] md:h-[400px] size-72 bg-black absolute md:top-0 md:left-10 rounded-[10px] top-0 -left-10 lg:size-72 xl:size-90"></div>
        <p className="absolute md:-right-25 md:top-30 rotate-90 md:text-9xl font-semibold -right-30 top-22 text-8xl sm:-right-40 lg:text-[110px] lg:top-25 lg:-right-22 xl:text-9xl xl:top-30 xl:-right-30">
          About
        </p>
        <div className="z-1 flex flex-col relative">
          <div className="md:max-w-[400px] md:w-[400px] w-[300px] h-full bg-black opacity-50 absolute z-2 rounded-[10px] lg:w-[350px] xl:w-[450px] xl:max-w-[450px]"></div>
          <p className="absolute text-white z-3 p-5 text-[20px] opacity-90">
            Hi!, I’m <span className="text-black">Daniel</span>. I’m 21 years
            old and I really enjoy coding a developing websites, desktop and
            mobile apps.
          </p>
          <img
            src="https://ik.imagekit.io/5zi86k8wt/portfolio/About%20me.jpeg?updatedAt=1756687959924"
            alt=""
            className="md:max-w-[400px] rounded-[10px] scale-x-[-1] max-w-[300px] lg:w-[350px] xl:max-w-[450px] xl:w-[450px]"
          />
        </div>

        <p className="absolute md:bottom-0 md:left-10 md:text-9xl font-semibold -bottom-1 left-0 text-8xl lg:left-5 lg:-bottom-2 lg:text-[110px] xl:text-9xl">
          Me
        </p>
        <div className="md:w-[400px] md:h-[400px] size-64 bg-black/80 absolute md:bottom-0 md:right-10 rounded-[10px]  -right-10 bottom-0 lg:size-72 xl:size-90"></div>
      </div>
    </section>
  );
});

export default AboutMeSection;
