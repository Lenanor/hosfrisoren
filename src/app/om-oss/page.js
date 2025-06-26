import ColorBlock from "@/components/ui/ColorBlock";
import Card from "@/components/ui/Card";

import styles from "./page.module.css";

import { introText, stylistsData, careerData } from "@/content/about-content";
import SubPageIntro from "@/components/ui/SubPageIntro";

export const metadata = {
  title: "Om oss | Hos Frisören",
  description:
    "Hos Frisören är en trygg frisörsalong i Leksand med utbildade frisörer med licens, gesäll- och mästarbrev. Vi är medlemmar i Frisörföretagarna och driver ett seriöst företag med yrkesstolthet.",
};

function About() {
  return (
    <>
      <SubPageIntro title="Om oss" textContent={introText}></SubPageIntro>

      <ColorBlock bg="bg-3" withGrid={false} className={styles.stylistsBlock}>
        <h2>{stylistsData.heading}</h2>
        <ul className={styles.stylistsGrid}>
          {stylistsData.cards.map((data) => {
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
      <ColorBlock withGrid={false} className={styles.careerBlock}>
        {careerData.map((data) => {
          return (
            <div
              key={data.id}
              id={data.id === "career-1" ? "career" : undefined}
              className={styles.workText}
            >
              <h2>{data.heading}</h2>
              <div>{data.body}</div>
            </div>
          );
        })}
      </ColorBlock>
    </>
  );
}

export default About;
