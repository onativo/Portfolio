"use client";

import React, { useContext } from "react";
import SectionHeading from "./section_heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme_context";

export default function Experiences() {
  const { ref } = useSectionInView({ sectionName: "Experiência" });
  const { theme } = useTheme();

  return (
    <motion.section
      id="experiencia"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-20 mt-28 scroll-mt-[5.5rem] sm:mb-50 sm:w-85"
    >
      <SectionHeading>Minhas experiências</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #93ca3af",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === "dark" ? "#0f172a" : "#f1f5f9",
                fontSize: "3rem",
                color: theme === "dark" ? "#f1f5f9" : "#0f172a",
                fontWeight: "bold",
              }}
            >
              <h3 className="font-semibold capitalize dark:text-slate-950">
                {item.title}
              </h3>
              {/* <p className="font-normal !mt-0 dark:text-slate-950">
                {item.location}
              </p> */}
              <p className="font-normal !mt-0 dark:text-slate-800">
                {item.posicao}
              </p>
              <p className="!mt-1 !font-normal text-slate-700">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
}
