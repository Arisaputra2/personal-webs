import "./App.css";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import MainContent from "./component/main-content";
import About from "./component/about";
import Projects from "./component/projects";
import Tools from "./component/tools";
import SocialMedia from "./component/social-media";
import Preload from "./component/preload";
import React, { useState, useEffect } from "react";
import CursorGlow from "./component/cursor-glow";
function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [showPreloader, setShowPreloader] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const loadingDuration = 800;
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsContentVisible(true);
    }, loadingDuration);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const hideDuration = 100;
      const timer = setTimeout(() => {
        setShowPreloader(false);
      }, hideDuration);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const contentClasses = `transition-opacity duration-1000 ease-in ${
    isContentVisible ? "opacity-100 visible" : ""
  }
    ${!isContentVisible ? "opacity-0 invisible" : ""}
  }`;
  return (
    <>
      <CursorGlow position={mousePosition} />
      {showPreloader && <Preload isLoading={isLoading} />}

      <div className={contentClasses}>
        <Navbar />

        <MainContent />

        <About />

        <Projects />

        <Tools />

        <SocialMedia />

        <Footer />
      </div>
    </>
  );
}

export default App;
