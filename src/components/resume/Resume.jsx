import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
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
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
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
                  As a Refinery Process Operator, I oversee complex refining operations, leveraging 
                  data analytics to enhance yield and efficiency in a facility generating over a 
                  billion dollars daily. My focus on safety and environmental standards is 
                  unwavering. I operate a distributed control system, managing over 50,000 
                  barrels/day, which boosts our efficiency significantly. With Bentley Systems, 
                  I’ve improved workflows by 15%, and by implementing SAP for work order management, 
                  I’ve cut maintenance turnaround times by 20%. The PI System helps me analyze data
                  in real time, reducing energy consumption by 10%. I also automate processes 
                  using logic controllers, enhancing system reliability. My role is critical in 
                  maintaining seamless, efficient operations and solving issues swiftly, always 
                  aiming for optimal productivity.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
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
                  Throughout my Software Engineering studies, I've completed a diverse 
                  array of projects, demonstrating a strong aptitude for developing 
                  user-focused and operationally efficient software solutions. Notably, 
                  I designed and implemented a Full Stack Inventory Management System 
                  that leverages Angular for the front end and Spring Boot for the backend. 
                  This comprehensive system includes features such as dynamic searching, 
                  inventory KPI visualization, and JWT-based security, aimed at streamlining 
                  operations and enhancing the user experience. Additionally, I developed a 
                  four-page website as a detailed guide to a U.S. state, utilizing HTML5 and 
                  CSS to ensure accessibility and engagement, incorporating visual data 
                  presentations and interactive forms for a rich user experience. My 
                  portfolio also includes a Spring Boot application for retail inventory 
                  management, which introduced a custom HTML interface for dynamic updates 
                  and rigorous unit testing to ensure reliability. Another significant project 
                  was an interactive world map using AngularJS and API integration, designed to 
                  provide real-time, engaging data interaction on a global scale. Furthermore, 
                  I created an Android Vacation Tracker App, emphasizing easy management of travel 
                  details and a user-friendly interface, showcasing my skills in cross-platform 
                  development and UI/UX design. Each of these projects reflects my commitment 
                  to delivering sophisticated, secure, and user-centric software solutions.
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
