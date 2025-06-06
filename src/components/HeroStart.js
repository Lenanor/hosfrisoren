import Link from "next/link";

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
        bg="transparent"
      >
        <h1 className={styles.mainHeading}>{mainHeading}</h1>
        <SoMeGroup />

        <div className={styles.ctaWrapper}>
          <SmartLink
            href="https://bokning.voady.se/hosfrisoren/hosfrisoren/"
            className="button"
            target="_blank"
            rel="noopener noreferrer"
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
          <Link href="/about">Torget 6, Leksand</Link>
          <a href="mailto:jim@example.com">jim@example.com</a>
        </address>
      </ColorBlock>
      <div
        style={{
          height: "60vh",
          width: "100vw",
          maxWidth: "100%",
          padding: "0 0 3rem 0",
        }}
      >
        <div
          className="container"
          style={{
            height: "100%",
            backgroundColor: "#a6a49d",
          }}
        ></div>
      </div>
    </>
  );
}

export default HeroStart;
