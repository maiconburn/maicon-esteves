"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import styles from "./portfolio.module.scss";

import portfolioData from "./portfolioData.json";

interface Project {
  id: number;
  name: string;
  images: string[];
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

  const handleOverlayClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains(styles.modalOverlay)) {
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2>{project.name}</h2>

        <div className={styles.imagesContainer}>
          {project.images.map((image, idx) => (
            <Image
              key={idx}
              src={image}
              alt={`${project.name} image ${idx + 1}`}
              width={600}
              height={400}
            />
          ))}
        </div>

        <p>{project.details}</p>
      </div>
    </div>
  );
};

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    // Load the JSON data
    const fetchedProjects = portfolioData.data.projects
      .map((project: any) => ({
        id: project.id,
        name: project.name,
        description: project.description,
        details: project.description,
        images: project.images,
      }))
      .sort((a: Project, b: Project) => b.id - a.id);

    setProjects(fetchedProjects);
  }, []);

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
            <a>
              <Image
                src={project.images[0]}
                alt={project.name}
                width={600}
                height={400}
              />
              <h3>{project.name}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <button className={styles.seeMoreButton}>View Project</button>
            </a>
          </div>
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </section>
  );
}
