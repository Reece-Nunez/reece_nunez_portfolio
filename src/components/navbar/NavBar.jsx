import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import{ FaMoon, FaSun } from 'react-icons/fa';
import reeceLogo from "../../assets/reece-nunez-high-resolution-logo-transparent.svg";

const navItems = [
  {
    id: 0,
    name: "home",
  },
  {
    id: 1,
    name: "skills",
  },
  {
    id: 2,
    name: "projects",
  },
  {
    id: 3,
    name: "resume",
  },
  {
    id: 4,
    name: "contact",
  },
];

// Dark Mode Toggle

const DarkModeToggle = ({ isDarkMode, onToggle }) => {
  return (
    <div className="flex items-center">
      <FaMoon className="text-lg dark:text-white" /> {/* Moon icon */}
      <label className="switch mx-2">
        <input type="checkbox" checked={isDarkMode} onChange={onToggle} />
        <span className="slider round"></span>
      </label>
      <FaSun className="text-lg dark:text-white" /> {/* Sun icon */}
    </div>
  );
}

const NavBar = ({ toggleDarkMode, darkMode, heroRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showToggle, setShowToggle] = useState(false);

  // Toggle the navbar
  const toggleNav = (name) => {
    setIsOpen(!isOpen);
    setActiveIndex(name === activeIndex ? null : name);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = heroRef.current?.offsetHeight || 0;
      const currentScrollPos = window.scrollY;
      const offset = 900;
      setScrollPosition(currentScrollPos);
      setShowToggle(currentScrollPos > heroHeight + offset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [heroRef]);

  return (
    <div
      className={`w-full mx-auto  fixed top-0 py-5 sm:py-4 z-30 ${
        scrollPosition > 0
        ? (darkMode ? 'bg-gray-900' : 'bg-white shadow-md')
        : 'bg-transparent'
      } `}
    >
      <nav className=" container m-auto flex items-center justify-between">

        {/*Dark Mode Toggle */}
        {showToggle && (
          <DarkModeToggle
            isDarkMode={darkMode}
            onToggle={toggleDarkMode}
          />
        )}

        <div data-aos="fade-down" className="logo flex">
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="#home"
            className="title-name flex items-center text-3xl font-bold sm:text-3xl dark:text-white"
          >
            <img
            src={reeceLogo}
            onClick={() => window.scrollTo(0, 0)}
            to="/home"
            className="reece-logo w-12 h-12 mr-5"
            alt="reece-logo"/>
            <span>
              Reece Nunez
            </span>
          </Link>
        </div>
        <div
          data-aos="fade-down"
          className="nav-items flex items-center space-x-11"
        >
          {/* hamburger */}
          <button
            onClick={toggleNav}
            className={`cursor-pointer text-2xl hidden md:block ${ darkMode ? 'text-white' : ''}`}
          >
            <HiMenu size={25} />
          </button>

          <ul
            className={`flex items-center space-x-11 ${
              !isOpen ? "md:flex" : "md:right-[0%]"
            } md:flex-col md:absolute m-auto md:top-0 md:right-[-100%] md:w-[78%] md:h-screen md:bg-white dark:bg-gray-900`}
          >
            {/* Use a button tag for better accessibility */}
            <button
              onClick={toggleNav}
              className={`text-3xl hidden md:block relative right-0 top-4 container mx-auto ${ darkMode ? 'text-white' : '' }`}
            >
              <RxCross2 size={25} />
            </button>
            {navItems.map((item) => (
              <li
                key={item.id}
                className="md:m-6 md:flex md:gap-6 md:items-center md:justify-center"
              >
                <a
                  onClick={() => toggleNav(item.name)}
                  href={`#${item.name}`}
                  className={`uppercase cursor-pointer text-black hover:text-yellow-600 font-bold dark:text-white ${
                    item.name === activeIndex ? "text-yellow-600" : ""
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
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
