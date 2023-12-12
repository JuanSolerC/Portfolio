"use client";
import React, {useTransition, useState} from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
  title: "Skills",
  id: "skills",
  content: (
      <ul className='list-disc pl-2 lg:text-lg'>
          <li>PostgreSQL</li>
          <li>Estadística y Probabilidad</li>
          <li>Análisis de Datos</li>
          <li>Power BI</li>
          <li>Excel</li>
      </ul>
  )
  },
  {
      title: "Education",
      id: "education",
      content: (
          <ul className='list-disc pl-2 lg:text-lg'>
              <li>Analisis y desarrolo de sistemas de información-SENA</li>
          </ul>
      )
  },
  {
      title: "Certifications",
      id: "certifications",
      content: (
          <ul className='list-disc pl-2 lg:text-lg'>
              <li>Data Analist-Platzi</li>
              <li>Domina Excel-Platzi</li>
              <li>Business Intelligence y Data Management-Platzi</li>
              <li>Análisis de Datos y Business Intelligences-Platzi</li>
              <li>Bases de datos SQL-Platzi</li>
              <li>Fundamentos de Data e Inteligencia Artificial-Platzi</li>
          </ul>
      )
  },
]


const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition]= useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  }

  return (
    <section className='text-white py-20' id='about'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="./images/About_image.svg" width={500} height={500}/>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl py-5 font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>Soy una persona proactiva con una amplia curiosidad intelectual. Como data analyst y periodista digital, me destaco por ofrecer soluciones creativas. Mi pasión por la inteligencia artificial, los datos y la ciencia impulsa mi compromiso con el aprendizaje constante y la búsqueda de nuevas formas de contribuir al mundo digital. ¡Bienvenido a mi espacio, donde la innovación y la colaboración son fundamentales!
          </p>
          <div className='flex flex-row lg:text-lg mt-8'>
                        <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className='flex flex-row justify-start mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection