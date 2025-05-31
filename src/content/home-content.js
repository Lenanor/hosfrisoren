// -----------------------------
//   Homepage: Hero / h1
// -----------------------------

export const mainHeading =
  "Välkommen till Hos Frisören, en liten salong med stort hjärta på Torget mitt i Leksand";

// -----------------------------
//   Homepage: ColorBlocks
// -----------------------------

export const blockContentOne = {
  id: "product_section",
  body: (
    <>
      <h2>Hur vill du ha ditt hår?</h2>
      <p>
        Klippning, toppning, färg eller slingor? Vill du göra en uppsättning,
        hårförlängning eller en permanent? Det fixar vi.
      </p>
      <p>
        Våra duktiga frisörer står redo att ta hand om ditt hår. Slå dig ner,
        koppla av, drick en kaffe så sköter vi resten. Boka tid via vår
        online-bokning (läs mer här) eller ring oss på
        <a href="tel:+4624710038"> 0247-100 38</a>.
      </p>
    </>
  ),
};

export const blockContentTwo = {
  id: "product_section",
  body: (
    <>
      <h2>Produkter och prismatchning</h2>
      <p>
        Hos Frisören säljer bara hårprodukter av hög kvalitet som vi själva vill
        använda. Så gott som alla är veganska, fria från sulfater, gluten,
        parabener och har förpackningar av återvunnen plast. Fråga oss gärna om
        rådgivning, vi kan våra produkter och guidar dig gärna om vad som passar
        dig och din typ av hår.
      </p>
      <p>
        <strong>
          OBS! Vi prismatchar våra hårprodukter. Hittar du någon av dem
          billigare på webben så matchar vi det lägre priset.
        </strong>
      </p>
      <p>
        Vi vill passa på att tacka till dig som handlar lokalt, du hjälper till
        att hålla Leksands företag levande! 🖤
      </p>
    </>
  ),
};

export const blockContentThree = {
  id: "pryl_section",
  body: (
    <>
      <h2>Surprise!</h2>
      <p>
        Inredning. Pop-up i salongen. presenter/unna däj. På salongen finns även
        en inredningshörna där vi säljer diverse föremål så som skålar, krukor,
        lampor, ljusstakar m.m. Vi köper in inredningssaker vi gillar och hoppas
        att du också tycker om dem!
      </p>
      <p>
        <strong>
          OBS! Om du hittar någon av våra hårprodukter billigare online så
          prismatchar vi det lägre priset.
        </strong>
      </p>
      <p>
        Stort tack till dig som handlar lokalt, du hjälper till att hålla ortens
        företag levande!
      </p>
    </>
  ),
};

// -----------------------------
//   Homepage: Cards
// -----------------------------
export const cardsData = {
  heading: "",
  cards: [
    {
      icon: "scissors",
      title: "Vi är licencierade frisörer",
      body: "Hos Frisören är medlem i frisörföreningen och personalen har gesällbrev eller mästarbrev. Det garanterar att vi har...",
      cta: "/about",
    },
    {
      icon: "clock",
      title: "Öppettider",
      body: "Hos Frisören är medlem i frisörföreningen och personalen har gesällbrev eller mästarbrev. Det garanterar att vi har...",
      cta: "/about",
    },
    {
      icon: "calender",
      title: "Tidsbokning",
      body: "Hos Frisören är medlem i frisörföreningen och personalen har gesällbrev eller mästarbrev. Det garanterar att vi har...",
      cta: "https://bokning.voady.se/hosfrisoren/hosfrisoren/",
    },
  ],
};
