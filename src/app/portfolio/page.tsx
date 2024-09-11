/* eslint-disable @next/next/no-img-element */
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
  link: string | null;
  protected: boolean;
}

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [password, setPassword] = useState<string>("");
  const [passwordCorrect, setPasswordCorrect] = useState<boolean>(false);

  const envPassword =
    process.env.NEXT_PUBLIC_PORTFOLIO_PASSWORD || "default_password";

  useEffect(() => {
    const savedPassword = localStorage.getItem("portfolioPasswordCorrect");
    if (savedPassword === "true") {
      setPasswordCorrect(true);
    }

    const fetchedProjects = portfolioData.data.projects
      .filter((project: any) => !project.protected || passwordCorrect)
      .map((project: any) => ({
        ...project,
        details: project.description,
      }))
      .sort((a: Project, b: Project) => b.id - a.id);

    setProjects(fetchedProjects);
  }, [passwordCorrect]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handlePasswordSubmit = () => {
    if (password === envPassword) {
      setPasswordCorrect(true);
      localStorage.setItem("portfolioPasswordCorrect", "true");
    } else {
      alert("Incorrect password. Please try again.");
      setPassword("");
      setPasswordCorrect(false);
    }
  };

  return (
    <section className={styles.portfolio}>
      <PageTitle
        title="My Work & Projects"
        subTitle="Explore a curated selection of my recent projects, developments, and creative solutions."
      />

      {!passwordCorrect && (
        <div className={styles.passwordSection}>
          <input
            type="password"
            placeholder="Enter password to view protected projects"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.passwordInput}
          />
          <button
            onClick={handlePasswordSubmit}
            className={styles.passwordButton}
          >
            Submit
          </button>
          <a href="/contact" className={styles.requestLink}>
            Request Password
          </a>
        </div>
      )}

      <div className={styles.projectList}>
        {projects.map((project: Project) => (
          <div
            key={project.id}
            className={styles.projectCard}
            onClick={() => handleProjectClick(project)}
          >
            <a>
              <img src={project.images[0]} alt={project.name} />
              <h3>{project.name}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <button className={styles.seeMoreButton}>View Project</button>
            </a>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContent}>
            <button className={styles.closeButton} onClick={handleCloseModal}>
              &times;
            </button>
            <h2>{selectedProject.name}</h2>
            <div className={styles.imagesContainer}>
              {selectedProject.images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`${selectedProject.name} image ${idx + 1}`}
                />
              ))}
            </div>
            <p>{selectedProject.details}</p>
            <p>
              {selectedProject.link !== "null" && (
                <a
                  href={selectedProject.link ?? undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  Visit Project
                </a>
              )}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
