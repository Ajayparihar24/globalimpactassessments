"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/constants/Motion";
import { TypingText } from "../layout/CustomText";

const WhereWeServe = () => {
  return (
    <section className="px-4 py-8">
      <motion.div
        variants={staggerContainer as any}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto flexCenter flex-col"
      >
        <TypingText title="WHERE WE SERVE" textStyles="text-center" />
        <motion.img variants={textVariant(1.1)} src="/gifs/earth.gif" alt="earth" className="mx-auto md:w-[70%] my-8 w-full" />
      </motion.div>
    </section>
  );
};

export default WhereWeServe;
