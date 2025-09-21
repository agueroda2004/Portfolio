import React from "react";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col gap-10">
      <p className="md:text-7xl font-poppins text-5xl">{"404 Not found"}</p>
      <div className="max-h-20 py-5">
        {" "}
        <NavLink
          className="bg-black px-10 py-3 rounded-[10px] font-light max-w-[150px] cursor-pointer hover:-translate-y-[1px] 
        active:translate-y-[2px] hover:bg-white hover:text-black hover:border hover:border-black/10 transition-all duration-300 text-white"
          to={"/"}
        >
          Go back
        </NavLink>
      </div>
    </div>
  );
}
