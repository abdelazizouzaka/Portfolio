import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="End-of-studies internship"
            subTitle="MAScIR - (April to September 2022 )"
            result="Rabat"
            des="Within the ESA cluster, I worked on the detection and mapping of Fusarium head blight in maize using Sentinel-2 
            satellite images. The results showed that the combination of spectral bands with disease-sensitive vegetation indices 
            allows a better distinction between healthy and infected areas."
          />
          <ResumeCard
            title="Internship"
            subTitle="GTT Halima - (April to Mai 2018)"
            result="Meknès"
            des="During this internship, I had the chance to work on several types of topographic work using equipment such as the 
            total station and the GPS-RTK."
          />
        </div>
      </div>
        
    </motion.div>
  );
};

export default Experience;
