import React, { forwardRef } from "react";

const ProjectsSection = forwardRef((props, ref) => {
  const [stopScroll, setStopScroll] = React.useState(false);
  const cardData = [
    {
      title: "QuickStay",
      image:
        "https://ik.imagekit.io/5zi86k8wt/portfolio/Hotel%20Booking/Img1.png?updatedAt=1756958332941",
    },
    {
      title: "Netflix Clone",
      image:
        "https://ik.imagekit.io/5zi86k8wt/portfolio/Netflix%20Clone/Img2.png?updatedAt=1756958293349",
    },
    {
      title: "CoolStreet",
      image:
        "https://ik.imagekit.io/5zi86k8wt/portfolio/CoolStreet/Img1.png?updatedAt=1756958221509",
    },
    {
      title: "Car Rental",
      image:
        "https://ik.imagekit.io/5zi86k8wt/portfolio/Car%20Rental/Img6.png?updatedAt=1756958647578",
    },
    {
      title: "Hogar Puriscal",
      image:
        "https://ik.imagekit.io/5zi86k8wt/portfolio/Hogar%20Puriscal/Img2.png?updatedAt=1756957839415",
    },
  ];

  return (
    <>
      <style>{`
                .marquee-inner {
                    animation: marqueeScroll linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
      <section
        className="min-h-screen w-full bg-white flex flex-col gap-5 py-8  md:py-20 "
        ref={ref}
      >
        {/* Top row */}
        <div className="flex md:flex-row flex-nowrap gap-5 md:gap-20 w-full h-[200px] mt-5">
          {/* Top text box */}
          <div className="flex-1 border-3 border-black rounded-xl flex items-center px-5 md:px-20 h-full shadow-lg rounded-tl-none rounded-bl-none">
            <span className="text-7xl md:text-8xl font-semibold text-black">
              Top
            </span>
          </div>
          {/* Dark rectangle */}
          <div className="md:w-1/3 bg-[#0c0c14] rounded-xl shadow-lg h-full rounded-tr-none rounded-br-none w-1/3" />
        </div>

        {/* Projects */}
        <div
          className="overflow-hidden w-full relative max-w-6xl mx-auto"
          onMouseEnter={() => setStopScroll(true)}
          onMouseLeave={() => setStopScroll(false)}
        >
          <div className="absolute left-0 top-0 h-full w-10 md:w-40 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
          <div
            className="marquee-inner flex w-fit"
            style={{
              animationPlayState: stopScroll ? "paused" : "running",
              animationDuration: cardData.length * 3000 + "ms",
            }}
          >
            <div className="flex">
              {[...cardData, ...cardData].map((card, index) => (
                <div
                  key={index}
                  className="md:w-[700px] w-[400px] mx-4  relative group hover:scale-90 transition-all duration-300"
                >
                  <img
                    src={card.image}
                    alt="card"
                    className="w-full h-full object-fill"
                  />
                  <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20">
                    <p className="text-white text-lg font-semibold text-center">
                      {card.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute right-0 top-0 h-full w-10 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
        </div>

        {/* Middle row */}
        <div className="flex md:flex-row flex-nowrap gap-5 w-full h-[200px] md:gap-20">
          {/* Dark rectangle */}
          <div className="w-1/3 bg-[#0B0B13]/80 rounded-xl shadow-lg rounded-tl-none rounded-bl-none" />
          {/* Projects text box */}
          <div className="flex-1 border-3 border-black rounded-xl flex items-center justify-end px-2 md:px-20 py-8 rounded-tr-none rounded-br-none shadow-lg">
            <span className="text-6xl md:text-8xl font-light text-black">
              Projects
            </span>
          </div>
        </div>
      </section>
    </>
  );
});

export default ProjectsSection;
