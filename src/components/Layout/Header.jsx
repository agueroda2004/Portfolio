import React, { useEffect, useReducer, useRef } from "react";
import Logo from "../../assets/logo.svg";
import { useLocation, useMatch, useSearchParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";

const initialState = {
  inicio: true,
  stack: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_INICIO":
      return { ...state, inicio: action.payload };
    case "SET_STACK":
      return { ...state, stack: action.payload };
    default:
      return state;
  }
}

const Header = ({ heroRef, stackRef, aboutRef, projectsRef }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navHeader = useRef(null);
  const location = useLocation();
  const isProjectPage = useMatch("/project/:id");
  const isWhite = state.inicio || state.stack || location.pathname === "/stack";
  const isBlack = !state.inicio || isProjectPage;

  function handleClick() {
    toast.success("Working...", {
      icon: "🚀",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  }

  const scrollTo = (ref) =>
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const scrollToStart = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const nav = navHeader.current;

    const hero = heroRef?.current;
    if (!nav || !hero) return;

    const stickyNav = (entries) => {
      const [entry] = entries;
      dispatch({ type: "SET_INICIO", payload: entry.isIntersecting });
    };

    const observer = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
      rootMargin: `-60px`,
    });

    observer.observe(hero);
    return () => {
      if (hero) observer.unobserve(hero);
    };
  }, [heroRef, location]);

  useEffect(() => {
    const stack = stackRef?.current;
    const nav = navHeader?.current;
    if (!nav || !stack) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const top = stack.getBoundingClientRect().top;
          const isAtTop = top <= 50;
          dispatch({ type: "SET_STACK", payload: isAtTop });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [stackRef, location]);

  return (
    <div
      className="w-full pt-2 flex justify-center items-center fixed z-100 px-2 md:px-2 md:pt-2"
      ref={navHeader}
    >
      <div
        className={`w-full rounded-[8px] flex flex-row h-[80px] items-center justify-between px-5 shadow-[0_0_25px_rgba(0,0,0,0.3)] border border-gray-950/10
          ${state.inicio && location.pathname === "/" && "bg-transparent"}
          ${state.stack && "bg-transparent border border-white/10"}
          ${
            location.pathname === "/stack" &&
            "bg-transparent border border-white/10"
          }
    backdrop-blur-xs transition-all duration-75 relative`}
      >
        {/* Logo */}
        <NavLink
          onClick={() => scrollToStart()}
          className="cursor-pointer"
          to="/"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`h-10 ${isWhite ? "fill-white" : ""} ${
              isBlack ? "fill-black" : ""
            }`}
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
                d="M14.9615 5.27473C15.1132 4.7437 14.8058 4.19021 14.2747 4.03849C13.7437 3.88677 13.1902 4.19426 13.0385 4.72529L9.03847 18.7253C8.88675 19.2563 9.19424 19.8098 9.72528 19.9615C10.2563 20.1133 10.8098 19.8058 10.9615 19.2747L14.9615 5.27473Z"
                fill="current"
              ></path>{" "}
              <path
                d="M5.7991 7.39879C6.13114 7.84012 6.04255 8.46705 5.60123 8.7991L2.40894 11.2009C1.87724 11.601 1.87723 12.399 2.40894 12.7991L5.60123 15.2009C6.04255 15.533 6.13114 16.1599 5.7991 16.6012C5.46705 17.0426 4.84012 17.1311 4.39879 16.7991L1.20651 14.3973C-0.388615 13.1971 -0.388621 10.8029 1.2065 9.60276L4.39879 7.20093C4.84012 6.86889 5.46705 6.95747 5.7991 7.39879Z"
                fill="current"
              ></path>{" "}
              <path
                d="M18.2009 16.6012C17.8689 16.1599 17.9575 15.533 18.3988 15.2009L21.5911 12.7991C22.1228 12.399 22.1228 11.601 21.5911 11.2009L18.3988 8.7991C17.9575 8.46705 17.8689 7.84012 18.2009 7.39879C18.533 6.95747 19.1599 6.86889 19.6012 7.20093L22.7935 9.60276C24.3886 10.8029 24.3886 13.1971 22.7935 14.3973L19.6012 16.7991C19.1599 17.1311 18.533 17.0426 18.2009 16.6012Z"
                fill="current"
              ></path>{" "}
            </g>
          </svg>
        </NavLink>

        {/* links */}
        {location.pathname !== "/" ? null : (
          <div
            className={`flex-row gap-10 font-light h-full hidden md:flex absolute left-1/2 -translate-x-1/2 items-center ${
              state.inicio
                ? "text-white"
                : state.stack
                ? "text-white"
                : "text-black"
            } transition-all duration-75`}
          >
            <button
              className={`hover:border-b ${
                state.inicio
                  ? "border-white/50"
                  : state.stack
                  ? "border-white/50"
                  : "border-black/50"
              }  hover:-translate-y-[1px] 
        active:translate-y-[1px] transition-transform duration-200 cursor-pointer`}
              onClick={() => scrollTo(aboutRef)}
            >
              About me
            </button>
            <button
              className={`hover:border-b ${
                state.inicio
                  ? "border-white/50 "
                  : state.stack
                  ? "border-white/50"
                  : "border-black/50"
              }  hover:-translate-y-[1px] 
        active:translate-y-[1px] transition-transform duration-200 cursor-pointer`}
              onClick={() => scrollTo(projectsRef)}
            >
              Top projects
            </button>
            <button
              className={`hover:border-b ${
                state.inicio
                  ? "border-white/50 "
                  : state.stack
                  ? "border-white/50"
                  : "border-black/50"
              }  hover:-translate-y-[1px] 
        active:translate-y-[1px] transition-transform duration-200 cursor-pointer`}
              onClick={() => scrollTo(stackRef)}
            >
              Top stack
            </button>
          </div>
        )}

        {/* condicionales */}
        <div>
          {!state.inicio && location.pathname === "/" && (
            <button
              className={`border border-black/70 px-5 py-2 rounded-[10px] font-light hover:-translate-y-[1px] 
        active:translate-y-[1px] transition-all duration-200 cursor-pointer hover:bg-white hover:text-black bg-black text-white hidden md:flex`}
              onClick={handleClick}
            >
              Download CSV
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
