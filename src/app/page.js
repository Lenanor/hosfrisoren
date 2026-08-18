import HeroStart from "@/components/HeroStart";
import ColorBlock from "@/components/ui/ColorBlock";
import TwoColImage from "@/components/ui/TwoColImage";
import TwoColText from "@/components/ui/TwoColText";
import Card from "@/components/ui/Card";
import MediaBlock from "@/components/MediaBlock";
import LogoCarousel from "@/components/LogoCarousel";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";

import { ArrowRightIcon } from "@/assets/Icons";

import styles from "./page.module.css";

import {
  blockContentOne,
  blockContentCurrent,
  blockContentTwo,
  blockContentThree,
  cardsData,
} from "@/content/home-content.js";
import SmartLink from "@/components/ui/SmartLink";

export const metadata = {
  title: "Start | Hos Frisören",
  description:
    "Hos Frisören erbjuder klippning, färg, slingor, balayage och hårförlängning. Försäljning av premiumhårprodukter och matchning av onlinepriser",
  alternates: {
    canonical: "https://www.hosfrisoren.se",
  },
  authors: [{ name: "Hos Frisören", url: "https://www.hosfrisoren.se" }],
};

export default function Home() {
  return (
    <>
      <HeroStart />

      {/* CARD LIST */}
      <FadeInOnScroll>
        <ColorBlock withGrid={false} bg="bg-3">
          {cardsData?.heading && <h2>{cardsData.heading}</h2>}
          <ul className={styles.cardList}>
            {cardsData.cards.map((card) => (
              <Card
                key={card.id}
                icon={card.icon}
                title={card.title}
                body={card.body}
                cta={card.cta}
                ctaText={card.ctaText}
              />
            ))}
          </ul>
        </ColorBlock>
      </FadeInOnScroll>

      <FadeInOnScroll>
        <ColorBlock bg="bg-1">
          <TwoColImage id={blockContentOne.id} />
          <TwoColText>
            {blockContentOne.body}
            <SmartLink
              href="https://bokning.voady.se/hosfrisoren/hosfrisoren/"
              className="button inverted"
            >
              Till onlinebokningen
              <ArrowRightIcon className="icon" aria-hidden="true" />
            </SmartLink>
          </TwoColText>
        </ColorBlock>
      </FadeInOnScroll>

      <FadeInOnScroll>
        <ColorBlock bg="bg-4">
          <TwoColImage id={blockContentCurrent.id} mediaDirection="flip" />
          <TwoColText mediaDirection="flip">
            {blockContentCurrent.body}
          </TwoColText>
        </ColorBlock>
      </FadeInOnScroll>

      {/* GALLERY */}
      <MediaBlock />

      {/* CARD LIST
      <FadeInOnScroll>
        <ColorBlock withGrid={false} bg="bg-3">
          {cardsData?.heading && <h2>{cardsData.heading}</h2>}
          <ul className={styles.cardList}>
            {cardsData.cards.map((card) => (
              <Card
                key={card.id}
                icon={card.icon}
                title={card.title}
                body={card.body}
                cta={card.cta}
                ctaText={card.ctaText}
              />
            ))}
          </ul>
        </ColorBlock>
      </FadeInOnScroll> */}

      <FadeInOnScroll>
        <ColorBlock bg="bg-4">
          <TwoColImage id={blockContentTwo.id} />
          <TwoColText>{blockContentTwo.body}</TwoColText>
        </ColorBlock>
      </FadeInOnScroll>

      <LogoCarousel />

      <FadeInOnScroll>
        <ColorBlock bg="bg-1">
          <TwoColImage id={blockContentThree.id} mediaDirection="flip" />
          <TwoColText mediaDirection="flip">
            {blockContentThree.body}
          </TwoColText>
        </ColorBlock>
      </FadeInOnScroll>
    </>
  );
}
