"use client";

import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

type ProjectProps = (typeof projectsData)[number];

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  link
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group sm:mb-8 last:mb-0"
    >
      <section className="bg-slate-100 max-w-[42rem] border-black/[5] overflow-hidden sm:pr-8 relative sm:h-[25rem] mb-3 sm:mb-8 last-mb-0 even:pl-8 rounded-xl hover:bg-slate-200 transition-all sm:group-even:pl-8 dark:bg-slate-600 dark:hover:bg-slate-500">
        <div className="pt-4 pb-5 px-8 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold dark:text-slate-200">
            {title}
          </h3>
          <p className="mt-2 leading-relaxed dark:text-slate-200 ">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-3 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full font-bold"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <a href={link} target="_blank" className="mt-2 p-2 bg-blue-950 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full font-bold w-fit">
            Repositório
          </a>
        </div>
        <Image
          src={imageUrl}
          alt="Project Image"
          quality={90}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-xl shadow-2xl
        group-even:right-[initial]
        group-even:-left-40
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2
        group-hover:scale-[1.05]
        transition-all
        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2"
        />
      </section>
    </motion.div>
  );
}
