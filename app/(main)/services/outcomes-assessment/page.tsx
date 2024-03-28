"use client";

import { staggerContainer, textVariant } from "@/constants/Motion";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/layout/Footer";

const OutcomesAssessmentPage = () => {
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
              Pioneering Outcome <br /> Assessment Solutions
            </motion.h1>
            <motion.p className="text-sm mt-2 opacity-70 md:w-[70%]">
              GIA&#39;s assessment system and advanced analytics, including
              machine learning and satellite imaging enable precise, scalable,
              and efficient measurement of social and environmental outcomes.
            </motion.p>
          </motion.div>
          <motion.img
            variants={textVariant(1.1)}
            src="/images/assessment/17.png"
            alt="outcome-assessment"
            loading="lazy"
            className="md:w-1/2 w-full md:h-[500px] object-contain rounded"
          />
        </motion.div>
      </section>

      <section className="px-4 py-8 ">
        <>
          <h1 className="md:text-3xl sm:text-2xl text-xl font-semibold text-center text-blue-600">
            Enhancing Philanthropic Impact Through Data-Driven Insights
          </h1>
          <p className="text-sm mt-4 opacity-70 md:w-[70%] mx-auto w-full">
            The critical challenge for philanthropic organizations committed to
            driving social and environmental change is the ability to measure
            and identify evidence-based outcomes of the programs effectively.
            There is a clear need for scalable and robust evaluation methods to
            channel funds toward programs with the most significant impacts.
            Here are four key areas that are steering this exciting journey:
          </p>
        </>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-8">
          <Card
            img="/images/assessment/OA1.png"
            title="Data Collection"
            des="Utilizing a combination of satellite and on-the-ground data collection, enhanced with advanced analytics for tailored and precise outcome measurement."
          />
          <Card
            img="/images/assessment/OA2.png"
            title="Digital Survey Deployment and Monitoring"
            des="Developing and deploying standardized digital surveys on remote platforms with capabilities for real-time response monitoring."
          />
          <Card
            img="/images/assessment/OA3.png"
            title="Imaging and Analytics"
            des="Contracting high-resolution satellite imagery, supported by machine learning and algorithmic analysis to detect program-related environmental or infrastructural changes."
          />
          <Card
            img="/images/assessment/OA4.png"
            title="Stakeholder Engagement"
            des="Streamlining stakeholder engagement through precise identification and mapping, fostering effective collaborations and communications."
          />
          <Card
            img="/images/assessment/OA5.png"
            title="Decision Analysis"
            des="Analyzing data using Natural Language Processing (NLP) and classification algorithms, combined with Decision Analysis for systematic ranking of programs and aiding in impactful funding decisions."
          />
          <Card
            img="/images/assessment/OA6.png"
            title="Ongoing Impact Evaluations"
            des="Conducting baseline and continuous evaluations to assess social impact, advising on program scalability and sustainability, and providing strategic recommendations for funding allocation."
          />
          <Card
            img="/images/assessment/OA7.png"
            title="Report & Submission"
            des="Creating interactive and real-time dashboards to visualize data, making complex information accessible and understandable."
          />
        </div>
      </section>

      <section className="px-4 py-8">
        <motion.div
          variants={staggerContainer as any}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.h1 className="md:text-3xl text-2xl font-semibold text-center">
            A System For All Your Assessment Needs
          </motion.h1>
          <motion.div variants={textVariant(1.1)} className="">
            <motion.img
              variants={textVariant(1.1)}
              src="/images/assessment/AOS-07.png"
              alt="outcome-assessment"
              loading="lazy"
              className="w-full mx-auto object-contain rounded"
            />

            <motion.div className="flex  flex-col gap-8 max-w-[700px] mx-auto w-full">
              <Link
                href="/aos-outcome-assessment"
                className="border-2 border-black dark:border-white p-3 rounded w-full hover:bg-white dark:hover:bg-transparent transition text-center"
              >
                ACCESS TO AOS
              </Link>

              <div>
                <Link
                  href="/services/impact-assessment"
                  className="relative  after:absolute after:-bottom-1 after:left-0 after:content-[''] after:w-full after:dark:bg-white after:bg-black after:h-[2px]"
                >
                  BACK TO IMPACT ASSESSMENT
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
};

export default OutcomesAssessmentPage;

const Card = ({
  img,
  title,
  des,
}: {
  img: string;
  title: string;
  des: string;
}) => {
  return (
    <div className="shadow-lg p-4 rounded flex flex-col items-center justify-center gap-4">
      <Image
        src={img}
        alt="outcome-image"
        width={200}
        height={200}
        className="object-contain rounded-full"
      />
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="">{title}</h1>
        <p className="text-sm opacity-70">{des}</p>
      </div>
    </div>
  );
};
