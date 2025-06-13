import ColorBlock from "@/components/ui/ColorBlock";
import TwoColImage from "@/components/ui/TwoColImage";
import TwoColText from "@/components/ui/TwoColText";
import Card from "@/components/ui/Card";

import styles from "./page.module.css";

import {
  introText,
  introStylists,
  stylistsData,
  test,
} from "@/content/about-content";

function About() {
  return (
    <>
      <ColorBlock bg="bg-2" className={styles.aboutIntro} withGrid={false}>
        <h1 className={styles.mainHeading}>
          <span>Hos Frisören</span>
          <span>Om oss</span>
        </h1>
        <div className={styles.aboutIntroText}>{introText}</div>
        <div className={styles.introImg}>
          <div
            style={{ width: "100%", height: "100%", backgroundColor: "gray" }}
          ></div>
        </div>
      </ColorBlock>

      <ColorBlock bg="bg-3" withGrid={false}>
        <h2>{stylistsData.heading}</h2>
        <div className={styles.aboutIntro}>{introStylists}</div>

        <ul className={styles.stylistsGrid}>
          {stylistsData.cards.map((data) => {
            console.log(data.id);
            return (
              <Card
                key={data.id}
                icon={data.icon}
                title={data.title}
                body={data.body}
              />
            );
          })}
        </ul>
      </ColorBlock>
      <ColorBlock withGrid={false}>
        <h2>Vill du jobba med oss?</h2>
        <p>
          {" "}
          Vi är alltid intresserade av att bli fler kreativa, ambitiösa och
          serviceinriktade frisörer i gänget. Hel- eller deltid. Hos oss finns
          stora möjligheter att utvecklas som frisör och en gemenskap där vi
          inspirerar och lyfter varandra och har roligt. Vi är en flexibel
          arbetsplats, balansen mellan jobb och fritid måste fungera för att vi
          ska må bra så att vi orkar leverera vårt bästa till våra kunder.
          Godkänd frisörutbildning och gesällbrev är ett viktigt men det vi
          värdesätter mest är din personlighet och att du har driv. Vi är
          nyfikna på att höra från dig, kontakta oss på xxxxxxxx.
        </p>
        <h2>Söker du praktik?</h2>
        <p>Vi söker alltid efter trevliga kollegor.....</p>
      </ColorBlock>
    </>
  );
}

export default About;
