import { ParticlesContainer } from "../components/ParticlesContainer/ParticlesContainer";
import IntroCard from "../components/IntroCard/IntroCard";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <ParticlesContainer />
      <div className={styles.container}>
        <IntroCard />
      </div>
    </main>
  );
}
