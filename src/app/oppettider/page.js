import SubPageIntro from "@/components/ui/SubPageIntro";

import { openHours } from "@/content/hours-content";
import { introText } from "@/content/open-content";

import styles from "./page.module.css";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";

export const metadata = {
  title: "Öppettider | Hos Frisören",
  description:
    "I regel har vi öppet mån–fre: 10–17 men tiderna kan variera, se vår onlinebokning. Du hittar oss på Torget 6.",
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
      <FadeInOnScroll>
        <div className={styles.colorBackground}>
          <h2>Salongen är stängd pga kurs:</h2>
          <p className={styles.bold}>OKTOBER</p>
          <p>
            <span className={styles.dates}>15/10</span>
          </p>
          <p>
            <span className={styles.dates}>16/10</span>
          </p>
        </div>
      </FadeInOnScroll>
    </SubPageIntro>
  );
}

export default Open;
