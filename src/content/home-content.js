// -----------------------------
//   Homepage: Hero / h1
// -----------------------------

export const mainHeading = (
  <>
    <span>Hos&nbsp;Frisören</span>
    <span>Färg, form</span>
    <span>& hårhantverk</span>
  </>
);

// -----------------------------
//   Homepage: ColorBlocks
// -----------------------------

export const blockContentOne = {
  id: "product_section",
  body: (
    <>
      <h2>Hur vill du ha ditt&nbsp;hår?</h2>
      <p>
        Klippning, toppning, färg eller slingor? Vill du göra en uppsättning,
        hårförlängning eller en permanent? Det fixar vi.
      </p>
      <p>
        Våra duktiga frisörer står redo att ta hand om dig och ditt hår. Slå dig
        ner, koppla av, drick en kaffe så sköter vi resten. Boka tid via vår
        online-bokning eller ring oss på
        <a href="tel:+4624710038">
          {" "}
          <span>0247&#8209;100&nbsp;38</span>
        </a>
        .
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
        Hos Frisören säljer hårprodukter med hög kvalitet som vi själva vill
        använda. De flesta produkterna är veganska, fria från sulfater, gluten,
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
      id: "scissors",
      icon: "scissors",
      title: "Vi är licencierade frisörer",
      body: "Salongen är medlem i Frisörföretagarna och frisörerna som jobbar här är utbildade, har frisörlicens och har avlagt godkänt gesällprov.....",
      cta: "/about",
      ctaText: "Läs mer",
    },
    {
      id: "clock",
      icon: "clock",
      title: "Öppettider",
      body: "I regel gäller: måndag: 10 - 18, tisdag - fredag: 9 - 18, helg: stängt. Håll gärna koll på Hos Frisörens instagram-konto för avvikelser. Vi har öppet hela.....",
      cta: "/open",
      ctaText: "Läs mer",
    },
    {
      id: "calender",
      icon: "calender",
      title: "Tidsbokning",
      body: "Om du får förhinder, tänk på att avboka senast 24 timmar innan så vi har chans att ge tiden till någon annan. Vi är kontantfria och tar endast betalning via kontokort och Swish.",
      cta: "https://bokning.voady.se/hosfrisoren/hosfrisoren/",
      ctaText: "Boka online",
    },
  ],
};
