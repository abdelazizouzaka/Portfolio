import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";


const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["GIS and Remoe Sensing specialist.", "Geologist.", "Topographic surveyor ."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 3000,
    });
  return (
    
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Abdelaziz OUZAKA</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ffa500"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Currently I am a PhD student at the Hassan II Agronomic and Veterinary Institute in the field of geomatic sciences 
        and engineering. I am working on digital mapping of water productivity for a better management of water resources.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href='https://www.facebook.com/Aziz.ouzaka'>
               <FaFacebookF />
               </a>
            </span>
            <span className="bannerIcon">
              <a href='https://twitter.com/AbdelazizOuzaka'>
               <FaTwitter />
               </a>
            </span>
            <span className="bannerIcon">
              <a href='https://www.linkedin.com/in/abdelaziz-ouzaka-995362149/'>
               <FaLinkedinIn />
               </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner