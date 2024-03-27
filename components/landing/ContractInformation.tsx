"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/constants/Motion";
import { TypingText } from "../layout/CustomText";
import { Mail, MapPin, Phone } from "lucide-react";

const ContractInformation = () => {
  return (
    <section className="px-4 py-8">
      <motion.div
        variants={staggerContainer as any}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto flexCenter flex-col"
      >
        <TypingText title="CONTRACT INFORMATION" textStyles="text-center" />
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-8 font-normal w-full"
        >
          <div className="w-full">
            <div className="flex items-center gap-4">
              <Mail />
              <a
                href="mailto:inquiry@globalimpactassessment.com"
                className="text-xl font-bold"
              >
                inquiry@globalimpactassessment.com
              </a>
            </div>

            <div className="w-full h-[1px] my-2 bg-gray-300 dark:bg-white rounded-full"></div>
          </div>

          <div className="my-4">
            <div>
              <div className="flex items-center gap-4">
                <Phone />
                <a href="tel:+1-786-977-9908" className="text-xl font-semibold">
                  +1-786-977-9908
                </a>
              </div>
              <div className="flex items-center gap-4 my-2 mt-4">
                <MapPin />
                <p className="opacity-70">Cambridge, Massachusetts. 02138</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContractInformation;
