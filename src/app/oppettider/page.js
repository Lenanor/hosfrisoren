import SubPageIntro from "@/components/ui/SubPageIntro";

import { openHours } from "@/content/hours-content";
import { introText } from "@/content/open-content";

import styles from "./page.module.css";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";

export const metadata = {
  title: "Öppettider | Hos Frisören",
  description:
    "Se aktuella öppettider för Hos Frisören i Leksand. Tiderna kan variera, följ oss på Instagram för uppdateringar. Du hittar oss på Torget 6.",
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
          <h2>Våra semesterveckor 2025:</h2>
          <p className={styles.bold}>
            <span role="img" aria-label="sun">
              ☀️
            </span>{" "}
            NINA: v.26 och v.27
          </p>
          <p className={styles.bold}>
            {" "}
            <span role="img" aria-label="sun">
              ☀️
            </span>{" "}
            LISA: v.28, v.29 och v.35
          </p>
          <p className={styles.bold}>
            {" "}
            <span role="img" aria-label="sun">
              ☀️
            </span>{" "}
            LOUISA: v.30, v.31 och v.34
          </p>
        </div>
      </FadeInOnScroll>
    </SubPageIntro>
  );
}

export default Open;
