import React from "react";
import styles from "./Skills.module.scss";

export function Skills({ title = "My Skills" }) {
  const skills = [
    { name: "Digital Marketing", level: 95 },
    { name: "Growth Hacking", level: 90 },
    { name: "HTML", level: 90 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Node.js", level: 60 },
    { name: "Next.js", level: 70 },
    { name: "PHP", level: 60 },
    { name: "WordPress", level: 70 },
    { name: "AI Training", level: 60 },
    { name: "MySQL", level: 60 },
    { name: "GraphQL", level: 60 },
    { name: "REST API'S", level: 70 },
  ];

  const tags = [
    "Ux Design",
    "Google Analytics",
    "SEO",
    "Photoshop",
    "Cloud Server",
    "Ubuntu",
    "CentOS",
    "Google Ads",
    "AI",
    "Facebook Ads",
    "Marketing Automation",
    "Entrepreneurship",
    "Startups",
    "Lean Startup",
    "Chatbot",
    "Design Thinking",
  ];

  return (
    <section className={styles.skillsSection}>
      <h4>{title}</h4>
      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillItem}>
            <span className={styles.skillName}>{skill.name}</span>
            <div className={styles.progressBar}>
              <div
                className={styles.progress}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.tagsContainer}>
        {tags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
