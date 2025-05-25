import styles from "./HamburgerButton.module.css";

function HamburgerButton({ isExpanded, toggleMenu, modal = false, ...props }) {
  const modalVariant = modal
    ? `${styles.button} ${styles.modal}`
    : styles.button;

  return (
    <button className={modalVariant} onClick={toggleMenu} {...props}>
      <div className={styles.symbol} aria-hidden="true"></div>
      <span className="sr-only">Meny</span>
    </button>
  );
}

export default HamburgerButton;
