import SubPageIntro from "@/components/ui/SubPageIntro";

import { openHours } from "@/content/hours-content";
import { introText } from "@/content/open-content";

import styles from "./page.module.css";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";

export const metadata = {
  title: "Öppettider",
  description:
    "Se aktuella öppettider för Hos Frisören i Leksand. Tiderna kan variera, följ oss på Instagram för uppdateringar. Du hittar oss på Torget 6.",
  alternates: {
    canonical: "https://www.hosfrisoren.se/oppettider",
  },
  authors: [{ name: "Hos Frisören", url: "https://www.hosfrisoren.se" }],
};

const intro = (
  <>
    {openHours}
    {introText}
  </>
);

function Open() {
  return (
    <SubPageIntro
      title="Öppettider"
      textContent={intro}
      className={styles.openIntro}
    >
      {/* <FadeInOnScroll>
        <div className={styles.colorBackground}>
          <h2>Öppettider jul och januari:</h2>
          <p className={styles.bold}> DECEMBER</p>
          <p>
            <span className={styles.dates}>22/12</span> 9&ndash;18
          </p>
          <p>
            <span className={styles.dates}>23/12</span> 8.15&ndash;17
          </p>
          <p>
            <span className={styles.dates}>24/12</span> JULAFTON STÄNGT
          </p>
          <p>
            <span className={styles.dates}>29/12</span> 9&ndash;18
          </p>
          <p>
            <span className={styles.dates}>30/12</span> 8.15&ndash;17
          </p>
          <p className={styles.bold}>JANUARI</p>
          <p>
            <span className={styles.dates}>2/1</span> 9&ndash;18
          </p>
          <p>
            <span className={styles.dates}>5/1</span> 9&ndash;16
          </p>
          <p>
            <span className={styles.dates}>6/1</span> TRETTONDAGEN STÄNGT
          </p>
          <p>
            <span className={styles.dates}>7/1</span> 9&ndash;18
          </p>
          <p>
            <span className={styles.dates}>8/1</span> 9&ndash;18
          </p>
          <p>
            <span className={styles.dates}>9/1</span> 9&ndash;18
          </p>
          <p>
            <span className={styles.dates}>12&ndash;16/1</span> STÄNGT FÖR
            RENOVERING
          </p>
        </div>
      </FadeInOnScroll> */}
    </SubPageIntro>
  );
}

export default Open;
