"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import MainNavigation from "./MainNavigation";

import styles from "./Header.module.css";

function Header() {
  const path = usePathname();

  console.log(path);

  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.wrapper} container`}>
        <Link
          href="/"
          className={styles.link}
          aria-current={"/" === path ? "page" : undefined}
          aria-label="Till startsidan"
        >
          <Image
            className={styles.logo}
            src="/logo_gray.svg"
            alt="Hos Frisören logotyp"
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
