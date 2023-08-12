"use client";

import Image from "next/image";
import React from "react";
import myself from "@/public/myself.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView({ sectionName: "Home" }, 0.6);

  return (
    <section
      ref={ref}
      className="mb-24 max-w-[50rem] text-center sm:mb-0 scroll-mt-36"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.6,
            }}
          >
            <Image
              src={myself}
              alt="M Vinicios Nativo"
              priority={true}
              className="w-28 h-28 object-cover border-[0.35rem] rounded-full border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="text-3xl absolute bottom-0 right-2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.6,
              duration: 1,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-10 px-4 font-medium text-[10px] !leading-[1.4] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span>
          Olá, meu nome é Marcos Vinicios. Estudante de Engenharia da
          Computação,{" "}
        </span>
        <span className="font-bold">Jr. DevOps </span> com{" "}
        <span className="font-bold">~3 anos</span> de experiência. Gosto de
        criar aplicações em nuvem e atuar em todas as etapas de desenvolvimento e deploy de um software.{" "}
        No momento estou estudando pelo curso <span className="font-bold">IBM DevOps and Software Engineering.</span>. Meu foco é{" "}
        <span className="underline">Amazon WebServices (AWS).</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          href="#contact"
          className="group bg-slate-900 px-7 py-3 text-white flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-slate-950 active:scale-105 transition-all"
        >
          Fale Comigo!{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition-all" />
        </Link>
        <a
          href="/meu_cv.pdf"
          download
          className="group bg-white text-slate-950 px-7 py-3 rounded-full flex items-center gap-2 outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all border border-black/10 hover:border-black/40"
        >
          Baixar CV{" "}
          <HiDownload className="opacity-70 group-hover:translate-y-1 transition-all" />
        </a>

        <a
          href="https://linkedin.com/in/onativo"
          target="_blank"
          className="bg-white text-slate-700 p-4 rounded-full flex items-center gap-2 text-[1.3rem] outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-slate-950 active:scale-105 transition-all border border-black/10 hover:border-black/40"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/onativo"
          target="_blank"
          className="bg-white text-slate-700 p-4 rounded-full flex items-center gap-2 text-[1.35rem] outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-slate-950 active:scale-105 transition-all border border-black/10 hover:border-black/40"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
