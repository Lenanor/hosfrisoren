export const introText = (
  <p>
    I lokalen på Torget 6 har frisörer varit verksamma sedan ...., här sitter
    verkligen hantverket i väggarna. Lisa tog över som ägare 19xx då hon öppnade
    Hos Frisören.
  </p>
);

export const introStylists = (
  <p>
    Hos Frisören är medlem i Frisörförbundet och vi som jobbar här är utbildade
    och licencierade frisörer eller trainees.
  </p>
);

// -----------------------------
//   Aboutpage: Cards
// -----------------------------
export const stylistsData = {
  heading: "Frisörerna",
  cards: [
    {
      icon: "scissors",
      title: (
        <>
          Lisa <span>gesäll- och mästarbrev</span>
        </>
      ),
      body: (
        <>
          <span>
            Att klippa fram en snygg form och förändra med färg är det som jag
            gillar bäst med mitt arbete. Ingen människa är den andra lik, och
            varje frisyr behöver sin egen lösning. När allt stämmer och
            resultatet får en person att stråla så känns jobbet extra
            meningsfullt. Mitt bästa tips för ditt hår är Epres inpackning. Den
            ger verkligen resultat och är lätt att använda.
          </span>
          <span>
            Utanför jobbet tillbringar jag gärna tid i trädgården hemma på
            Sollerön där jag odlar grönsaker och blommor samt för en ständig
            kamp mot rådjuren. Annars hittar du mig på gymmet eller försjunken i
            ett pussel.
          </span>
        </>
      ),
    },
    {
      icon: "scissors",
      title: "Nina",
      body: "Hos Frisören är medlem i frisörföreningen och personalen har gesällbrev eller mästarbrev. Det garanterar att vi har...",
      cta: "/about",
    },
    {
      icon: "scissors",
      title: "Louisa",
      body: "Hos Frisören är medlem i frisörföreningen och personalen har gesällbrev eller mästarbrev. Det garanterar att vi har...",
      cta: "https://bokning.voady.se/hosfrisoren/hosfrisoren/",
    },
  ],
};
