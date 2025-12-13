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
  id: "section_intro",
  body: (
    <>
      <h2>Hur vill du ha ditt&nbsp;hår?</h2>
      <p>
        Dags för klippning, färg eller kanske slingor? Känner du för en
        balayage, permanent eller hårförlängning? Det fixar vi.
      </p>
      <p>
        Våra erfarna frisörer tar hand om dig och ditt hår. Slå dig bara ner,
        koppla av med en kaffe och känn dig trygg med att vi kan vårt hantverk.
        Välkommen till Hos Frisören!{" "}
      </p>

      <p>
        Boka tid via vår online-bokning eller ring oss på
        <a href="tel:+4624710038">
          {" "}
          <span>0247&#8209;100&nbsp;38</span>
        </a>
        .
      </p>
    </>
  ),
};

export const blockContentCurrent = {
  id: "section_current",
  body: (
    <>
      <h2>Aktuellt</h2>
      <ul className="current-section-list">
        <li>
          30% på alla produkter från Living proof (så långt lagret räcker).
        </li>
        <li>20% på alla inredningsprodukter (t.o.m den 9/1).</li>
        <li>
          Välkommen Selma - vår nya frisörelev! Hon gör behandlingar till halva
          ordinarie pris och kan bokas via telefon (ej via digital bokning).
        </li>
        <li>
          Nu kan du betala hos oss med Klarna när du handlar över 1.650kr.
        </li>
        <li>Vecka 3 (12&ndash;18/1) håller salongen stängt för renovering.</li>
      </ul>
    </>
  ),
};

export const blockContentTwo = {
  id: "section_products",
  body: (
    <>
      <h2>Produkter och prismatchning</h2>
      <p>
        Hos Frisören är återförsäljare av hårprodukter av toppkvalitet,
        produkter som vi själva gärna använder och rekommenderar. De flesta
        märkena är veganska, fria från sulfater, gluten, parabener och har
        förpackningar av återvunnen plast. Fråga oss gärna om rådgivning, vi kan
        våra produkter och guidar dig gärna om vad som passar dig och din typ av
        hår.
      </p>
      <p>
        <strong>
          OBS! Vi prismatchar våra hårprodukter. Hittar du någon av dem
          billigare på webben så matchar vi det lägre priset.
        </strong>
      </p>
      <p>
        Vi vill passa på att rikta ett stort tack dig som handlar lokalt. Du
        hjälper till att hålla Leksands företag levande! 🖤
      </p>
    </>
  ),
};

export const blockContentThree = {
  id: "section_inredning",
  body: (
    <>
      <h2>Surprise!</h2>
      <p>
        På vår salong hittar du inte bara hårvård. Vi har också en liten
        inredningshörna med noga utvalda detaljer för hemmet. Här kan du
        botanisera bland prydnadsföremål, ljusstakar, lampor och andra
        inredningsdetaljer som passar lika bra som presenter som till ditt eget
        hem.
      </p>
      <p>
        Vi handplockar allt i liten skala, med omsorg och känsla. Det ska kännas
        både personligt och inspirerande. Kanske hittar du just den där lilla
        saken du inte visste att du saknade.
      </p>
      <p>
        <strong>
          Fram till v.3 har vi 20% rabatt på ALLA INREDNINGSPRODUKTER.
        </strong>
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
      cta: "/om-oss",
      ctaText: "Läs mer",
    },
    {
      id: "clock",
      icon: "clock",
      title: "Öppettider",
      body: "I regel gäller: måndag: 10 - 18, tisdag - fredag: 9 - 18, helg: stängt. Håll gärna koll på Hos Frisörens instagram-konto för avvikelser. Vi har öppet hela.....",
      cta: "/oppettider",
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
