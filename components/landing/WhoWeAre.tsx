"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/constants/Motion";
import { TypingText } from "../layout/CustomText";

const WhoWeAre = () => {
  return (
    <section className="px-4 py-8">
      <motion.div
        variants={staggerContainer as any}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto  flex-col"
      >
        <TypingText title="WHO WE ARE" textStyles="text-center" />
        <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="flex md:flex-row flex-col md:items-center gap-4 my-8">
          <motion.p className="md:w-1/2 w-full md:text-base text-sm">
            Global Impact Assessment (GIA) is a global technology and consulting
            firm that provides streamlined environmental, social, human rights,
            and health impacts and outcomes assessment services. GIA&#39;s unique
            impacts and outcomes assessment approach combines a variety of data
            collection and analysis methods, including satellite technology,
            machine learning, surveys, and interviews, to provide a holistic
            assessment of the impact of projects, programs, and initiatives.
            GIA&#39;s use of technology, expertise, and global reach can save time
            and cost substantially compared to traditional impact assessment
            methods. GIA is relied on by nonprofits, governments, private
            organizations, and corporations worldwide to measure and improve the
            impact of their operations.
          </motion.p>
          
          <motion.div className="md:w-1/2 w-full ">
          <motion.img src="/images/team.jpg" alt="who we are" className=" object-cover rounded-full sm:w-[400px] sm:h-[400px] w-[350px] h-[350px] mx-auto md:mt-0 mt-6" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhoWeAre;
