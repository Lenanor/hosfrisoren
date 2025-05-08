"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import MainNavigation from "./MainNavigation";

import styles from "./Header.module.css";

function Header() {
  const path = usePathname();

  return (
    <header className={`${styles.header} container-gutter`}>
      <div className={styles.wrapper}>
        <a href="#main-content" className="sr-only">
          Hoppa till huvudinnehållet
        </a>
        <Link
          href="/"
          className={styles.link}
          aria-current={"/" === path ? "page" : undefined}
          aria-label="Till startsidan"
        >
          <Image
            className={styles.logo}
            src="/logo_gray.svg"
            alt=""
            width={220}
            height={73}
            priority
          />
        </Link>
        <MainNavigation path={path} />
      </div>
    </header>
  );
}

export default Header;
