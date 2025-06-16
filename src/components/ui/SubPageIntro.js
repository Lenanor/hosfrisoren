import styles from "./SubPageIntro.module.css";

function SubPageIntro({ title, textContent, children }) {
  return (
    <section>
      <div className="container container-padding">
        <h1 className={styles.mainHeading}>{title}</h1>
        <div className={styles.introText}>{textContent}</div>
        {children}
      </div>
    </section>
  );
}

export default SubPageIntro;
