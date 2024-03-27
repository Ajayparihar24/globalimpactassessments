"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/constants/Motion";
import { TypingText } from "../layout/CustomText";

const WhyUs = () => {
  return (
    <section className="px-4 py-8">
      <motion.div
        variants={staggerContainer as any}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto flexCenter flex-col"
      >
        <TypingText title="WHY US" textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="my-8 font-normal md:w-1/2 mx-auto w-full text-center sm:text-xl text-lg"
        >
          Working with us provides the reassurance of having experienced
          professionals on your team. We guide our clients in comprehending
          their impacts, minimizing risks, maximizing values, and evaluating and
          predicting outcomes with exceptional accuracy and dependability.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default WhyUs;
