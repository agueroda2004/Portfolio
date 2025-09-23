import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Projects } from "../../../data/projects";
import { useMediaPreLoader } from "./Hooks/useMediaPreLoader";
import NotFound from "../Home/NotFound";

const Project = () => {
  const { id } = useParams();
  const project = Projects.find((proj) => proj.id === parseInt(id));

  const [count, setCount] = useState(0);

  if (!project) {
    return <NotFound />;
  }

  const imagesLenght = project.images.length - 1;
  function actualImage() {
    return project.images[count];
  }

  const medialoaded = useMediaPreLoader(project.images);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!medialoaded) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <div className="w-12 h-12 border-4 border-t-black border-gray-300 rounded-full animate-spin"></div>
      </div>
    );
  }

  function handleNextImage() {
    count < imagesLenght ? setCount((count) => count + 1) : setCount(0);
  }

  function handleBackImage() {
    count <= imagesLenght && count > 0
      ? setCount((count) => count - 1)
      : setCount(imagesLenght);
  }

  return (
    <>
      {/* Header */}
      <div className="h-25"></div>
      <div className="w-full flex flex-row justify-center items-center">
        <div className="w-7xl max-w-7xl px-1">
          <div className="flex flex-col items-center space-y-4 min-h-screen mt-10">
            {/* Media principal */}
            <div className="w-full flex flex-col gap-5">
              <img
                src={actualImage()}
                alt=""
                className="border border-black/10 rounded-[5px] "
              />
              <div className="flex flex-row w-full justify-center items-center gap-8">
                <button
                  onClick={handleBackImage}
                  className="bg-white text-black border border-black min-w-24 h-10 rounded-[5px] flex flex-row justify-center items-center opacity-60 hover:-translate-x-1 transition-all duration-300 cursor-pointer hover:opacity-100"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M6 12H18M6 12L11 7M6 12L11 17"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </button>

                <button
                  onClick={handleNextImage}
                  className="bg-white text-black border border-black min-w-24 h-10 rounded-[5px] flex flex-row justify-center items-center opacity-60 hover:translate-x-1 transition-all duration-300 cursor-pointer hover:opacity-100"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M6 12H18M18 12L13 7M18 12L13 17"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </button>
              </div>
            </div>

            {/* Info */}
            <div className="w-full my-10 grid grid-cols-1 md:grid-cols-2 text-black/50">
              <div className="py-5 flex flex-col gap-15 xl:border-r text-center xl:text-left xl:pr-5 mb-15">
                <p className="text-5xl font-poppins font-semibold">
                  {project.name}
                </p>
                <p className="px-5 xl:px-0">{project.description}</p>
                {project.video && (
                  <div className="w-full h-60 xl:h-80 px-2">
                    {project.video}
                  </div>
                )}
              </div>
              <div className="p-5 flex flex-col gap-5 text-center mb-15">
                <p className="text-5xl font-poppins font-semibold">Stack</p>
                <div className="h-10 w-full flex flex-row items-center justify-center">
                  {project.stack.map((stack, index) => (
                    <div key={index} className="w-10 mx-1">
                      {stack.svg}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
