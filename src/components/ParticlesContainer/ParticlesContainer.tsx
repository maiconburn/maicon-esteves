"use client";

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine, IOptions, RecursivePartial } from "tsparticles-engine";
import styles from "./ParticlesContainer.module.scss";

export function ParticlesContainer() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const options: RecursivePartial<IOptions> = {
    fullScreen: {
      enable: true,
      zIndex: 0,
    },
    particles: {
      number: {
        value: 70,
        density: {
          enable: true,
          area: 700,
        },
      },
      color: {
        value: "#FFF",
      },
      links: {
        color: "#FFF",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        outModes: {
          default: "bounce",
        },
        random: false,
        straight: false,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 2 },
      },
    },
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    detectRetina: true,
    background: {
      color: "#03092d",
      image:
        "radial-gradient(circle, rgba(3,9,45,1) 0%, rgba(0,4,37,1) 33%, rgba(0,0,0,1) 100%)",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
    },
  };

  return (
    <Particles
      className={styles.particles}
      init={particlesInit}
      options={options}
    />
  );
}

export default ParticlesContainer;
