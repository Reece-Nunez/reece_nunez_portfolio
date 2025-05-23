import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto mt-16 sm:w-full p-0 flex flex-col items-center">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl dark:text-white">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%] dark:text-white">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full flex-col mt-5 flex md:flex-row sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-0 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500 dark:text-white">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500 dark:border-white"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500 dark:border-white"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg dark:border-white">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl dark:text-white">
                  Process Refinery Operator
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base dark:text-white">
                  Phillips 66
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base dark:text-white">
                  May 2016 - Present
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500 dark:text-white">
                  As a Refinery Process Operator, I manage complex
                  refining operations for over 50,000 barrels/day,
                  ensuring safety, efficiency, and environmental
                  compliance. I utilize data analytics, distributed
                  control systems, and tools like SAP and the PI
                  System to optimize workflows, cut maintenance times,
                  and reduce energy consumption, driving continuous
                  improvement in productivity and reliability.
                </p>
              </div>
            </div>
          </fieldset>
        </div>

        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-0 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500 dark:text-white">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500 dark:border-white"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500 dark:border-white"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg dark:border-white">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl dark:text-white">
                  Freelance Software Engineer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base dark:text-white">
                  Self Employeed
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base dark:text-white">
                  May 2025 - Present
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500 dark:text-white">
                  As a Freelance Software Engineer, I developed the Go Girl Painting website,
                  a dynamic and user-friendly platform showcasing the business's services,
                  project galleries, and client testimonials. This project demonstrated my
                  ability to create tailored solutions that enhance online presence and
                  user engagement. I'm eager to continue delivering custom software and
                  web solutions for future clients.
                </p>
              </div>
            </div>
          </fieldset>
        </div>

        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-0 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500 dark:text-white">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500 dark:border-white"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500 dark:border-white"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg dark:border-white">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl dark:text-white">
                  Bachelor of Science, Software Engineering
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base dark:text-white">
                  Western Governors University
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base dark:text-white">
                  2022 - 2024
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500 dark:text-white">
                  Throughout my Software Engineering studies, I've completed various
                  projects, including a Full Stack Inventory Management System using
                  Angular and Spring Boot with features like dynamic search and JWT
                  security. I also developed an interactive Angular world map, an
                  Android Vacation Tracker App, and a four-page HTML/CSS state guide.
                  These projects showcase my ability to build user-focused, secure,
                  and efficient software solutions.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
