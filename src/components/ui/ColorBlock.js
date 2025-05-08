import styles from "./ColorBlock.module.css";

function ColorBlock({ withGutter = true, bg, children }) {
  function getGutterClass(withGutter) {
    return withGutter ? "container-gutter" : "no-gutter";
  }

  const gutter = getGutterClass(withGutter);

  return (
    <section className={styles[bg]}>
      <div className={`${gutter} ${styles.wrapper}`}>{children}</div>
    </section>
  );
}

export default ColorBlock;
