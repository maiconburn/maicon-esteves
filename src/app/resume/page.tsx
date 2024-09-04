import React from "react";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import Timeline from "../../components/Timeline/Timeline";
import timelineData from "./timelineData.json";
import styles from "./resume.module.scss";

export default function Resume() {
  return (
    <section className={styles.resume}>
      <PageTitle
        title="Work experience & Education"
        subTitle="My previous jobs, awards and my qualifications."
      />
      <Timeline data={timelineData} />
    </section>
  );
}
