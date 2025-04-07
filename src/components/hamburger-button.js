import "./hamburger-button.css";

function HamburgerButton({ isExpanded, toggleMenu }) {
  const menuText = isExpanded ? "Close menu" : "Open menu";

  return (
    <button
      className="hamburger-button"
      onClick={toggleMenu}
      aria-expanded={isExpanded}
      aria-controls="primary-navigation"
    >
      <div className="hamburger-button__symbols" aria-hidden="true"></div>
      <span className="sr-only">{menuText}</span>
    </button>
  );
}

export default HamburgerButton;
