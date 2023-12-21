"use client";

import React from "react";
import SectionHeading from "./section_heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView({ sectionName: "Sobre" }, 0.3);

  return (
    <motion.section
      ref={ref}
      className="mb-5 mt-20 max-w-[45rem] text-center leading-7 sm:mb-40 scroll-mt-[5.5rem]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.35,
      }}
      id="sobre"
    >
      <SectionHeading>Sobre mim</SectionHeading>
      <p className="mb-3">
        Após trabalhar alguns anos na área{" "}
        <span className="font-medium">química</span>, senti o chamado de ir
        atrás do que eu realmente sinto prazer em fazer: programação. Comecei
        estudando <span className="font-medium">Desenvolvimento WEB</span> por
        conta própria até ingressar na <span className="italic">UNIVESP</span>.
        Hoje, esudando Engenharia da Computação, sinto-me{" "}
        <span className="italic">atraído</span> pelo desafio de aprender coisas
        novas. <span className="underline">Amo</span> a sensação de finalmente
        descobrir como resolver um problema.
      </p>

      <p className="mb-3">
        Minha stack gira em volta de{" "}
        <span className="font-medium">React, Next.js, Node.js, Python</span> e
        bancos de dados como{" "}
        <span className="font-medium">MongoDB, MySQL e SQLite </span>. Também
        estou aprendendo TypeScript e Tailwind CSS. Sou uma pessoa focada em
        aprender novas tecnologias e atualmente estou em busca de uma{" "}
        <span className="font-medium">nova posição full-time</span> ou até mesmo
        como <span className="font-medium">estágio</span> em home-office ou
        presencial na região de <span className="font-medium">Jacareí</span> ou{" "}
        <span className="font-medium">São José dos Campos</span>. Estou
        procurando por algo relacionado a desenvolvimento, seja web, frontend ou
        backend e/ou Python.{" "}
        <span className="font-medium">Mas já adianto </span>que sou flexível e
        posso me adaptar a qualquer desafio proposto.
      </p>

      <p>
        <span className="italic">Quando não estou codando</span>, eu gosto de
        correr 🏃, cuidar de plantas 🪴 e cozinhar 👨‍🍳. Sou pai de três filhos{" "}
        <span className="font-medium">gatos</span> 🐱. Ainda, estou
        estudando sobre TypeScript como hobby e meu próximo objetivo é conquistar a certificação AWS Certified Developer.
        Também dedico algumas horinhas semanais a aprender a tocar{" "}
        <span className="font-medium">guitarra 🎸</span>.
      </p>
    </motion.section>
  );
}
