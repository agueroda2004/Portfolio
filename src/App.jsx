import React, { useRef } from "react";
import Home from "./Pages/Home/Home";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import { Route, Routes } from "react-router-dom";
import Stack from "./Pages/Stack/Stack";
import Project from "./Pages/Projects/Project";
function App() {
  const heroRef = useRef(null);
  const stackRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <>
      <Header
        heroRef={heroRef}
        stackRef={stackRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              heroRef={heroRef}
              stackRef={stackRef}
              aboutRef={aboutRef}
              projectsRef={projectsRef}
            />
          }
        />
        <Route path="/stack" element={<Stack />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
