import SmartLink from "./ui/SmartLink";
import Image from "next/image";

import { FacebookIcon, InstagramIcon } from "@/assets/Icons";
import { mainNavContent } from "@/content/main-navigation";
import { openHours } from "@/content/hours-content";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.grid}>
          <div>
            <h2>Innehåll</h2>
            <nav aria-label="sidfotsnavigering">
              <ul>
                {mainNavContent.map((item) => (
                  <li key={item.name} className={styles.linkList}>
                    <SmartLink href={item.href}>{item.name}</SmartLink>
                  </li>
                ))}
                <li className={styles.linkList}>
                  <SmartLink href="/about#career">Jobba hos oss</SmartLink>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h2>Öppettider</h2>
            {openHours}
            <p>(Öppettider kan variera)</p>
          </div>
          <div>
            <h2>Kontakt</h2>
            <address className={styles.address}>
              <span>Hos Frisören</span>
              <span>Torget 6, Leksand</span>
              <a href="tel:+4624710038">0247–100 38</a>
              <a href="mailto:info@hosfrisoren.se">info@hosfrisoren.se</a>
            </address>
            <a href="https://www.google.com/maps/place/Hos+Fris%C3%B6ren/@60.7321752,14.9934318,17z/data=!3m1!4b1!4m6!3m5!1s0x4667910e347f90d5:0x506b69e1c5645a68!8m2!3d60.7321726!4d14.9960067!16s%2Fg%2F1hcb5zknq?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D">
              Öppna i Google Maps
              <span className="sr-only">
                Länken öppnar adressen Torget 6 i extern länk
              </span>
            </a>
          </div>
          <div>
            <h2>Följ oss</h2>
            <p>
              <a
                href="https://www.instagram.com/hosfrisoren/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Öppnar Hos Frisörens Instagramsida"
              >
                <InstagramIcon />
                <span className="sr-only">Instagram</span>
              </a>
            </p>
            <p>
              <a
                href="https://www.facebook.com/HosFrisoren"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Öppnar Hos Frisörens Facebooksida"
              >
                <FacebookIcon />
                <span className="sr-only">Facebook</span>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.copyrightWrapper}>
        <p>&copy;HOS FRISÖREN &ndash; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
