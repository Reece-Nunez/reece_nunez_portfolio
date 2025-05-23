import { forwardRef, useEffect } from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/2025_Resume.pdf";
import headshotImage from "../../assets/head_shot.png";
import darkModeImage from "../../assets/circle.png";
import lightModeImage from "../../assets/Full Stack Developer2.png";
import { useLocation } from "react-router-dom";

const Hero = forwardRef(({ darkMode, toggleDarkMode }, ref) => {
  const location = useLocation();

  useEffect(() => {
    // Handles /#home style deep links
    if (location.hash === "#home") {
      const element = document.getElementById("home");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  console.log("Hero rendered", { darkMode, toggleDarkMode });
  return (
    <div
      ref={ref}
      id="home"
      className="bg-gradient-to-r from-custom-light-blue to-custom-blue dark:from-gray-600 dark:to-gray-950"
    >
      <div className="container mx-auto pt-4 min-h-[750px] lg:min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-10 px-4 exsm:w-full">
        
        {/* Left section */}
        
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 md:flex items-center w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2 className="text-3xl font-bold sm:text-5xl dark:text-white">
              Hello, I'm Reece Nunez
            </h2>
            <TypeAnimation
              sequence={[
                "Web Developer",
                2000,
                "Full Stack Engineer",
                2000,
                "Application Developer",
                2000,
                "",
              ]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-yellow-400 text-2xl font-bold sm:text-2xl"
            />
            <p className="text-lg font-medium text-gray-600 dark:text-white sm:text-base">
              Let's Collaborate and Create Something Amazing
            </p>
          </div>

          <div className="buttons flex flex-wrap gap-5 justify-center">
            <a
              href="#contact"
              className="bg-black text-white px-8 py-2 rounded-lg font-bold hover:text-yellow-400 dark:bg-white dark:text-black"
            >
              Hire Me
            </a>
            <a
              href={resumePDF}
              download
              className="flex items-center gap-2 bg-white px-8 py-2 rounded-lg font-bold hover:text-yellow-400 border dark:border-white"
            >
              Resume <FiDownload />
            </a>
          </div>

          <ul className="flex gap-5 mt-5 justify-center mb-2">
            <li>
              <a href="https://www.github.com/reece-nunez" target="_blank">
                <AiFillGithub className="h-7 w-7 hover:scale-125 dark:text-white" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/reecenunez" target="_blank">
                <FaLinkedinIn className="h-7 w-7 hover:scale-125 dark:text-white" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/reecenunez20" target="_blank">
                <AiFillInstagram className="h-7 w-7 hover:scale-125 dark:text-white" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/reecenunez20" target="_blank">
                <FaFacebook className="h-7 w-7 hover:scale-125 dark:text-white" />
              </a>
            </li>
          </ul>
        </div>

        {/* Right section */}
        <div className="right  top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[88%] w-fit flex items-center sm:items-end">
            <img
              data-aos="fade-up"
              className="w-[300px] md:w-[220px] lg:w-[500px] object-cover rounded-full"
              src={headshotImage}
              alt="Reece Nunez"
            />

            <div className=" absolute bottom-1 md:bottom-3 right-8 md:right-2">
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className=" relative cursor-pointer"
              >
                <img
                  className=" w-[135px] md:w-[150px] circle-text"
                  src={darkMode ? lightModeImage : darkModeImage}
                  alt="Toggle Dark Mode"
                  title="Toggle dark mode"
                  onClick={toggleDarkMode}
                />
                <FaPlay className="text-white dark:text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Hero;
