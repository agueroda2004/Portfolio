import React, { useEffect, useReducer, useRef } from "react";
import Logo from "../../assets/logo.svg";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

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
          ${
            state.inicio
              ? "bg-transparent"
              : state.stack
              ? "bg-transparent"
              : "bg-white/80"
          }
    backdrop-blur-xs transition-all duration-75 relative`}
      >
        {/* Logo */}
        <NavLink
          onClick={() => scrollToStart()}
          className="cursor-pointer"
          to="/"
        >
          <img
            src={Logo}
            alt="logo"
            className={`${state.inicio ? "" : state.stack ? "" : "invert"} ${
              location.pathname !== "/" ? "invert" : ""
            }`}
          />
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
