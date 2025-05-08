import styles from "./TwoColText.module.css";

function TwoColText({ mediaDirection = "left", children }) {
  return (
    <div className={`${styles.textParent} ${styles[mediaDirection]}`}>
      {children}
    </div>
  );
}

export default TwoColText;
