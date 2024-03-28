"use client";

import { staggerContainer, textVariant } from "@/constants/Motion";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/layout/Footer";

const services = [
  {
    image: "/images/assessment/10.png",
    title: "Environmental Impact Assessment",
    link: "/eia",
  },
  {
    image: "/images/assessment/15.png",
    title: "Social Impact Assessment",
    link: "/sia",
  },
  {
    image: "/images/assessment/14.png",
    title: "Health Impact Assessment",
    link: "/hia",
  },
  {
    image: "/images/assessment/13.png",
    title: "Human Rights Impact Assessment",
    link: "/hria",
  },
  {
    image: "/images/assessment/17.png",
    title: "Outcomes Assessment",
    link: "/services/outcomes-assessment",
  },
  {
    image: "/images/assessment/11.png",
    title: "Life Cycle Assessment",
    link: "/lca",
  },
];
const ImpactAssessmentPage = () => {
  return (
    <>
      <section className="px-4 py-8">
        <motion.div
          variants={staggerContainer as any}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex items-center md:flex-row flex-col md:gap-4 gap-6"
        >
          <motion.div variants={textVariant(1.1)} className=" md:w-1/2 w-full">
            <motion.h1 className="md:text-3xl text-2xl font-semibold">
              IMPACT ASSESSMENT SERVICES
            </motion.h1>
            <motion.p className="text-sm mt-2 opacity-70 md:w-[70%]">
              Business and Philanthropy can be powerful agents of positive
              change. Our impact experts and cutting-edge technologies empower
              clients to revolutionize their core operations, driving lasting
              positive impact on the economy, environment, and society – all
              while ensuring long-term profitability and sustainability.
            </motion.p>
          </motion.div>
          <motion.img
            variants={textVariant(1.1)}
            src="/images/assessment/16.png"
            alt="outcome-assessment"
            loading="lazy"
            className="md:w-1/2 w-full md:h-[500px] object-contain rounded"
          />
        </motion.div>
      </section>

      <section className="px-4 py-8">
        <motion.div
          variants={staggerContainer as any}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.div variants={textVariant(1.1)}>
            <motion.h1 className="sm:text-2xl text-xl font-semibold">
              GIA’S ASSESSMENT PATHWAY
            </motion.h1>
            <motion.div className="w-full h-[1px] dark:bg-white bg-black my-2 rounded" />
          </motion.div>

          <motion.img
            variants={textVariant(1.1)}
            src="/gifs/Framework.gif"
            alt="EIA"
            loading="lazy"
            className="mt-8 mx-auto md:max-w-[90%] w-full"
          />
        </motion.div>
      </section>

      <section className="px-4 py-8">
        <motion.div
          variants={staggerContainer as any}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.div >
            <motion.h1 className="sm:text-2xl text-xl font-semibold">
              OUR SERVICES
            </motion.h1>
            <motion.div className="w-full h-[1px] dark:bg-white bg-black my-2 rounded" />
          </motion.div>
          <div  className="grid lg:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-6 mt-8">
            {services.map((obj, index) => (
              <motion.div
                key={index}
                className="shadow-lg p-4 rounded"
              >
                <motion.h1 className="font-semibold mb-4">
                  {obj.title}
                </motion.h1>
                <Link href={obj.link}>
                  <Image
                    width={400}
                    height={400}
                    src={obj.image}
                    alt={obj.title}
                    loading="lazy"
                    className="w-full object-contain rounded"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="px-4  py-4">
        <motion.div
          variants={staggerContainer as any}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.div
            variants={textVariant(1.1)}
            style={{
              backgroundImage: "url(/images/assessment/contact.png)",
            }}
            className="w-full h-[300px] bg-cover bg-no-repeat bg-current flex items-center justify-center rounded"
          >
            <a
              href="mailto:inquiry@globalimpactassessment.com"
              className="border rounded px-4 py-3 border-white text-white"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
};

export default ImpactAssessmentPage;
