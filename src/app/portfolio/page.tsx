"use client";
import React, { useState } from "react";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import projects from "./portfolioData.json"; // Importa o JSON com os projetos
import styles from "./portfolio.module.scss";

// Define o tipo para os projetos, agora com array de imagens
interface Project {
  id: number;
  title: string;
  images: string[]; // Agora é um array de strings
  description: string;
  details: string;
}

const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) => {
  if (!project) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2>{project.title}</h2>

        {/* Exibe todas as imagens do projeto */}
        <div className={styles.imagesContainer}>
          {project.images.map((image, idx) => (
            <img
              key={idx}
              src={image}
              alt={`${project.title} image ${idx + 1}`}
            />
          ))}
        </div>

        <p>{project.details}</p>
      </div>
    </div>
  );
};

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className={styles.portfolio}>
      <PageTitle
        title="My Work & Projects"
        subTitle="Explore a curated selection of my recent projects, developments, and creative solutions."
      />

      <div className={styles.projectList}>
        {projects.map((project: Project) => (
          <div
            key={project.id}
            className={styles.projectCard}
            onClick={() => handleProjectClick(project)}
          >
            {/* Exibe a primeira imagem como capa do projeto */}
            <img src={project.images[0]} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      {/* Modal para exibir os detalhes do projeto */}
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </section>
  );
}
