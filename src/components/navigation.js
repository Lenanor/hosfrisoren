import Link from "next/link";
import { useEffect, useState, useRef } from "react";

import HamburgerButton from "./hamburger-button";
import "./navigation.css";

const pages = [
  {
    name: "Om oss",
    href: "/about",
  },
  {
    name: "Produkter",
    href: "/products",
  },
  {
    name: "Vanliga frågor",
    href: "/faq",
  },
  {
    name: "Boka",
    href: "/co",
  },
];

function Navigation({ path }) {
  const modalRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const expandedClass = isExpanded ? "main-navigation__nav-list--expanded" : "";

  useEffect(() => {
    // trap focus to navigation modal when menu is expanded by hamburger button.
    // close modal with esc.
    if (isExpanded && modalRef.current) {
      const modalElement = modalRef.current;
      //add any focusable HTML element you want to include to this string
      const focusableElements = modalElement.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleTabKeyPress = (event) => {
        if (event.key === "Tab") {
          if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          } else if (
            !event.shiftKey &&
            document.activeElement === lastElement
          ) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      };

      const handleEscapeKeyPress = (event) => {
        if (event.key === "Escape") {
          toggleMenu();
        }
      };

      modalElement.addEventListener("keydown", handleTabKeyPress);
      modalElement.addEventListener("keydown", handleEscapeKeyPress);

      return () => {
        modalElement.removeEventListener("keydown", handleTabKeyPress);
        modalElement.removeEventListener("keydown", handleEscapeKeyPress);
      };
    }
  }, [isExpanded]);

  function toggleMenu() {
    setIsExpanded((prev) => !prev);
  }

  return (
    <nav className="main-navigation" ref={modalRef}>
      <HamburgerButton isExpanded={isExpanded} toggleMenu={toggleMenu} />
      <ul className="main-navigation__nav-list">
        {isExpanded && (
          <li className="main-navigation__list-item-home">
            <Link
              href="/"
              onClick={isExpanded ? toggleMenu : undefined}
              aria-current={"/" === path ? "page" : undefined}
            >
              Startsida
            </Link>
          </li>
        )}
        {pages.map((page, index) => (
          <li key={page.name} className={`main-navigation__list-item-${index}`}>
            <Link
              href={page.href}
              onClick={isExpanded ? toggleMenu : undefined}
              aria-current={page.href === path ? "page" : undefined}
            >
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
