"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { ParticlesContainer } from "../ParticlesContainer/ParticlesContainer";
import styles from "./Header.module.scss";

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <header
        className={`${styles.header} ${pathname === "/" ? styles.home : ""}`}
      >
        <div className={styles.headerContainer}>
          <div className={styles.leftSection}>
            <Link href="/" className={styles.avatar}>
              <Image
                src="/images/avatar.jpg"
                alt="avatar"
                width={50}
                height={50}
              />
            </Link>

            <Link href="/" className={styles.titleLink}>
              <h1 className={styles.title}>Maicon Esteves</h1>
            </Link>
          </div>
          <div className={styles.rightSection}>
            <button className={styles.menuToggle} onClick={toggleMenu}>
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </button>
            <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ""}`}>
              <Link
                href="/about"
                className={`${styles.link} ${
                  isActive("/about") ? styles.active : ""
                }`}
              >
                About
              </Link>
              <Link
                href="/resume"
                className={`${styles.link} ${
                  isActive("/resume") ? styles.active : ""
                }`}
              >
                Resume
              </Link>
              <Link
                href="/portfolio"
                className={`${styles.link} ${
                  isActive("/portfolio") ? styles.active : ""
                }`}
              >
                Portfolio
              </Link>
              <Link
                href="https://medium.com/@maiconribeiroesteves"
                className={styles.link}
                target="_blank"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className={`${styles.link} ${
                  isActive("/contact") ? styles.active : ""
                }`}
              >
                Contact
              </Link>
              <div className={styles.socialLinks}>
                <Link
                  href="https://github.com/maiconburn"
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className={styles.socialIcon}
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/maiconburn/"
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className={styles.socialIcon}
                  />
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <div className={styles.particlesContainerInternal}>
        <ParticlesContainer />
      </div>
    </>
  );
}

export default Header;
