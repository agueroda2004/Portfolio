import React, { useEffect, useRef } from "react";
import Home from "./Pages/Home/Home";
import Header from "./components/Layout/Header";
function App() {
  const heroRef = useRef(null);
  const stackRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
    window.scrollTo(0, 0);
    return () => {
      window.onbeforeunload = null;
    };
  }, []);

  return (
    <>
      <Header
        heroRef={heroRef}
        stackRef={stackRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
      />
      <Home
        heroRef={heroRef}
        stackRef={stackRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
      />
    </>
  );
}

export default App;
