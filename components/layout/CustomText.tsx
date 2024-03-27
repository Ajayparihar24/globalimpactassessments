"use client";
import { textContainer, textVariant2 } from "@/constants/Motion";
import { motion } from "framer-motion";
export const TypingText = ({
  title,
  textStyles,
}: {
  title: string;
  textStyles: string;
}) => (
  <motion.p
    variants={textContainer}
    className={`font-righteous text-primary sm:text-5xl text-[32px] break-words ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);