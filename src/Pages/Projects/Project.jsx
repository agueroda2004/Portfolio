import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Projects } from "../../../data/projects";
import { useMediaPreLoader } from "./Hooks/useMediaPreLoader";
import NotFound from "../Home/NotFound";

const Project = () => {
  const { id } = useParams();
  const project = Projects.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <NotFound />;
  }

  const medialoaded = useMediaPreLoader(project.images, project.video);

  // inicializamos el main como un video
  const [mainMedia, setMainMedia] = useState(
    project.video
      ? {
          type: "video",
          src: project.video,
        }
      : {
          type: "image",
          src: project.images[0],
        }
  );

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

  return (
    <>
      {/* Header */}
      <div className="h-25"></div>
      <div className="w-full flex flex-row justify-center items-center">
        <div className="w-7xl max-w-7xl px-1">
          <div className="flex flex-col items-center space-y-4 min-h-screen">
            {/* Media principal */}
            <div className="w-full border border-black/10 rounded-[5px] md:px-5 xl:px-0">
              {mainMedia.type === "image" ? (
                <img
                  src={mainMedia.src}
                  alt="Main"
                  className="w-full rounded-[5px] transition-opacity duration-500"
                />
              ) : (
                <video
                  src={mainMedia.src}
                  controls
                  muted
                  className="w-full rounded-[5px]"
                />
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex w-full flex-wrap xl:justify-between justify-center gap-5">
              {/* Thumbnail del video */}
              {project.video && (
                <video
                  muted
                  className={`rounded-[5px] md:h-24 h-14 object-cover cursor-pointer hover:opacity-80 border border-black/10`}
                  src={project.video}
                  onClick={() =>
                    setMainMedia({ type: "video", src: project.video })
                  }
                />
              )}

              {/* Thumbnails de imágenes */}
              {project.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumb ${index + 1}`}
                  onClick={() => setMainMedia({ type: "image", src: img })}
                  className={`rounded-[5px] md:h-24 h-14 object-cover cursor-pointer hover:opacity-80 border border-black/10
              `}
                />
              ))}
            </div>
            {/* Info */}
            <div className="w-full my-10 grid grid-cols-1 md:grid-cols-2 text-black/50">
              <div className="py-5 flex flex-col gap-5 border-r text-center xl:text-left xl:pr-5">
                <p className="text-5xl font-poppins font-semibold">
                  {project.name}
                </p>
                <p className="px-5 xl:px-0">{project.description}</p>
              </div>
              <div className="p-5 flex flex-col gap-5 text-center">
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
