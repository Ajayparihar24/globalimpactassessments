"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/constants/Motion";
import { TypingText } from "../layout/CustomText";

const WhoWeServe = () => {
  return (
    <section className="px-4 py-8">
      <motion.div
        variants={staggerContainer as any}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto flexCenter flex-col"
      >
        <TypingText title="WHO WE SERVE" textStyles="text-center" />
        <motion.div
          variants={textVariant(1.1)}
          className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 my-8"
        >
          <Card
            title="Corporate"
            subTitle="Leaveraging advanced technology and expert insights, we
          navigate the intrcacies of impact assessment, empowaering
          corporations to comply with regulatory requirements. This
          proactive approach helps avert potential public backlash,
          overcome operational setbacks, maximize profits, and minimize
          negative impacts."
          />

          <Card
            title="Foundations And Banks"
            subTitle="Our unique assessment solutions helps foundations and banks
            measure the outcomes of the projects they fund or lend to,
            empowering them to make informed decisions and continually
            enhance their societal contributions."
          />

          <Card
            title="Non-Profits And Social Enterprises"
            subTitle="We offer a robust solution designed to holistically measure
            the outcomes of your interventions, programs, intiatives, or
            the projects you are funding. This enables you to streamline
            your outcome reporting process and make informed decisions."
          />

          <Card
            title="Government"
            subTitle="We enable governmental entities to adhere to regulatory
            standards, optimize resource allocation, and minimize adverse
            impacts on the environment and local communities."
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhoWeServe;


const Card = ({ title, subTitle }: { title: string; subTitle: string }) => {
  return (
    <>
      <div className="w-full h-[300px] bg-transparent cursor-pointer group perspective">
        <div className="relative shadow-xl text-white bg-gradient-to-l from-violet-600 to-violet-700 p-4 rounded preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          
          <div className="backface-hidden  w-full h-full flex items-center justify-center">
            <p className="font-semibold text-lg text-center">{title}</p>
          </div>
          <div className="absolute inset-0 p-2 flex flex-col my-rotate-y-180 backface-hidden w-full h-full overflow-hidden">
            <h3 className="font-poppins font-medium  whitespace-nowrap">
              {title}
            </h3>
            <p className="text-sm mt-3">{subTitle}</p>
          </div>
        </div>
      </div>
    </>
  );
};
