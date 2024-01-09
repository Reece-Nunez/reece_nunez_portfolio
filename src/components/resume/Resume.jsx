import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
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
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Process Refinery Operator
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Phillips 66
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  May 2016 - Present
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                As a Refinery Process Operator, my role centers on overseeing and managing
                sophisticated refining operations within a high-stakes facility, valued at
                a billion dollars per day. My approach is firmly rooted in data analytics,
                allowing me to refine processes for optimized yield and enhanced efficiency.
                Safety and environmental compliance are paramount in my work, ensuring adherence
                to stringent standards. Serving as the key liaison, I collaborate closely with
                external operators to identify and troubleshoot issues promptly. My
                responsibilities also include orchestrating complex, time-sensitive operations,
                all aimed at maintaining a seamless and highly efficient workflow. This pivotal
                role demands a keen eye for detail and a proactive stance in the face of operational
                challenges, ensuring every process contributes to the overarching goal of streamlined productivity.
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
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Bachelor of Science, Software Engineering
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Western Governors University
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  2022 - 2024
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                During my Software Engineering studies, I've completed
                several notable projects, including the development of
                a detailed, four-page website that serves as a guide to
                a U.S. state, created using HTML5 and CSS to ensure
                accessibility and user engagement. I've also designed a
                Spring Framework application to streamline inventory
                management for a retail client, a project that required
                a custom HTML interface and robust backend coding,
                solidified by extensive unit testing. Another project
                involved creating an interactive world map with AngularJS
                and API integration, enhancing user interaction with
                real-time data. Additionally, I developed an Android
                vacation tracking application, incorporating comprehensive
                data management and user notification features, demonstrating
                my ability to deliver cross-platform, user-centric software solutions.
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
