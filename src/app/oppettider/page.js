import SubPageIntro from "@/components/ui/SubPageIntro";

import { openHours } from "@/content/hours-content";
import { introText } from "@/content/open-content";

import styles from "./page.module.css";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";

export const metadata = {
  title: "Öppettider | Hos Frisören",
  description:
    "I regel öppet mån–fre: 10–17 men tiderna kan variera, se vår onlinebokning för aktuella tider.",
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
          <h2>Stängt under julhelgen:</h2>
          <p>
            <span className={styles.dates}>
              🎅🏼 Julafton, juldagen och annandagen
            </span>
          </p>
          <p>
            <span className={styles.dates}>🎊 Nyårsafton och nyårsdagen</span>
          </p>
          <p>
            <span className={styles.dates}>⭐️ Trettondagen</span>
          </p>
          <br />
          <p>
            <span className={styles.dates}>
              Alla andra vardagar är salongen öppen enligt ordinarie tider.
            </span>
          </p>
        </div>
      </FadeInOnScroll>
    </SubPageIntro>
  );
}

export default Open;
