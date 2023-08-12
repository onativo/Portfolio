"use client";

import React, { useEffect, useRef } from "react";
import SectionHeading from "./section_heading";
import { projectsData } from "@/lib/data";
import ProjectCard from "./projects_card";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView({ sectionName: "Projetos" }, 0.25);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.35,
      }}
      id="projetos"
      className="scroll-mt-[5.5rem] mt-5 mb-20"
    >
      <SectionHeading>Meus Projetos</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}
