import Link from "next/link";
import Image from "next/image";

import ColorBlock from "./ui/ColorBlock";
import SmartLink from "./ui/SmartLink";
import SoMeGroup from "./ui/SoMeGroup";
import { ArrowRightIcon } from "@/assets/Icons";

import { mainHeading } from "@/content/home-content";

import styles from "./HeroStart.module.css";

function HeroStart() {
  return (
    <>
      <ColorBlock
        className={styles.colorBlock}
        withGutter={true}
        withGrid={true}
        bg="bg-4"
      >
        <h1 className={styles.mainHeading}>{mainHeading}</h1>
        <SoMeGroup />

        <div className={styles.ctaWrapper}>
          <SmartLink
            href="https://bokning.voady.se/hosfrisoren/hosfrisoren/"
            className="button"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Till extern bokningssida"
          >
            Boka online
            <ArrowRightIcon className="icon" />
          </SmartLink>
          <a
            className={`button inverted ${styles.phoneLink}`}
            href="tel:+4624710038"
          >
            RING
          </a>
        </div>
        <address className={styles.address}>
          <a href="tel:+4624710038">0247–100 38</a>
          <a href="https://www.google.com/maps/place/Hos+Fris%C3%B6ren/@60.7321752,14.9934318,17z/data=!3m1!4b1!4m6!3m5!1s0x4667910e347f90d5:0x506b69e1c5645a68!8m2!3d60.7321726!4d14.9960067!16s%2Fg%2F1hcb5zknq?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D">
            Torget 6, Leksand
            <span className="sr-only">Länk till Google Maps</span>
          </a>
          <a href="mailto:info@hosfrisoren.se">info@hosfrisoren.se</a>
        </address>
      </ColorBlock>
      <div className={styles.heroImgContainer}>
        <div className={styles.heroImgWidth}>
          <picture>
            <source
              srcSet="/images/salong_mobile.jpg"
              media="(max-width: 480px)"
            />
            <source
              srcSet="/images/salong_tablet.jpg"
              media="(max-width: 1024px)"
            />
            <img
              className={styles.fullWidthImg}
              src="/images/salong_desktop.jpg"
              alt="Vy över frisörsalongen Hos Frisören i Leksand"
              loading="eager"
              width="1440"
              height="617"
            />
            <div className={styles.heroImgOverlay}></div>
          </picture>
        </div>
      </div>
    </>
  );
}

export default HeroStart;
