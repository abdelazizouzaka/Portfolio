import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-4xl font-bold">Languages</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="English"
            des="Level B2 (CEFR Levels)"
          />
          <ResumeCard
            title="Frensh"
            des="Advanced level"
          />
          <ResumeCard
            title="Arabique"

            des="Mother tongue"
          />
          <ResumeCard
            title="Tamazight / Berber"
            des="Mother tongue"

          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
