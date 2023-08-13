'use client'

import React from 'react'
import SectionHeading from './section_heading'
import { skillsData } from '@/lib/data'
import Image from 'next/image'
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
    initial: { opacity: 0, y: 100},
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index
        }
    })
}

export default function Skills() {
    const { ref } = useSectionInView({ sectionName: "Skills" });

  return (

    <motion.section className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 sm:w-85 overflow-hidden'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    ref={ref}
    id="skills">
        <SectionHeading>Minhas Skills</SectionHeading>
        <ul className='flex flex-wrap justify-center gap-2'>
            {
                skillsData.map((skill, index) => (
                    <motion.li key={index}
                    variants = {fadeInAnimationVariants}
                    initial = "initial"
                    whileInView = "animate"
                    viewport={{once: true}}
                    custom={index}>
                        <Image src={skill.imageUrl} alt={skill.title} className='w-[6rem] p-3 hover:scale-125 transition-all'/>
                    </motion.li>
                ))
            }
        </ul>
    </motion.section>
  )
}
