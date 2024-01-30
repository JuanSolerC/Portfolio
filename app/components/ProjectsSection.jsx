"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "TransMilenio para Todos: Un Análisis de Financiación Progresiva por Estratos en Bogotá ",
    description: "En este proyecto se abordará la viabilidad de la tarifa cero en el transporte publico en bogotá",
    image: "./images/transmi.png",
    tag: ["All", "Data Analyst"],
    previewUrl: "https://juansolerc.github.io/Transmilenio-para-Todos-los-Bogotanos/",
  },
  {
    id: 2,
    title: "Más Allá de los Datos: El Caso de Cambridge Analytica y su Impacto Global",
    description: "Proyecto sobre Cambridge Analytica que analiza su influencia en elecciones, impacto en la privacidad y las respuestas legales",
    image: "./images/C_A.png",
    tag: ["All", "Digital Journalist"],
    previewUrl: "https://juansolerc.github.io/Cambridge-Analytica/",
  },
  {
    id: 3,
    title: "Chances en Bogotá",
    description: "Mapa interactivo en Power BI de todos los chances de Bogotá, brindando información detallada de cada puesto",
    image: "./images/chances_b.png",
    tag: ["All", "Data Analyst"],
    previewUrl: "https://app.powerbi.com/view?r=eyJrIjoiNmRjNzZmNmYtMTc0ZS00NTkzLTk3ZGEtOGRjYTYxNzQ0YTMzIiwidCI6ImZhMTYyNmJlLTUxMDMtNGM5MC1iYzJmLTY2NzAxMWIzMzAwYyJ9",
  },
  /*
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "./images/projects/1.jpeg",
    tag: ["All", "Digital Journalist"],
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "./images/projects/1.jpeg",
    tag: ["All", "Data Analyst"],
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "./images/projects/1.jpeg",
    tag: ["All", "Digital Journalist"],
    gitUrl: "/",
    previewUrl: "/",
  },
*/
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-24">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Data Analyst"
          isSelected={tag === "Data Analyst"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Digital Journalist"
          isSelected={tag === "Digital Journalist"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
