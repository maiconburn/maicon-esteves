"use client";
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
  faAward,
  faStar,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Timeline.module.scss";

const iconMap: { [key: string]: IconDefinition } = {
  faBriefcase: faBriefcase,
  faGraduationCap: faGraduationCap,
  faAward: faAward,
  faStar: faStar,
};

const getIconColor = (icon: string) => {
  switch (icon) {
    case "faAward":
      return "var(--color-warning)";
    case "faGraduationCap":
      return "var(--color-primary)";
    case "faBriefcase":
      return "var(--color-success)";
    case "faStar":
      return "var(--color-danger)";
    default:
      return "var(--foreground-color)";
  }
};

interface TimelineProps {
  data: Array<{
    icon: string;
    title?: string;
    subtitle?: string;
    date?: string;
    description?: string[];
  }>;
}

export const Timeline: React.FC<TimelineProps> = ({ data }) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleItems((prevVisible) => [...prevVisible, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      if (itemsRef.current) {
        itemsRef.current.forEach((item) => {
          if (item) observer.unobserve(item);
        });
      }
    };
  }, []);

  return (
    <div className={styles.timeline}>
      {data.map((item, index) => (
        <div
          key={index}
          data-index={index}
          ref={(el: any) => (itemsRef.current[index] = el!)}
          className={`${styles.timelineItem} ${
            visibleItems.includes(index) ? styles.visible : ""
          }`}
        >
          <div
            className={styles.timelineIcon}
            style={{ color: getIconColor(item.icon) }}
          >
            <FontAwesomeIcon icon={iconMap[item.icon]} />
          </div>
          {item.title && (
            <div className={styles.timelineContent}>
              <h3>{item.title}</h3>
              <h4>{item.subtitle}</h4>
              <p>{item.date}</p>
              {item.description &&
                item.description.map((desc, idx) => <p key={idx}>{desc}</p>)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
