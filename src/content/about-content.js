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
      id: "lisa",
      icon: "scissors",
      title: (
        <>
          Lisa <span>Gesäll- och mästarbrev</span>
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
      id: "nina",
      icon: "scissors",
      title: (
        <>
          Nina <span>Gesällbrev</span>
        </>
      ),
      body: (
        <>
          <span>
            Jag gillar att mitt jobb är så varierat, ena dagen en enkel
            toppning, nästa dag en stor färgförändring. Att träffa nya människor
            är också en stor del av varför jag trivs med yrket. Alla har sin
            egen stil och sina egna önskemål om hur de vill ha sitt hår, och jag
            gillar att hitta lösningar som passar just den personen. Färgningar
            tycker jag är särskilt kul, det finns så många nyanser och
            möjligheter.
          </span>
          <span>
            Mitt bästa tips för dig som vill börja ta hand om ditt hår? Satsa på
            ett bra schampo och balsam, det gör mer för håret än man kanske
            tror.
          </span>
          <span>
            Fritiden spenderar jag helst med min man och vår son hemma i Insjön.
            Ibland tränar jag, ibland ser jag en riktigt bra serie. Mitt
            favoritdjur är hundar, de gör mig alltid glad.
          </span>
        </>
      ),
      cta: "/about",
    },
    {
      id: "louisa",
      icon: "scissors",
      title: (
        <>
          Louisa <span>Trainee</span>
        </>
      ),
      body: (
        <>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </span>
          <span>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </span>
        </>
      ),
      cta: "https://bokning.voady.se/hosfrisoren/hosfrisoren/",
    },
  ],
};
