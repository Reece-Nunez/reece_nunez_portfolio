import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { FaMoon, FaSun } from "react-icons/fa";
import { DarkModeContext } from "../../context/DarkModeContext.jsx";
import reeceLogo from "../../assets/nunezdev-logo-2.png";
import mobileLogo from "../../assets/nunezdev-logo.png";

const navItems = [
  { id: 0, name: "home", link: "/", sectionId: "home" },
  { id: 1, name: "skills", link: "/", sectionId: "skills" },
  { id: 2, name: "projects", link: "/", sectionId: "projects" },
  { id: 3, name: "resume", link: "/", sectionId: "resume" },
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
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavigation = (item) => {
    if (item.isRoute) {
      navigate(item.link);
    } else if (location.pathname !== "/") {
      navigate("/", { state: { sectionId: item.sectionId } });
    } else {
      item.sectionId === "home"
        ? heroRef?.current?.scrollIntoView({ behavior: "smooth" })
        : scrollToSection(item.sectionId);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const id = location.state?.sectionId;
    if (id) setTimeout(() => scrollToSection(id), 50);
  }, [location]);

  return (
    <header className="w-full fixed top-0 py-5 z-30 bg-transparent">
      <nav className="w-full max-w-screen-xl mx-auto flex items-center justify-between px-4">
        {/* Left: Dark mode + logo */}
        <DarkModeToggle />
        {/* Desktop Nav */}
        <ul className="hidden lg:flex space-x-10 items-center">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavigation(item)}
                className={`uppercase font-bold hover:text-yellow-400 ${darkMode ? "text-white" : "text-black"
                  }`}
              >
                {item.name}
              </button>
            </li>
          ))}
          <a
            href="#contact"
            className="bg-black text-white px-6 py-2 rounded-lg font-bold hover:text-yellow-400 dark:bg-white dark:text-black"
          >
            HIRE ME
          </a>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`block lg:hidden text-2xl z-50 ${darkMode ? "text-white" : "text-black"
            }`}
        >
          {isOpen ? <RxCross2 size={28} /> : <HiMenu size={28} />}
        </button>
      </nav>

      {/* Mobile Slide-out */}
      <ul
        className={`fixed top-0 right-0 w-[78%] h-[100%] z-40
          flex flex-col justify-center items-center
          space-y-10 pt-20
          transform transition-transform duration-300
          lg:hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          ${darkMode ? "bg-gray-900" : "bg-white"}`}
      >
        {navItems.map((item) => (
          <li key={item.id} className="w-full">
            <button
              onClick={() => handleNavigation(item)}
              className={`w-full text-center uppercase font-bold tracking-wide
                hover:text-yellow-400
                ${darkMode ? "text-white" : "text-black"}`}
            >
              {item.name}
            </button>
          </li>
        ))}
        <a
          href="#contact"
          className="mx-auto bg-black text-white px-8 py-2 rounded-lg font-bold hover:text-yellow-400 dark:bg-white dark:text-black"
        >
          HIRE ME
        </a>
      </ul>
    </header>
  );
};

export default NavBar;
