"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/constants/Motion";
import { TypingText } from "../layout/CustomText";
import Slider from "react-slick";
import Image from "next/image";

const teams = [
  {
    image: "/images/teams/thiri.png",
    name: "THIRI SHWESIN AUNG",
    role: "Assessment Lead",
  },
  {
    image: "/images/teams/thomas.png",
    name: "THOMAS B. FISHER",
    role: "Assessment Lead",
  },
  {
    image: "/images/teams/robert.png",
    name: "ROBERT M. SANFORD",
    role: "Assessment Lead",
  },
  {
    image: "/images/teams/ben.png",
    name: "BEN CAVE",
    role: "Assessment Lead",
  },
  {
    image: "/images/teams/bonny.png",
    name: "BONNY P. MCCLAIN",
    role: "Geospatial Lead",
  },
];

const Team = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    cssEase: "linear",
    speed: 30000,
    autoplaySpeed: 5000,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="px-4 py-8">
      <motion.div
        variants={staggerContainer as any}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto flexCenter flex-col"
      >
        <TypingText title="MEET THE LEADERSHIP TEAM" textStyles="text-center" />
        <motion.div
          variants={staggerContainer as any}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="my-8"
        >
          <Slider {...settings}>
            {teams.map((team, index) => (
              <div
                key={index}
                className="dark:shadow cursor-pointer rounded p-2"
              >
                <Image
                  width={150}
                  height={150}
                  src={team.image}
                  alt={team.name}
                  loading="lazy"
                  className="w-[150px] h-[150px] rounded-full mx-auto object-cover"
                />

                <div className="mt-2">
                  <h3 className="text-center font-poppins font-medium uppercase">
                    {team.name}
                  </h3>
                  <p className="text-center text-sm font-medium capitalize">
                    {team.role}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Team;
