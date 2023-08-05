'use client'

import React from 'react'
import SectionHeading from './section_heading'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section className='mb-28 max-w-[43rem] text-center leading-7 sm:mb-40'
    initial={{opacity: 0, y:100}}
    animate={{opacity: 1, y: 0}}
    transition={{
        delay: 0.35
    }}
    >
        <SectionHeading>Sobre mim</SectionHeading>
        <p className="mb-3">
        Após trabalhar alguns anos na área{" "}
        <span className="font-medium">química</span>, senti o chamado de ir atrás do que eu realmente sinto prazer em fazer: programação. Comecei estudando <span className="font-medium">Desenvolvimento WEB</span> por conta própria até ingressar na <span className="italic">UNIVESP</span>. Hoje, esudando Engenharia da Computação, sinto-me <span className="italic">atraído</span> pelo desafio de aprender coisas novas. <span className="underline">Amo</span> a sensação de finalmente descobrir como resolver um problema. 
      </p>
      
      <p className='mb-3'>
        Minha stack gira em volta de <span className="font-medium">React, Next.js, Node.js, Python</span> e bancos de dados como <span className="font-medium">MongoDB, MySQL e SQLite </span>. Também estou aprendendo TypeScript e Tailwind CSS. Sou uma pessoa focada em aprender novas tecnologias e atualmente estou em busca de uma <span className="font-medium">nova posição full-time</span> ou até mesmo como <span className="font-medium">estágio</span> em home-office ou presencial na região de <span className="font-medium">Jacareí - SP ou São José dos Campos - SP</span>. Estou procurando por algo relacionado a desenvolvimento, seja web, frontend ou backend e/ou Python. <span className="font-medium">Mas já adianto </span>que sou flexível e posso me adaptar a qualquer desafio que seja proposto.
      </p>

      <p>
        <span className="italic">Quando não estou codando</span>, eu gosto de correr 🏃, cuidar de plantas 🪴 e cozinhar 👨‍🍳. Sou pai de três filhos <span className="font-medium">gatos</span> 🐱 e no momento estou estudando sobre TypeScript e a certificação AWS Certified Developer. Também dedico algumas horinhas semanais a aprender a tocar <span className="font-medium">guitarra 🎸</span>.
      </p>
    </motion.section>
  )
}
