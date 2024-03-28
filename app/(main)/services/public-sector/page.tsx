"use client";

import { staggerContainer, textVariant } from "@/constants/Motion";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/layout/Footer";

const data = [
  {
    image: "/images/public-sector/1.png",
    title: "GIS Mapping and Analysis",
    description:
      "We use advanced geospatial technologies to provide actionable insights into various public concerns, such as land use planning, resource allocation, environmental management, and emergency response.",
  },
  {
    image: "/images/public-sector/2.png",
    title: "GIS Mapping and Analysis",
    description:
      " We provide training and capacity-building initiatives to public sector staff, strengthening their ability to manage environmental and social challenges",
  },
  {
    image: "/images/public-sector/3.png",
    title: "Capacity Building",
    description:
      "We offer comprehensive solutions to manage and reduce disaster risks. Our services include analyzing potential risks, devising proactive strategies for prevention and mitigation, and designing post-disaster response and recovery plans.",
  },
  {
    image: "/images/public-sector/4.png",
    title: "Climate Change Adaptation and Mitigation",
    description:
      "We support public entities in developing and implementing strategies to adapt to climate change and reduce greenhouse gas emissions.",
  },
  {
    image: "/images/public-sector/5.png",
    title: "Policy Development Support",
    description:
      "Leveraging our expertise in environmental, social, and health impact assessments, we provide data-driven insights to support the development of sustainable and responsible policies.",
  },
];

const PublicSectorPage = () => {
  return (
    <>
      <section className="px-4 py-8">
        <motion.div
          variants={staggerContainer as any}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex items-center md:flex-row flex-col-reverse md:gap-4 gap-6"
        >
          <motion.div variants={textVariant(1.1)} className=" md:w-1/2 w-full">
            <motion.h1 className="md:text-3xl text-2xl font-semibold">
              PUBLIC SECTOR
            </motion.h1>
            <motion.p className="text-sm mt-2 opacity-70 md:w-[70%]">
              Across departments and agencies, we leverage our environmental
              expertise and innovative technologies to drive efficiency,
              transparency, and positive change in the public sector.
            </motion.p>
          </motion.div>
          <motion.img
            variants={textVariant(1.1)}
            src="/images/public-sector/globe-digitial-line.png"
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
          className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-8"
        >
          {data.map((obj, index) => (
            <motion.div
              key={index}
              variants={textVariant(1.1)}
              className="shadow-lg p-4 rounded flex flex-col items-center gap-4"
            >
              <Image
                width={200}
                height={200}
                src={obj.image}
                alt={obj.title}
                loading="lazy"
                className="mx-auto  rounded-full object-contain"
              />

              <motion.div>
                <motion.h1 className=" font-semibold">{obj.title}</motion.h1>
                <motion.p className="text-sm mt-2 opacity-70">
                  {obj.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="px-4 py-8">
        <motion.div
          variants={staggerContainer as any}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.h1 className="md:text-3xl text-2xl font-semibold text-center">
            Featured Projects
          </motion.h1>
          <motion.div variants={textVariant(1.1)} className="mt-8 sm:w-[400px] sn:h-[400px] mx-auto">
            <Link href="capacity-building-program" >
              <motion.img
                variants={textVariant(1.1)}
                src="/images/public-sector/6.png"
                alt="public-sector"
                loading="lazy"
                className=" rounded-full mx-auto object-cover"
              />
            </Link>
            <motion.p className="text-center mt-6 opacity-70 italic">Capacity Building Program</motion.p>
          </motion.div>
        </motion.div>
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
              src="/images/gia.png"
              alt="outcome-assessment"
              loading="lazy"
              className="w-full mx-auto object-contain rounded"
            />

            <motion.div className="flex  flex-col gap-8 max-w-[700px] mx-auto w-full">
              <Link
                href="/services/aos"
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

export default PublicSectorPage;
