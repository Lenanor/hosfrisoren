import Link from "next/link";

import ColorBlock from "./ui/ColorBlock";
import SmartLink from "./ui/SmartLink";

import { mainNavContent } from "@/content/main-navigation";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container container-padding ${styles.grid}`}>
        <div>
          <h2>Innehåll</h2>
          <nav aria-label="sidfotsnavigering">
            <ul>
              {mainNavContent.map((item) => (
                <li key={item.name} className={styles.linkList}>
                  <SmartLink href={item.href}>{item.name}</SmartLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div>
          <h2>Öppettider</h2>
          <p>
            Öppettiderna kan variera, <br />i regel gäller:
          </p>
          <p>mån: 10–18</p>
          <p>tis&ndash;fre: 9&ndash;18</p>
          <p>lö, sön: STÄNGT</p>
        </div>

        <div>
          <h2>Kontakt</h2>
          <address className={styles.address}>
            <a href="tel:+4624710038">0247–100 38</a>
            <Link href="/about">Torget 6, Leksand</Link>
            <a href="mailto:jim@example.com">jim@example.com</a>
          </address>
        </div>

        <div>
          <h2>Följ oss</h2>
          <p>
            <a
              href="https://www.instagram.com/hosfrisoren/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Öppna Hos Frisörens Instagramsida"
            >
              Instagram
            </a>
          </p>
          <p>
            <a
              href="https://www.facebook.com/HosFrisoren"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Öppna Hos Frisörens Facebooksida"
            >
              Facebook
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
