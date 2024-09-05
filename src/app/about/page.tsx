import React from "react";
import Image from "next/image";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import RadarChart from "../../components/RadarChart/RadarChart";
import Skills from "../../components/Skills/Skills";
import styles from "./about.module.scss";

export default function About() {
  return (
    <section className={styles.about}>
      <PageTitle
        title="About Me & My Skills"
        subTitle="An in-depth look at my journey in technology, entrepreneurship, and innovation."
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
            <strong>Frontend Developer</strong> with over a decade of experience
            in building innovative, scalable solutions that drive business
            growth. My career has been characterized by a unique blend of
            technical expertise, entrepreneurial spirit, and leadership. I have
            successfully led teams, managed projects, and co-founded companies,
            all while maintaining a strong focus on leveraging technology to
            solve real-world problems.
          </p>
          <p>
            My academic foundation includes a{" "}
            <strong>Master&apos;s degree in Entrepreneurship</strong> from
            Falmouth University, where I honed my skills in startup development,
            MVP creation, and business strategy. Additionally, I earned a{" "}
            <strong>Bachelor&apos;s degree in Marketing</strong> from UNOPAR,
            which equipped me with a strong understanding of consumer behavior,
            brand management, and digital marketing strategies.
          </p>
          <p>
            Throughout my career, I have consistently sought opportunities to
            innovate and improve processes. As a{" "}
            <strong>Software Developer</strong> at <strong>Remotasks</strong>, I
            played a key role in developing high-quality AI models with a
            performance accuracy of 94.44%. My ability to understand complex
            technical challenges and deliver solutions efficiently earned me a
            promotion to reviewer within just one month. Prior to this role, I
            spent time at <strong>MADE BY ON</strong>, where I worked on
            large-scale projects for prestigious clients like Ernst & Young,
            Exclaimer, and My Lighthouse. I introduced advanced Content Security
            Policy (CSP) configurations, optimizing security without disrupting
            the integration of key tools like Google Tag Manager.
          </p>
          <p>
            Beyond corporate roles, I am also an entrepreneur at heart. I
            co-founded <strong>Invalley Innovation and Design</strong>, where we
            developed cutting-edge design and technology solutions for a wide
            range of clients. In addition, I co-founded{" "}
            <strong>Adeus Rotina</strong>, a subscription service offering
            personalized romantic experiences to couples, which grew to reach
            over 300,000 monthly visitors. These ventures allowed me to leverage
            my expertise in growth hacking, SEO, project management, and product
            development to build and scale successful businesses.
          </p>
          <p>
            My passion for innovation has also led me to actively participate in
            several <strong>hackathons</strong> and{" "}
            <strong>startup acceleration programs</strong>. I have been awarded
            <strong>1st place at the HackathON</strong> at{" "}
            <strong>MADE BY ON</strong> (2022, 2023) for developing
            groundbreaking solutions in internal projects. In 2015, I won{" "}
            <strong>1st place in the Acelera Serra</strong> startup pitch
            competition. Additionally, I was recognized with{" "}
            <strong>2nd place at IBTeCHDAY</strong> for technological
            innovations in the leather and footwear industry and{" "}
            <strong>3rd place at Startup RS</strong> for creating a virtual
            product launch strategy for the footwear market.
          </p>
          <p>
            I am a strong believer in the power of mentorship and giving back to
            the community. I have volunteered with{" "}
            <strong>Junior Achievement</strong> and{" "}
            <strong>Sonhar Acordado</strong>, where I had the privilege of
            mentoring young entrepreneurs and students on leadership, business
            models, and personal development. Additionally, I have been actively
            involved in <strong>Techstars Startup Weekend</strong>, where I
            guide aspiring entrepreneurs through the process of turning ideas
            into viable businesses.
          </p>
          <p>
            In terms of technical skills, I am proficient in a wide range of
            technologies, including <strong>HTML</strong>, <strong>CSS</strong>,
            <strong>JavaScript</strong>, <strong>React</strong>,{" "}
            <strong>Next.js</strong>, <strong>Node.js</strong>, and{" "}
            <strong>MySQL</strong>. I also have experience with backend
            frameworks and DevOps tools like <strong>AWS</strong>,{" "}
            <strong>Docker</strong>, and <strong>Vercel</strong>. This broad
            technical skillset allows me to not only develop front-end
            applications but also architect and deploy scalable back-end
            systems.
          </p>
          <p>
            I continue to seek opportunities to innovate, collaborate, and make
            a positive impact through technology, both in my professional
            endeavors and in my community contributions.
          </p>
        </div>
        <aside className={styles.aboutMeAside}>
          <div className={styles.aboutMeChart}>
            <RadarChart
              chartTitle={"Multi-Disciplinary Strengths"}
              chartSize={360}
              chartHeight={360}
            />
          </div>

          <Skills title={"My Technical Competency Spectrum"} />
        </aside>
      </div>
    </section>
  );
}
