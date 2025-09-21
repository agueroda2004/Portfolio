import React from "react";
import { useLocation, useMatch } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isProjectPage = useMatch("/project/:id");
  const className = isProjectPage
    ? "bg-white border-black/10 text-black"
    : "bg-black border-white/10 text-white";
  return (
    <div
      className={`w-full flex flex-col justify-center items-center pt-30 pb-20 lg:pt-20 lg:pb-10 gap-10 border-t   ${className}`}
    >
      <p className={`font-poppins text-5xl  text-current/50`}>DevDaniel</p>
      {/* Contactos */}
      <div
        className={` font-poppins w-full flex flex-col justify-center items-center gap-5 max-w-64  text-current/50`}
      >
        <p>Contact</p>
        <p className="font-poppins underline flex flex-row gap-1">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6"
          >
            <path
              d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <rect
              x="3"
              y="5"
              width="18"
              height="14"
              rx="2"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            ></rect>{" "}
          </svg>
          agueroda2004@gmail.com
        </p>
        {/* Links */}
        <div className="w-full h-8 text-current flex flex-row items-center justify-center gap-1">
          {/* GitHub */}
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="h-full cursor-pointer hover:-translate-y-[2px] 
        active:translate-y-[1px] transition-all duration-200"
          >
            <path
              d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"
              className="hover:shadow"
            ></path>
          </svg>
          {/* LinkedIn */}
          <svg
            fill="currentColor"
            viewBox="0 0 256 256"
            id="Flat"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full cursor-pointer hover:-translate-y-[2px] 
        active:translate-y-[1px] transition-all duration-200"
          >
            <path d="M212,28H44A16.01817,16.01817,0,0,0,28,44V212a16.01833,16.01833,0,0,0,16,16H212a16.01833,16.01833,0,0,0,16-16V44A16.01817,16.01817,0,0,0,212,28ZM96,176.001a8,8,0,1,1-16,0v-64a8,8,0,0,1,16,0ZM88,92a12,12,0,1,1,12-12A12,12,0,0,1,88,92Zm96,84.001a8,8,0,1,1-16,0v-36a20,20,0,0,0-40,0v36a8,8,0,1,1-16,0v-64a7.99729,7.99729,0,0,1,15.79492-1.77857A35.98125,35.98125,0,0,1,184,140.001Z"></path>
          </svg>
          {/* Instagram */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full cursor-pointer hover:-translate-y-[2px] 
        active:translate-y-[1px] transition-all duration-200"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11ZM18 7.5C18 8.32843 17.3284 9 16.5 9C15.6716 9 15 8.32843 15 7.5C15 6.67157 15.6716 6 16.5 6C17.3284 6 18 6.67157 18 7.5ZM14 13C14 14.1046 13.1046 15 12 15C10.8954 15 10 14.1046 10 13C10 11.8954 10.8954 11 12 11C13.1046 11 14 11.8954 14 13ZM16 13C16 15.2091 14.2091 17 12 17C9.79086 17 8 15.2091 8 13C8 10.7909 9.79086 9 12 9C14.2091 9 16 10.7909 16 13Z"
              fill="currentColor"
            ></path>{" "}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Footer;
