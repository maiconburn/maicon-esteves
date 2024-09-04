import React from "react";
import Image from "next/image";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import RadarChart from "../../components/RadarChart/RadarChart";
import Skills from "../../components/Skills/Skills";
import styles from "./about.module.scss";

export function About() {
  return (
    <section className={styles.about}>
      <PageTitle
        title="About Me & My Skills"
        subTitle="A small introduction about myself and my skills"
      />
      <div className={styles.aboutMeIcons}>
        <div className={styles.aboutMeIcon}>
          <Image
            src="/images/developer.png"
            alt="Technical"
            width={180}
            height={180}
          />
          <p>Technical</p>
        </div>

        <div className={styles.aboutMeIcon}>
          <Image
            src="/images/idea.png"
            alt="Creative"
            width={180}
            height={180}
          />
          <p>Creative</p>
        </div>

        <div className={styles.aboutMeIcon}>
          <Image
            src="/images/report.png"
            alt="Analytical"
            width={180}
            height={180}
          />
          <p>Analytical</p>
        </div>

        <div className={styles.aboutMeIcon}>
          <Image
            src="/images/entrepreneurship.png"
            alt="Entrepreneur"
            width={180}
            height={180}
          />
          <p>Entrepreneur</p>
        </div>
      </div>
      <div className={styles.aboutMeContent}>
        <div className={styles.aboutMeText}>
          <p>
            I am a <strong>Senior Growth Developer</strong> and{" "}
            <strong>Frontend Developer</strong> with a strong focus on creating
            scalable and innovative solutions. My journey in software
            engineering has been enriched by a unique blend of technical
            expertise, entrepreneurship, and leadership. I hold a{" "}
            <strong>Master&apos;s degree in Entrepreneurship</strong> from
            Falmouth University and a{" "}
            <strong>Bachelor&apos;s degree in Marketing</strong> from UNOPAR -
            University of Northern Paraná.
          </p>
          <p>
            In my current role as a <strong>Software Developer</strong> at
            <strong> Remotasks</strong>, I excel in developing high-quality
            AI-driven solutions with a performance rate of 94.44%. Prior to
            this, I led significant projects at <strong>MADE BY ON</strong>,
            working with renowned clients like Ernst & Young and Exclaimer,
            where I saved two months of development time through innovative
            integrations.
          </p>
          <p>
            As an entrepreneur, I co-founded two companies:{" "}
            <strong>Invalley Innovation and Design</strong> and{" "}
            <strong>Adeus Rotina</strong>. At Invalley, we focus on innovation
            through the design and development of products, services, and
            strategies aimed at improving lives. Adeus Rotina offered a unique
            subscription service delivering romantic experiences for couples. In
            both ventures, I oversaw marketing and technology, driving growth
            and operational efficiency.
          </p>
          <p>
            My background is complemented by my technical skills in frontend and
            backend development, including proficiency in HTML, CSS, JavaScript,
            React, Next.js, and various other modern technologies. Additionally,
            I have experience with DevOps tools like Docker, AWS, and Vercel,
            ensuring robust and scalable deployments.
          </p>
          <p>
            Beyond my professional pursuits, I am passionate about contributing
            to society. I have volunteered with organizations like{" "}
            <strong>Sonhar Acordado</strong> and{" "}
            <strong>Junior Achievement</strong>, where I mentored youth and
            guided startups on business models as part of{" "}
            <strong>Techstars Startup Weekend</strong>.
          </p>
          <p>
            I believe that serving humanity is one of the most fulfilling
            endeavors, and I strive to make a positive impact through my work,
            both in technology and in my community involvement.
          </p>
        </div>
        <aside className={styles.aboutMeAside}>
          <div className={styles.aboutMeChart}>
            <RadarChart
              chartTitle={"Multi-Disciplinary Strengths"}
              chartSize={400}
              chartHeight={360}
            />
          </div>

          <Skills title={"My Technical Competency Spectrum"} />
        </aside>
      </div>
    </section>
  );
}

export default About;
