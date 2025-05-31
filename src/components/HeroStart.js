import ColorBlock from "./ui/ColorBlock";
import SmartLink from "./ui/SmartLink";
import { FacebookIcon, InstagramIcon, ArrowRightIcon } from "@/assets/Icons";

import { mainHeading } from "@/content/home-content";

import styles from "./HeroStart.module.css";

function HeroStart() {
  return (
    <>
      <ColorBlock withGutter={true} withGrid={true} bg="transparent">
        <h1 className={styles.mainHeading}>{mainHeading}</h1>
        <div className={styles.soMe}>
          <a
            href="https://www.facebook.com/HosFrisoren"
            className={styles.icon}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon aria-hidden={true} />
            <span className="sr-only">
              Länk till Hos Frisörens Facebook-sida. Öppnas i nytt fönster.
            </span>
          </a>
          <a
            href="https://www.instagram.com/hosfrisoren/"
            className={styles.icon}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon aria-hidden={true} />
            <span className="sr-only">
              Länk till Hos Frisörens Instagram-sida. Öppnas i nytt fönster.
            </span>
          </a>
        </div>
        <div className={styles.ctaWrapper}>
          <SmartLink
            href="https://bokning.voady.se/hosfrisoren/hosfrisoren/"
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Boka online
            {/* <ArrowRightIcon className="icon" /> */}
          </SmartLink>
          <a
            className={`button inverted ${styles.phoneLink}`}
            href="tel:+4624710038"
          >
            RING
          </a>
        </div>
        <div>
          <a href="tel:+4624710038">0247–100 38</a>
        </div>
      </ColorBlock>
      <div
        style={{ height: "40vh", width: "100vw", backgroundColor: "beige" }}
      ></div>
    </>
  );
}

export default HeroStart;
