import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2015 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="PhD in Geomatics Sciences and Engineering"
            subTitle="IAV Hassan II (2023 - 2026)"
            result=""
            des="My thesis project is about digital mapping of water productivity, the thing that will allow a better management of water resources in the agricultural sector."
          />
          <ResumeCard
            title="Master's degree"
            subTitle="Mohamed V University - Rabat (2020 - 2022)"
            result="16/20"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Fundamental license in geology"
            subTitle="Moulay Ismail University - Meknès (2017 - 2020)"
            result="14/20"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
          <ResumeCard
            title="Diploma of specialized technician in topography"
            subTitle="Training center for building trades and public works- Meknès (2015 - 2017)"
            result="14/20"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      
    </motion.div>
  );
}

export default Education