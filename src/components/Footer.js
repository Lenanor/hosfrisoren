import SmartLink from "./ui/SmartLink";
import Image from "next/image";

import { mainNavContent } from "@/content/main-navigation";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoWrap}>
          <Image
            src="/logo_gray.svg"
            alt="Hos Frisören logotyp"
            width={220}
            height={73}
          />
        </div>
        <div className={styles.grid}>
          <div>
            <h2>Öppettider</h2>
            <p>mån: 10–18</p>
            <p>tis&ndash;fre: 9&ndash;18</p>
            <p>lör, sön: stängt</p>
            <p>(Öppettider kan variera)</p>
          </div>
          <div>
            <h2>Kontakt</h2>
            <address className={styles.address}>
              <a href="tel:+4624710038">0247–100 38</a>
              <a href="mailto:info@hosfrisoren.se">info@hosfrisoren.se</a>
              <p>Torget 6, Leksand</p>
            </address>
            <a href="https://www.google.com/maps/place/Hos+Fris%C3%B6ren/@60.7321752,14.9934318,17z/data=!3m1!4b1!4m6!3m5!1s0x4667910e347f90d5:0x506b69e1c5645a68!8m2!3d60.7321726!4d14.9960067!16s%2Fg%2F1hcb5zknq?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D">
              Google Maps
              <span className="sr-only">
                Länken öppnar adressen Torget 6 i extern länk
              </span>
            </a>
          </div>
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
      </div>
      <div className={styles.copyrightWrapper}>
        <p>&copy;HOS FRISÖREN &ndash; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
