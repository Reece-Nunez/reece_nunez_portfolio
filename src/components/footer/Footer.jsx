import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div id="works" className=" mx-auto m-auto h-[300px]  mt-16 sm:h-[250px]">
      <div className=" bg-yellow-400 h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7 dark:bg-gray-600">
        <h2
        data-aos="zoom-out"
        className=" font-bold text-5xl sm:text-3xl dark:text-white">Let's Talk</h2>
        <div className=" flex items-center justify-center gap-8 sm:gap-5">
          <a
          data-aos="fade-up" data-aos-duration="1000"
            target="_blank"
            href="https://t.me/reecenunez"
            className="box font-medium text-white   flex items-center justify-center flex-col"
          >
            <FaTelegramPlane className=" text-black text-3xl hover:scale-125 cursor-pointer dark:text-white" />
            <p>Telegram</p>
          </a>
          <a
          data-aos="fade-up" data-aos-duration="1200"
            target="_blank"
            href="https://wa.me/+14356606100"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <IoLogoWhatsapp className=" text-black text-3xl hover:scale-125 cursor-pointer dark:text-white" />
            <p>WhatsApp</p>
          </a>
          <a
          data-aos="fade-up" data-aos-duration="1400"
            target="_blank"
            href="https://www.instagram.com/reecenunez20"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <RiInstagramFill className=" text-black text-3xl hover:scale-125 cursor-pointer dark:text-white" />
            <p>Instagram</p>
          </a>
        </div>
        <div className="sm:text-[12px] dark:text-white">
          | Copyright &copy; <span>2025 Reece Nunez </span> All rights reserved
          <a href="#"></a> |
        </div>
      </div>
    </div>
  );
};

export default Footer;
