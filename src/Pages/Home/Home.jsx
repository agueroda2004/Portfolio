import React from "react";
import HeroSection from "../../components/Home/HeroSection";
import AboutMeSection from "../../components/Home/AboutMeSection";
import ProjectsSection from "../../components/Home/ProjectsSection";
import TopStack from "../../components/Home/TopStack";

const Home = ({ heroRef, stackRef, aboutRef, projectsRef }) => {
  return (
    <div>
      <HeroSection ref={heroRef} />
      <AboutMeSection ref={aboutRef} />
      <ProjectsSection ref={projectsRef} />
      <TopStack ref={stackRef} />
    </div>
  );
};

export default Home;
