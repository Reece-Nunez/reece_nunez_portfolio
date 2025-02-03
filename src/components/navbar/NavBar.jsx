import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { FaMoon, FaSun } from "react-icons/fa";
import { DarkModeContext } from "../../context/DarkModeContext.jsx";
import reeceLogo from "../../assets/reece-nunez-high-resolution-logo-transparent.svg";

const navItems = [
  { id: 0, name: "home", link: "/", sectionId: "home" },
  { id: 1, name: "skills", link: "/", sectionId: "skills" },
  { id: 2, name: "projects", link: "/", sectionId: "projects" },
  { id: 3, name: "resume", link: "/", sectionId: "resume" },
  { id: 4, name: "pricing", link: "/pricing", isRoute: true },
  { id: 5, name: "contact", link: "/", sectionId: "contact" },
];

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className="flex items-center">
      <FaMoon
        className={`text-lg ${darkMode ? "text-white" : "text-gray-600"}`}
      />
      <label className="switch mx-2">
        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
        <span className="slider round"></span>
      </label>
      <FaSun
        className={`text-lg ${darkMode ? "text-gray-300" : "text-black"}`}
      />
    </div>
  );
};

const NavBar = ({ heroRef }) => {
  const { darkMode } = useContext(DarkModeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (item) => {
    if (item.isRoute) {
      navigate(item.link);
    } else {
      if (location.pathname !== "/") {
        // If not on the home page, navigate to home and pass sectionId in state
        navigate("/", { state: { sectionId: item.sectionId } });
      } else {
        // If already on home, scroll to the section
        scrollToSection(item.sectionId);
      }
    }
    setIsOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // If the page loads with a sectionId state, scroll to that section
    if (location.state?.sectionId) {
      scrollToSection(location.state.sectionId);
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = heroRef.current?.offsetHeight || 0;
      const currentScrollPos = window.scrollY;
      const offset = 900;
      setScrollPosition(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [heroRef]);

  return (
    <div className={`w-full mx-auto fixed top-0 py-5 sm:py-4 z-30`}>
      <nav className="container m-auto flex items-center justify-between">
        <DarkModeToggle />

        {/* Logo */}
        <div data-aos="fade-down" className="logo flex">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="title-name flex items-center text-3xl font-bold sm:text-3xl dark:text-white"
          >
            <img
              src={reeceLogo}
              className="reece-logo w-12 h-12 mr-5"
              alt="reece-logo"
            />
            <span>Reece Nunez</span>
          </Link>
        </div>

        {/* Navigation Items */}
        <div
          data-aos="fade-down"
          className="nav-items flex items-center space-x-11"
        >
          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`cursor-pointer text-2xl hidden md:block ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <HiMenu size={25} />
          </button>

          <ul
            className={`flex items-center space-x-11 ${
              !isOpen ? "md:flex" : "md:right-[0%]"
            } md:flex-col md:absolute m-auto md:top-0 md:right-[-100%] md:w-[78%] md:h-screen 
  ${darkMode ? "md:bg-gray-900" : "md:bg-white"}`}
          >
            {/* Close Button for Mobile Menu */}
            <button
              onClick={() => setIsOpen(false)}
              className={`text-3xl hidden md:block relative right-0 top-4 container mx-auto ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              <RxCross2 size={25} />
            </button>

            {/* Map through navItems */}
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`uppercase cursor-pointer font-bold hover:text-yellow-600 ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                <button
                  onClick={() => handleNavigation(item)}
                  className={`uppercase cursor-pointer hover:text-yellow-600 font-bold ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}

            {/* "Hire Me" Button */}
            <a
              href="#contact"
              className="bg-black text-[1rem] text-white px-8 py-2 rounded-lg font-bold hover:text-yellow-400 md:m-5 md:block md:mx-auto md:w-fit lg:px-3 dark:bg-white dark:text-black"
            >
              HIRE ME
            </a>

          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
