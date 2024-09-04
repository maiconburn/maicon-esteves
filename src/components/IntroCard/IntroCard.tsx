import Image from "next/image";
import Link from "next/link";
import styles from "./IntroCard.module.scss";

const IntroCard = () => {
  return (
    <div className={styles.introCard}>
      <div className={styles.avatar}>
        <Image src="/images/avatar.jpg" alt="avatar" width={140} height={140} />
      </div>
      <div className={styles.introCardBox}>
        <hgroup className={styles.introText}>
          <h1>
            Hello, I&apos;m <span>Maicon Esteves</span>
          </h1>
          <h2>I&apos;m a software developer</h2>
        </hgroup>

        <Link href="/about" passHref>
          <button className={styles.btnOutline}>View my work</button>
        </Link>
      </div>
    </div>
  );
};

export default IntroCard;
