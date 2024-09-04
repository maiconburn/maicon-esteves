"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons"; // Ícone do GitHub

export function Footer() {
  const currentYear = new Date().getFullYear();

  const pathname = usePathname();

  return (
    <footer
      className={`${styles.footer} ${pathname === "/" ? styles.home : ""}`}
    >
      <div className={styles.footerContainer}>
        <div className={styles.leftSection}>
          <p>
            <a className={styles.copyright}>
              Copyright © {currentYear}{" "}
              <span className={styles.nameAuthor}>- Maicon Esteves</span>
            </a>
          </p>
        </div>
        <div className={styles.rightSection}>
          <Link
            href="https://github.com/maiconburn/maicon-esteves"
            passHref
            legacyBehavior
          >
            <a
              className={styles.gitBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className={styles.gitIcon} />
              <span>GitHub Repository</span>
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
