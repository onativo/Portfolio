"use client";

import React from "react";
import SectionHeading from "./section_heading";
import { badges } from "@/lib/data";
import Image from "next/image";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView({ sectionName: "Badges" });

  return (
    <motion.section
      className="mb-36 mt-5 max-w-[50rem] h-[30rem] scroll-mt-[5.5rem] sm:mb-50 sm:w-85 m-auto text-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      ref={ref}
      id="badges"
    >
      <SectionHeading>Meus Badges</SectionHeading>
      <ul className="flex flex-wrap justify-center sm:gap-10 gap-4">
        {badges.map((badge, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <a href={badge.link} target="_blank" className="">
              <Image
                src={badge.imageUrl}
                alt={badge.title}
                className="w-60 h-60 rounded transition-all p-2 skill-logo"
              />
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
