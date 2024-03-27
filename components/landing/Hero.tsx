"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/constants/Motion";
import { useRouter } from "next/navigation";


const Hero = () => {
  const router = useRouter();
  return (
    <section className="">
      <motion.div
      style={{
        backgroundImage: "url(/images/banner.png)"
      }}
        variants={staggerContainer as any}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`py-6 px-4 bg-cover bg-center bg-no-repeat h-[80vh] flex items-center md:flex-row flex-col gap-4`}
      >
        <div className="flex flex-col md:w-1/2 w-full">
          <motion.h1
            variants={textVariant(1.1)}
            className="sm:text-3xl text-2xl font-poppins font-semibold leading-tight"
          >
            We leverage the power of spatial data and cutting-edge technologies
          </motion.h1>
          <motion.p
            variants={textVariant(1.1)}
            className="text-sm leading-normal my-3"
          >
            Streamline impact and outcome assessments for organizations,
            enabling rapid, cost-effective reporting and regulatory approval
          </motion.p>

          <div>
            <motion.button
              onClick={() => router.push("/services/impact-assessment")}
              variants={textVariant(1.1)}
              className="bg-primary text-white h-10 px-4 text-sm rounded font-poppins cursor-pointer"
            >
              Learn More
            </motion.button>
          </div>
        </div>

       
      </motion.div>
    </section>
  );
};

export default Hero;
