import HeroStart from "@/components/HeroStart";
import ColorBlock from "@/components/ui/ColorBlock";
import TwoColImage from "@/components/ui/TwoColImage";
import TwoColText from "@/components/ui/TwoColText";
import Card from "@/components/ui/Card";
import MediaBlock from "@/components/MediaBlock";
import LogoCarousel from "@/components/LogoCarousel";

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

      {/* CARD LIST */}
      <ColorBlock withGrid={false}>
        {cardsData?.heading && <h2>{cardsData.heading}</h2>}
        <ul className={styles.cardList}>
          {cardsData.cards.map((card, i) => (
            <Card
              key={i}
              icon={card.icon}
              title={card.title}
              body={card.body}
              cta={card.cta}
            />
          ))}
        </ul>
      </ColorBlock>

      {/* GALLERY */}
      <MediaBlock />

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
