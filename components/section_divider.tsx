'use client'

import React from 'react'
import { motion } from 'framer-motion'
export default function SectionDivider() {
  return (
    <>
      <motion.div className='bg-slate-300 my-6 h-2 w-1 rounded-full hidden sm:block'
    initial={{opacity: 0, y: 100}}
    animate={{opacity: 1, y: 0}}
    transition={{
        delay: 2
    }}></motion.div>
    <motion.div className='bg-slate-300 h-2 w-1 rounded-full hidden sm:block'
    initial={{opacity: 0, y: 100}}
    animate={{opacity: 1, y: 0}}
    transition={{
        delay: 2
    }}></motion.div>
    </>
  )
}