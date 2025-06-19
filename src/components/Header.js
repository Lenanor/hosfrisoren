"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import MainNavigation from "./MainNavigation";
import { LogoIcon } from "@/assets/Icons";

import styles from "./Header.module.css";

function Header() {
  const path = usePathname();

  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.wrapper} container`}>
        <Link
          href="/"
          className={styles.link}
          aria-current={"/" === path ? "page" : undefined}
          aria-label="Till startsidan"
        >
          <LogoIcon />
          <span className="sr-only">Till startsidan</span>
        </Link>
        <MainNavigation path={path} />
      </div>
    </header>
  );
}

export default Header;
