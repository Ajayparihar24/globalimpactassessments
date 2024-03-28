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
        variants={staggerContainer as any}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.div
          variants={textVariant(1.1)}
          className={`absolute top-0 left-0 right-0 py-6 px-4 bg-cover bg-center bg-no-repeat md:h-[90vh] h-[70vh] flex items-center md:justify-start justify-center md:flex-row flex-col gap-4 `}
          style={{
            backgroundImage: "url(/images/banner.png)",
          }}
        >
          <div className="flex flex-col  md:w-1/2 w-full">
            <h1 className="sm:text-3xl text-2xl font-poppins font-semibold leading-tight">
              We leverage the power of spatial data and cutting-edge
              technologies
            </h1>
            <p className="text-sm leading-normal my-3">
              Streamline impact and outcome assessments for organizations,
              enabling rapid, cost-effective reporting and regulatory approval
            </p>

            <div>
              <button
                onClick={() => router.push("/services/impact-assessment")}
                className="bg-primary text-white h-10 px-4 text-sm rounded font-poppins cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
