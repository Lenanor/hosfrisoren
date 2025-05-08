import ColorBlock from "@/components/ui/ColorBlock";
import TwoColImage from "@/components/ui/TwoColImage";
import TwoColText from "@/components/ui/TwoColText";
import Card from "@/components/ui/Card";

import styles from "./page.module.css";

import { blockContentOne, blockContentTwo } from "@/content/home";

const cardsData = [
  {
    title: "Vi är licencierade frisörer",
    body: "Hos Frisören är medlem i frisörföreningen och personalen har gesällbrev eller mästarbrev. Det garanterar att vi har...",
  },
  {
    title: "Öppettider",
    body: "Hos Frisören är medlem i frisörföreningen och personalen har gesällbrev eller mästarbrev. Det garanterar att vi har...",
  },
  {
    title: "Tidsbokning",
    body: "Hos Frisören är medlem i frisörföreningen och personalen har gesällbrev eller mästarbrev. Det garanterar att vi har...",
  },
];

export default function Home() {
  return (
    <>
      <div className="container-gutter">
        <h1 className={styles.mainHeading}>
          <span>Välkommen till Hos Frisören,</span>
          <span> en liten salong med stort hjärta</span>
          <span> på Torget mitt i Leksand</span>
        </h1>
        <a
          href="https://bokning.voady.se/hosfrisoren/hosfrisoren/"
          className="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Till onlinebokningen
        </a>
      </div>
      <div
        style={{ height: "40vh", width: "100vw", backgroundColor: "beige" }}
      ></div>
      <ColorBlock bg="bg-1">
        <TwoColImage id={blockContentOne.id} />
        <TwoColText>
          {blockContentOne.body}
          <a
            href="https://bokning.voady.se/hosfrisoren/hosfrisoren/"
            className="button inverted"
            target="_blank"
            rel="noopener noreferrer"
          >
            Till onlinebokningen
          </a>
        </TwoColText>
      </ColorBlock>

      {/* CARD list */}
      <ColorBlock bg="bg-3">
        <h2 style={{ gridColumn: "1/-1" }}>Så här jobbar vi</h2>
        <ul className={styles.cardList}>
          {cardsData.map((card, i) => (
            <Card key={i} title={card.title} body={card.body} cta={card.cta} />
          ))}
        </ul>
      </ColorBlock>

      <ColorBlock bg="bg-2">
        <TwoColImage id={blockContentTwo.id} mediaDirection="right" />
        <TwoColText mediaDirection="right">{blockContentTwo.body}</TwoColText>
      </ColorBlock>

      {/* GALLERY */}

      <ColorBlock bg="bg-3">
        <TwoColImage id={blockContentOne.id} />
        <TwoColText>{blockContentOne.body}</TwoColText>
      </ColorBlock>
    </>
    // <div className={styles.page}>
    //   <main className={styles.main} id="main-content">
    //     <Image
    //       className={styles.logo}
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol>
    //       <li>
    //         Get started by editing <code>src/app/page.js</code>.
    //       </li>
    //       <li>Save and see your changes instantly.</li>
    //     </ol>

    //     <div className={styles.ctas}>
    //       <a
    //         className={styles.primary}
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className={styles.logo}
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className={styles.secondary}
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className={styles.footer}>
    //     FOOTER
    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
  );
}
