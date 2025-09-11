import React, { forwardRef } from "react";
import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";
import { topProjects } from "../../../data/projects";

const ProjectsSection = forwardRef((props, ref) => {
  return (
    <>
      <section
        className="min-h-screen w-full bg-white flex flex-col gap-5 py-8  md:py-20 md:mt-10 justify-center items-center mb-20"
        ref={ref}
      >
        {/* Top row */}
        <div className="flex md:flex-row flex-nowrap gap-4 md:gap-4 w-full h-[200px] mt-5  xl:h-[200px]">
          {/* Top text box */}
          <div className="flex-1 border-3 border-black rounded-xl flex items-center px-5 md:px-20 h-full shadow-lg rounded-tl-none rounded-bl-none border-l-0">
            <span className="text-7xl md:text-8xl font-semibold text-black lg:text-7xl">
              Top
            </span>
          </div>
          {/* Dark rectangle */}
          <div className="md:w-1/3 bg-[#0c0c14] rounded-xl shadow-lg h-full rounded-tr-none rounded-br-none w-1/3" />
        </div>

        {/* Projects */}
        <div className="w-full relative xl:w-1/2 overflow-x-hidden">
          <div className="absolute left-0 top-0 h-full w-10 md:w-40 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
          <Marquee speed={150} direction="left">
            <div className="flex">
              {[...topProjects, ...topProjects].map((card) => (
                <NavLink
                  key={card.id}
                  className="md:w-[700px] w-[500px] mx-4  relative group  transition-all duration-300 cursor-pointer hover:scale-95"
                  to={`/project/${card.id}`}
                >
                  <img
                    src={card.image}
                    alt="card"
                    className="w-full h-full object-fill"
                  />
                </NavLink>
              ))}
            </div>
          </Marquee>
          <div className="absolute right-0 top-0 h-full w-10 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
        </div>

        {/* Middle row */}
        <div className="flex md:flex-row flex-nowrap gap-4 w-full h-[200px] md:gap-4  lg:h-[20vh] xl:h-[200px]">
          {/* Dark rectangle */}
          <div className="w-1/3 bg-[#0B0B13]/80 rounded-xl shadow-lg rounded-tl-none rounded-bl-none " />
          {/* Projects text box */}
          <div className="flex-1 border-3 border-black rounded-xl flex items-center justify-end px-2 md:px-20 py-8 rounded-tr-none rounded-br-none shadow-lg border-r-0">
            <span className="text-6xl md:text-8xl font-light text-black lg:text-7xl">
              Projects
            </span>
          </div>
        </div>
      </section>
    </>
  );
});

export default ProjectsSection;
