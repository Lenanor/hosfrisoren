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
  blockContentTwo,
  blockContentThree,
  cardsData,
} from "@/content/home-content.js";
import SmartLink from "@/components/ui/SmartLink";

export default function Home() {
  return (
    <>
      <HeroStart />
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

      {/* GALLERY */}
      <MediaBlock />

      {/* CARD LIST */}
      <ColorBlock withGrid={false}>
        {cardsData?.heading && <h2>{cardsData.heading}</h2>}
        <ul className={styles.cardList}>
          {cardsData.cards.map((card) => (
            <Card
              key={card.title}
              icon={card.icon}
              title={card.title}
              body={card.body}
              cta={card.cta}
            />
          ))}
        </ul>
      </ColorBlock>

      <ColorBlock bg="bg-2">
        <TwoColImage id={blockContentTwo.id} mediaDirection="right" />
        <TwoColText mediaDirection="right">{blockContentTwo.body}</TwoColText>
      </ColorBlock>

      <LogoCarousel />

      <ColorBlock bg="bg-3">
        <TwoColImage id={blockContentThree.id} />
        <TwoColText>{blockContentThree.body}</TwoColText>
      </ColorBlock>
    </>
  );
}
