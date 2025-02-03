import React, { useState, useEffect, useRef } from "react";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import NavBar from "../components/navbar/NavBar";
import Resume from "../components/resume/Resume";
import Skills from "../components/skills/Skills";
import Work from "../components/work/Work";
import Certs from "../components/certs/Certs";
import { useLocation } from "react-router-dom";


const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const heroRef = useRef(null);
  const location = useLocation();

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    console.log("Dark mode state changed to:", darkMode);
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  // Handle smooth scrolling based on state
  useEffect(() => {
    if (location.state?.scrollTo) {
      const targetElement = document.querySelector(location.state.scrollTo);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <NavBar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        heroRef={heroRef}
      />
      <Hero ref={heroRef} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Skills darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Certs darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Work darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Resume darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Contact darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </>
  );
};

export default Home;
