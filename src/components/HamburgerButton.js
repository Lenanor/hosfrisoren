import styles from "./HamburgerButton.module.css";

function HamburgerButton({ isExpanded, toggleMenu }) {
  const menuText = isExpanded ? "Close menu" : "Open menu";

  return (
    <button
      className={styles.button}
      onClick={toggleMenu}
      aria-expanded={isExpanded}
      aria-controls="primary-navigation"
    >
      <div className={styles.symbol} aria-hidden="true"></div>
      <span className="sr-only">{menuText}</span>
    </button>
  );
}

export default HamburgerButton;
