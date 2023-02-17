import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import {logo} from "../../assets/index"

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={logo} alt="logo" style={{width:"200px", height: "100px"}}/>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
        
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <a href="#home">
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Home
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </a>
          </li>
          <li>
            <a href="#features">
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              What I Do
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </a>
          </li>
          <li>
            <a href="#projects">
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Projects
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </a>
          </li>
          <li>
            <a href="#resume">
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Resume
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Contact
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
               </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer