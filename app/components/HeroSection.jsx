"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className='lg:py-24'>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div 
            initial={{opacity: 0, scale: 0.5}} 
            animate={{opacity:1, scale: 1}} 
            transition={{duration: 0.5}} 
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold'>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600'>Hello, I&apos;m {""}</span>
                <TypeAnimation
                    sequence={[
                        'Juan',
                        1000,
                        'Data Analyst',
                        1000,
                        'Digital Journalist',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                ¡Convierte la curiosidad en soluciones innovadoras con mi enfoque creativo, pasión por la ciberseguridad y ciencia de datos!
                </p>
                <div>
                    <Link href = "/#about" className='px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white lg:text-xl'>About Me</Link>
                    <a href="documents/Juan-Soler-HV.pdf"
                    className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
                    <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV
                    </span>
                    </a>
                </div>
            </motion.div>
            <div className='col-span-4 place-self-center mt-4 lg:mt-0'>
                <motion.div 
                initial={{opacity: 0, scale: 0.5}} 
                animate={{opacity:1, scale: 1}} 
                transition={{duration: 0.5}} 
                className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                    <Image
                    src={"./images/image_ini.svg"}
                    alt='image_ini'
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                    width={350}
                    height={350}
                    />
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection
