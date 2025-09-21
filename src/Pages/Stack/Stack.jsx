import React, { useEffect } from "react";
import Carrousel from "../../components/Home/Carrousel";
import {
  appsOthersStack,
  backStack,
  databaseStack,
  frontStack,
} from "../../../data/stack";

const Stack = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Header */}
      <div className="w-full h-20 bg-black"></div>
      <div className="min-h-screen w-full bg-black">
        <div className="max-w-[900px] mx-auto">
          {/* Frontend */}
          <div className="min-h-screen w-full flex flex-col justify-center items-center">
            <h1 className="font-poppins text-6xl text-white/50 font-semibold">
              Frontend
            </h1>
            <Carrousel data={frontStack} />
          </div>
          {/* Backend */}
          <div className="min-h-screen w-full flex flex-col justify-center items-center">
            <h1 className="font-poppins text-6xl text-white/50 font-semibold">
              Backend
            </h1>
            <Carrousel data={backStack} />
          </div>
          {/* Apps & Others */}
          <div className="min-h-screen w-full flex flex-col justify-center items-center">
            <h1 className="font-poppins text-6xl text-white/50 font-semibold w-full text-center">
              Apps & Others
            </h1>
            <Carrousel data={appsOthersStack} />
          </div>
          {/* Database */}
          <div className="min-h-screen w-full flex flex-col justify-center items-center md:w-8/12 mx-auto">
            <h1 className="font-poppins text-6xl text-white/50 font-semibold">
              Database
            </h1>
            <Carrousel data={databaseStack} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
