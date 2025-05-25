import styles from "./ColorBlock.module.css";

function ColorBlock({
  withGutter = true,
  withGrid = true,
  bg = "transparent",
  children,
}) {
  function getGutterClass(withGutter) {
    return withGutter ? "container-padding" : "no-gutter";
  }

  function getGridClass(withGrid) {
    return withGrid ? "container-grid" : "no-grid";
  }

  const gutter = getGutterClass(withGutter);
  const grid = getGridClass(withGrid);

  return (
    <section className={styles[bg]}>
      <div className={`container ${gutter} ${grid}`}>{children}</div>
    </section>
  );
}

export default ColorBlock;
