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
        // If not on the homepage, navigate and pass sectionId in state
        navigate("/", { state: { sectionId: item.sectionId } });
      } else {
        if (item.sectionId === "home") {
          // Scroll to top via ref
          if (heroRef?.current) {
            heroRef.current.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          // Scroll to other sections by ID
          scrollToSection(item.sectionId);
        }
      }
    }

    setIsOpen(false); // close mobile menu
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (location.state?.scrollToTop && heroRef?.current) {
      setTimeout(() => {
        heroRef.current.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else if (location.state?.sectionId) {
      setTimeout(() => {
        scrollToSection(location.state.sectionId);
      }, 50);
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
            className="flex items-center gap-x-2 text-xl font-bold dark:text-white whitespace-nowrap"
          >
            <img src={reeceLogo} className="w-10 h-10" alt="reece-logo" />
            <span>Reece Nunez</span>
          </Link>
        </div>

        {/* Navigation Items */}
        <div
          data-aos="fade-down"
          className="nav-items flex items-center space-x-11"
        >
          {/* hamburger (shows only on mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`text-2xl md:block ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            {isOpen ? <RxCross2 size={28} /> : <HiMenu size={28} />}
          </button>

          <ul
  className={`fixed top-0 right-0 h-screen w-[78%] z-50
              flex flex-col justify-center items-center
              space-y-10 pt-20
              transform transition-transform duration-300
              md:block
              ${isOpen ? "translate-x-0" : "translate-x-full"}
              ${darkMode ? "bg-gray-900" : "bg-white"}`}
>
            {/* Close Button for Mobile Menu */}
            <button
              onClick={() => setIsOpen(false)}
              className={`text-3xl block md:hidden absolute top-5 right-5 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              <RxCross2 size={25} />
            </button>

            {/* Map through navItems */}
            {navItems.map((item) => (
    <li key={item.id} className="w-full">
      <button
        onClick={() => handleNavigation(item)}
        className={`w-full text-center uppercase font-bold tracking-wide
                    hover:text-yellow-500
                    ${darkMode ? "text-white" : "text-black"}`}
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
