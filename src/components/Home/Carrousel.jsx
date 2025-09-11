import React from "react";

import Marquee from "react-fast-marquee";

function hexToRgba(hex, alpha = 0.4) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

const Carrousel = ({ data, widht }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="relative w-full py-10 h-[500px]">
        <Marquee speed={150} direction="left">
          {data.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center h-90 w-50 text-white rounded-lg relative mx-10 my-10"
              style={{
                backgroundColor: hexToRgba(card.color, 0.6),
                boxShadow: `4px 4px 10px ${card.color}`,
              }}
            >
              <div className="w-40 absolute -top-5 -right-15">{card.svg}</div>
              <span
                className="mt-2 absolute text-6xl bottom-20 -left-15 -rotate-90 font-poppins font-bold w-full"
                style={{
                  textShadow: `4px 4px 20px ${card.color}`,
                }}
              >
                {card.name}
              </span>
            </div>
          ))}
        </Marquee>

        {/* Gradientes laterales */}
        <div className="absolute left-0 top-0 h-full w-16 pointer-events-none bg-gradient-to-r from-white to-transparent z-2" />
        <div className="absolute right-0 top-0 h-full w-16 pointer-events-none bg-gradient-to-l from-white to-transparent z-2" />
      </div>
    </div>
  );
};

export default Carrousel;
