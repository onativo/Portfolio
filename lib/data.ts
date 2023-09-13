import React from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { CiCompass1 } from "react-icons/ci";

import empty from "@/public/empty.png";
import aws from "@/public/img/aws.svg";
import bootstrap from "@/public/img/bootstrap.svg";
import css3 from "@/public/img/css3.svg";
import docker from "@/public/img/docker.svg";
import git from "@/public/img/git.svg";
import github from "@/public/img/github.svg";
import html5 from "@/public/img/html5.svg";
import javascript from "@/public/img/javascript.svg";
import linux from "@/public/img/linux.svg";
import mongodb from "@/public/img/mongodb.svg";
import mysql from "@/public/img/mysql.svg";
import nextjs from "@/public/img/nextjs.svg";
import nodejs from "@/public/img/nodejs.svg";
import python from "@/public/img/python.svg";
import react from "@/public/img/react.svg";
import tailwindcss from "@/public/img/tailwindcss.svg";
import typescript from "@/public/img/typescript.svg";
import vscode from "@/public/img/vscode.svg";
import cloud_practitioner from "@/public/img/cloud_practitioner.png"

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
    name: "Badges",
    hash: "#badges",
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
    title: "Monitor do Curso CS50 - Remoto",
    location: "Remoto",
    posicao: "Voluntariado",
    description:
      "Um dos 100 selecionados para participar da monitoria do curso CC-50. Este curso é ofertado pela Universidade de Harvard e traduzido para português pela Fundação Estudar. Os monitores são responsáveis por tirar dúvidas e auxiliar os estudantes do curso durante seu aprendizado.",
    icon: React.createElement(FaPeopleGroup),
    date: "2023 - julho à dezembro",
  },
  {
    title: "CompassUOL - Remoto",
    location: "Remoto",
    posicao: "Estagiário",
    description:
      "Integrante do programa de bolsas CompassUOL em parceria com Amazon Web Services. Adiquiri habilidades e conquistei minha certificação AWS Certified Cloud Practitioner",
    icon: React.createElement(CiCompass1),
    date: "2023 - fevereiro à julho",
  },
] as const;

export const projectsData = [
  {
    title: "Projecta",
    description:
      "Projeto desenvolvido em React.Js, seu propósito é ser uma ferramenta para controle financeiro de projetos. O usuário pode inserir serviços a serem realizados, junto de seus respectivos orçamentos, e no final poderá conferir um resumo de todo o gasto envolvido.",
    tags: ["React", "Bootstrap"],
    imageUrl: empty,
    link: "https://github.com/onativo/React-Projecta"
  },
  {
    title: "Loja Virtual",
    description:
      "Pequena SPA de loja virtual desenvolvida com React.Js. Os produtos são consultados através de uma API e dispostos na página inicial. O usuário pode adicionar produtos ao carrinho e no final verificar a sua compra. Ainda, é possivel editar quantidade de itens no carrinho.",
    tags: ["React", "Bootstrap"],
    imageUrl: empty,
    link: "https://github.com/onativo/Desafio-Season"
  },
  {
    title: "BlogApp",
    description:
      "Um Blog simples desenvolvido em Node.JS, onde o usuário pode se cadastrar e criar ostagens ao famoso estilo blogger. As postagens são públicas e todos os outros usuários podem vê-las. Os dados das publicações são armazenados como documentos do MongoDB.",
    tags: ["React", "Node.js", "MongoDB"],
    imageUrl: empty,
    link: "https://github.com/onativo/blogApp"
  },
] as const;

export const skillsData = [
  {
    title: "AWS",
    imageUrl: aws,
  },
  {
    title: "Bootstrap",
    imageUrl: bootstrap,
  },
  {
    title: "CSS3",
    imageUrl: css3,
  },
  {
    title: "Docker",
    imageUrl: docker,
  },
  {
    title: "Git",
    imageUrl: git,
  },
  {
    title: "GitHub",
    imageUrl: github,
  },
  {
    title: "HTML5",
    imageUrl: html5,
  },
  {
    title: "JavaScript",
    imageUrl: javascript,
  },
  {
    title: "Linux",
    imageUrl: linux,
  },
  {
    title: "MongoDB",
    imageUrl: mongodb,
  },
  {
    title: "MySQL",
    imageUrl: mysql,
  },
  {
    title: "Next.Js",
    imageUrl: nextjs,
  },
  {
    title: "Node.Js",
    imageUrl: nodejs,
  },
  {
    title: "Python",
    imageUrl: python,
  },
  {
    title: "React",
    imageUrl: react,
  },
  {
    title: "TailWindCSS",
    imageUrl: tailwindcss,
  },
  {
    title: "TypeScript",
    imageUrl: typescript,
  },
  {
    title: "VsCode",
    imageUrl: vscode,
  },
] as const;

export const badges = [
  {
    title: "AWS Certified Cloud Practitioner",
    imageUrl: cloud_practitioner,
    link: "https://www.credly.com/badges/07704469-746f-4445-a2bd-76336ac0a11e",
  }
]