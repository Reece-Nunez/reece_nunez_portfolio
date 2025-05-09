import React, { forwardRef, useEffect } from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
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
      <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className=" text-5xl font-bold sm:text-[2rem] dark:text-white"
            >
              Hello, I'm Reece Nunez
            </h2>
            <TypeAnimation
              data-aos="fade-up"
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
              className="text-yellow-500 text-4xl font-bold sm:text-3xl"
            />
            <p
              // data-aos="fade-up"
              className=" text-[1.1rem] font-medium w-3/4 md:w-full text-gray-600 sm:text-[.95rem] dark:text-white"
            >
              Let's Collaborate and Create Something Amazing
            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <a
              href="#contact"
              className=" bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-yellow-500 dark:bg-white dark:text-black"
            >
              <span> Hire Me</span>
            </a>
            <a
              href={resumePDF}
              className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-yellow-500"
              download
            >
              <div className="flex items-center gap-1">
                Resume <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
              <li>
                <a href="https://www.github.com/reece-nunez" target="_blank">
                  {" "}
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 dark:text-white" />{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/reecenunez"
                  target="_blank"
                >
                  {" "}
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 dark:text-white" />{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/reecenunez20"
                  target="_blank"
                >
                  {" "}
                  <AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  dark:text-white" />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/reecenunez20" target="_blank">
                  {" "}
                  <FaFacebook className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 dark:text-white " />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right  top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[88%] w-fit flex items-center sm:items-end">
            <img
              data-aos="fade-up"
              className=" h-[90%]  w-full object-cover md:h-[95%] md:m-auto sm:m-0 rounded-full"
              src={headshotImage}
              // src={mine}
              alt="mine"
            />
            <div className=" absolute bottom-10 md:bottom-3 right-8 md:right-2">
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className=" relative cursor-pointer"
              >
                <img
                  className=" w-[135px] md:w-[90px] circle-text"
                  src={darkMode ? lightModeImage : darkModeImage}
                  alt="Toggle Dark Mode"
                  title="Toggle dark mode"
                  onClick={toggleDarkMode}
                />
                <FaPlay className=" text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] dark:text-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Hero;
