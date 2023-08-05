import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#sobre",
  },
  {
    name: "Projetos",
    hash: "#projetos",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experiência",
    hash: "#experiencia",
  },
  {
    name: "Contato",
    hash: "#contato",
  },
] as const;

export const experiencesData = [
  {
    title: "CompassUOL",
    location: "HomeOffice",
    description:
      "Integrante do programa de bolsas CompassUOL em parceria com Amazon Web Services. Adiquiri habilidades e conquistei minha certificação AWS Certified Cloud Practitioner",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "HOme",
    description:
      "Desenvolvedor FullStack em perídodo de aprendizagem, desenvolvendo projetos próprios para construção de um portfólio. Estudando ingressar no mercado como freelancer ao mesmo tempo em que procuro uma vaga de estágio para desenvovler minhas habilidades no mundo profissional. Minha stack inclui: React, Next.js, TypeScript, Tailwind, Prisma, Pyhton, JavaScript, HTML, CSS e MongoDB.",
    icon: React.createElement(FaReact),
    date: "2021 - presente",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "GitHub",
  "Amazon Web Services",
  "Docker",
  "Tailwind",
  "Express",
  "PostgreSQL",
  "Python",
  "MongoDB",
  "Framer Motion",
] as const;