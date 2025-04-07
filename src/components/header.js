"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Navigation from "./navigation";

import "./header.css";

function Header() {
  const path = usePathname();

  return (
    <header className="header">
      <div className="header__flex-wrapper">
        <a href="#main-content" className="sr-only">
          Skip to main content
        </a>
        <Link
          href="/"
          className="header__logo-link"
          aria-current={"/" === path ? "page" : undefined}
        >
          <Image
            className="header__logo"
            src="/logo_gray.svg"
            alt="Hos Frisören logomark"
            width={220}
            height={73}
            priority
          />
          <span className="sr-only">To start page</span>
        </Link>
        <Navigation path={path} />
      </div>
    </header>
  );
}

export default Header;
