import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";

import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import agileImage from '../../assets/agile.png';
import androidImage from '../../assets/android.png';
import typescriptImage from '../../assets/typescript.png';
import springbootImage from '../../assets/springboot.png';
import scrumImage from '../../assets/scrum.png';
import pythonImage from '../../assets/python.png';
import postgreImage from '../../assets/postgresql.png';
import mysqlImage from '../../assets/mysql.png';
import javascriptImage from '../../assets/javascript.png';
import javaImage from '../../assets/java.png';
import hmtlImage from '../../assets/html.png';
import cssImage from '../../assets/css.png';


import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiAngularjs,
} from "react-icons/si";
import { FaJava, FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl dark:text-white">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-gray-700 font-medium w-[100%] dark:text-white"
            >
              Here are my skills.
            </p>
            {/* left box */}
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] justify-end md:justify-center"
            >
              <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
                <ProgressBar
                logo={<IoLogoHtml5 />}
                name={"HTML"}
                value={95}
                darkMode={darkMode}
                />
                <ProgressBar
                logo={<IoLogoCss3 />}
                name={"CSS"}
                value={88}
                darkMode={darkMode}
                />
                <ProgressBar
                  logo={<SiJavascript />}
                  name={"Javascript"}
                  value={60}
                  darkMode={darkMode}
                />
                <ProgressBar
                logo={<FaReact />}
                name={"React Js"}
                value={30}
                darkMode={darkMode}
                />
                <ProgressBar
                  logo={<SiTailwindcss />}
                  name={"Tailwind CSS"}
                  value={30}
                  darkMode={darkMode}
                />
              </div>
            </div>
          </div>
          {/* right box */}
          <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10">
              <SkillBox
                logo={<IoLogoNodejs />}
                darkMode={darkMode}
                skill={"Node Js"}
              />
              <SkillBox
                logo={<SiMongodb />}
                darkMode={darkMode}
                skill={"MongoDB"}
              />
            </div>
            <div className="last2 flex flex-col gap-10">
              <SkillBox
                logo={<SiAngularjs />}
                darkMode={darkMode}
                skill={"Angular Js"}
              />
              <SkillBox
                logo={<FaJava/>}
                darkMode={darkMode}
                skill={"Java"}
              />
              {/* <SkillBox
                className=""
                logo={
                  <SiNextdotjs className=" text-white bg-black rounded-full h-fit border-white overflow-hidden" />
                }
                black={"black"}
                white={"white"}
                skill={"Next Js"}
              /> */}
            </div>
          </div>
        </div>

        {/* icons */}
        { <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className="icon-container container m-auto flex items-center justify-center mt-8 gap-8 md:gap-5"
        >
          <img
            title="Git"
            className={`w-[40px] h-[40px] md:w-[35px] md:h-[35px] ${darkMode ? 'dark-mode-icon' : ''}`}
            src="https://img.icons8.com/ios-filled/50/null/git.png"
            />
          <img
            title="Python"
            className={`w-[40px] h-[40px] md:w-[35px] md:h-[35px] ${darkMode ? 'dark-mode-icon' : ''}`}
            src={pythonImage}
          />
          <img
            title="Agile Development"
            className={`w-[40px] h-[40px] md:w-[35px] md:h-[35px] ${darkMode ? 'dark-mode-icon' : ''}`}
            src={agileImage}
          />
          <img
            title="TypeScript"
            className={`w-[40px] h-[40px] md:w-[35px] md:h-[35px] ${darkMode ? 'dark-mode-icon' : ''}`}
            src={typescriptImage}
          />
          <img
            title="Android Development"
            className={`w-[40px] h-[40px] md:w-[35px] md:h-[35px] ${darkMode ? 'dark-mode-icon' : ''}`}
            src={androidImage}
          />
          <img
            title="SpringBoot"
            className={`w-[40px] h-[40px] md:w-[35px] md:h-[35px] ${darkMode ? 'dark-mode-icon' : ''}`}
            src={springbootImage}
          />
          <img
            title="SCRUM"
            className={`w-[40px] h-[40px] md:w-[35px] md:h-[35px] ${darkMode ? 'dark-mode-icon' : ''}`}
            src={scrumImage}
          />
          <img
            title="PostgreSQL"
            className={`w-[40px] h-[40px] md:w-[35px] md:h-[35px] ${darkMode ? 'dark-mode-icon' : ''}`}
            src={postgreImage}
          />
          <img
            title="MySQL"
            className={`w-[40px] h-[40px] md:w-[35px] md:h-[35px] ${darkMode ? 'dark-mode-icon' : ''}`}
            src={mysqlImage}
          />
          <img className={`w-[40px] h-[40px] md:w-[35px] md:h-[35px] ${darkMode ? 'dark-mode-icon' : ''}`} src="https://img.icons8.com/color/48/null/javascript--v1.png"/>
          <img className={`w-[40px] h-[40px] md:w-[35px] md:h-[35px] ${darkMode ? 'dark-mode-icon' : ''}`} src="https://img.icons8.com/color/48/null/nodejs.png"/>
        </div> }
      </div>
    </div>
  );
};

export default Skills;
