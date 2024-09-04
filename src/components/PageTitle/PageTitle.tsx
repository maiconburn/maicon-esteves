import styles from "./PageTitle.module.scss";

export function PageTitle({
  title,
  subTitle,
}: {
  title?: string | JSX.Element;
  subTitle?: string | JSX.Element;
}) {
  return (
    <div className={styles.pageTitle}>
      <h1>{title}</h1>
      <h3>{subTitle}</h3>
    </div>
  );
}

export default PageTitle;
