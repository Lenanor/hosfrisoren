"use client";

import { useEffect, useRef, useState } from "react";

import HamburgerButton from "./HamburgerButton";
import SmartLink from "./ui/SmartLink";

import styles from "./MainNavigation.module.css";
import { mainNavContent, mobileNavContent } from "@/content/main-navigation";

function MainNavigation({ path }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close on ESC key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Trap focus inside the menu
  // Trap focus inside menu
  useEffect(() => {
    if (!isOpen) return;
    const focusable = menuRef.current?.querySelectorAll(
      "a, button, input, textarea, select, [tabindex]:not([tabindex='-1'])"
    );
    if (!focusable?.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    function trap(e) {
      if (e.key !== "Tab") return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", trap);
    return () => document.removeEventListener("keydown", trap);
  }, [isOpen]);

  const linkContent = isOpen ? mobileNavContent : mainNavContent;

  return (
    <div className={styles.wrapper}>
      <nav
        className={`${styles.nav} ${isOpen ? styles.expanded : ""}`}
        aria-label="Huvudmeny"
        ref={menuRef}
      >
        <HamburgerButton
          isExpanded={isOpen}
          toggleMenu={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
        />
        <ul className={`${styles.list}`}>
          {linkContent.map((item, index) => (
            <li
              key={item.name}
              className={`${styles.listItem} ${styles[`listItem-${index}`]}`}
            >
              <SmartLink
                href={item.href}
                onClick={isOpen ? () => setIsOpen((prev) => !prev) : undefined}
                aria-current={item.href === path ? "page" : undefined}
              >
                {item.name}
              </SmartLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default MainNavigation;
