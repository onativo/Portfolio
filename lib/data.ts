import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import empty from "@/public/empty.png"

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

export const projectsData = [
  {
    title: "Projecta",
    description:
      "Projeto desenvolvido em React.Js, seu propósito é ser uma ferramenta para controle financeiro de projetos. O usuário pode inserir serviços a serem realizados, junto de seus respectivos orçamentos, e no final poderá conferir um resumo de todo o gasto envolvido.",
    tags: ["React", "Bootstrap"],
    imageUrl: empty,
  },
  {
    title: "Loja Virtual",
    description:
      "Pequena aplicação desenvolvida com React.Js que basicamente serve como uma loja virtual. Os dados são consultados através de uma API e dispostos na página inicial como produtos. O usuário pode ir adicionando produtos ao carrinho e no final verificar a sua compra. Também pode editar suas compras dentro do carrinho, aumentando ou diminuindo o número de itens.",
    tags: ["React", "Bootstrap"],
    imageUrl: empty,
  },
  {
    title: "BlogApp",
    description:
      "Um Blog simples desenvolvido em Node.JS, onde o usuário pode se cadastrar e criar ostagens ao famoso estilo blogger. As postagens são públicas e todos os outros usuários podem vê-las. Os dados das publicações são armazenados como documentos do MongoDB.",
    tags: ["React", "Node.js", "MongoDB"],
    imageUrl: empty,
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