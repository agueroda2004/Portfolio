import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/logo.svg";

const Header = ({ heroRef, stackRef, aboutRef, projectsRef }) => {
  const navHeader = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isStack, setIsStack] = useState(true);

  const scrollTo = (ref) =>
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const scrollToStart = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    const nav = navHeader.current;

    const hero = heroRef?.current;
    if (!nav || !hero) return;

    const stickyNav = (entries) => {
      const [entry] = entries;
      setIsScrolled(!entry.isIntersecting);
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
  }, [heroRef]);

  useEffect(() => {
    const nav = navHeader.current;
    const hero = stackRef?.current;
    const navHeight = nav.getBoundingClientRect().height;
    if (!nav || !hero) return;

    let firstRun = true;
    const stickyNav = (entries) => {
      const [entry] = entries;
      if (firstRun) {
        firstRun = false;
        return;
      }
      setIsStack(!entry.isIntersecting);
      setIsScrolled((isScrolled) => !isScrolled);
    };
    const observer = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 1,
      rootMargin: `${navHeight}px`,
    });

    observer.observe(hero);
    return () => {
      if (hero) observer.unobserve(hero);
    };
  }, [stackRef]);
  //     ${isScrolled ? "bg-white/70" : !isStack ? "bg-black" : "bg-transparent"}
  return (
    <div
      className="w-full pt-2 flex justify-center items-center fixed z-100 px-2 md:px-2 md:pt-2"
      ref={navHeader}
    >
      <div
        className={`w-full rounded-[8px] flex flex-row h-[80px] items-center justify-between px-5 shadow-[0_0_25px_rgba(0,0,0,0.3)] border border-gray-950/10
${isScrolled ? "bg-white/70" : !isStack ? "bg-transparent" : "bg-transparent"}
    backdrop-blur-xs transition-all duration-75 relative`}
      >
        {/* Logo */}
        <div onClick={() => scrollToStart()} className="cursor-pointer">
          <img
            src={Logo}
            alt="logo"
            className={`${isScrolled ? "invert" : ""}`}
          />
        </div>

        {/* links */}
        <div
          className={`flex-row gap-10 font-light h-full hidden md:flex absolute left-1/2 -translate-x-1/2 items-center ${
            isScrolled ? "text-black" : "text-white"
          } transition-all duration-75`}
        >
          <button
            className={`hover:border-b ${
              isScrolled ? "border-black/50" : "border-white/50"
            }  hover:-translate-y-[1px] 
        active:translate-y-[1px] transition-transform duration-200 cursor-pointer`}
            onClick={() => scrollTo(aboutRef)}
          >
            About me
          </button>
          <button
            className={`hover:border-b ${
              isScrolled ? "border-black/50" : "border-white/50"
            }  hover:-translate-y-[1px] 
        active:translate-y-[1px] transition-transform duration-200 cursor-pointer`}
            onClick={() => scrollTo(projectsRef)}
          >
            Top projects
          </button>
          <button
            className={`hover:border-b ${
              isScrolled ? "border-black/50" : "border-white/50"
            }  hover:-translate-y-[1px] 
        active:translate-y-[1px] transition-transform duration-200 cursor-pointer`}
            onClick={() => scrollTo(stackRef)}
          >
            Top stack
          </button>
        </div>

        {/* condicionales */}
        <div>
          {isScrolled && (
            <button
              className="border border-black/70 px-5 py-2 rounded-[10px] font-light hover:-translate-y-[1px] 
        active:translate-y-[1px] transition-all duration-200 cursor-pointer hover:bg-white hover:text-black bg-black text-white hidden md:flex"
            >
              Download CSV
            </button>
          )}
          {!isStack && (
            <button
              className="border border-white/70 px-5 py-2 rounded-[10px] font-light hover:-translate-y-[1px] 
        active:translate-y-[1px] transition-all duration-200 cursor-pointer hover:bg-white hover:text-black bg-black text-white hidden md:flex"
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
