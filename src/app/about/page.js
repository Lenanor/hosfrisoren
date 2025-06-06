import ColorBlock from "@/components/ui/ColorBlock";
import Card from "@/components/ui/Card";

import {
  introText,
  introStylists,
  stylistsData,
} from "@/content/about-content";

function About() {
  return (
    <>
      <ColorBlock withGrid={false}>
        <h1>Om oss</h1>
        <p>{introText}</p>
      </ColorBlock>
      <ColorBlock withGrid={false}>
        <div
          style={{ height: "60vh", width: "100%", backgroundColor: "beige" }}
        ></div>
        <h2>{stylistsData.heading}</h2>
        <p>{introStylists}</p>
        <ul>
          {stylistsData.cards.map((data) => (
            <Card key={data.title} title={data.title} body={data.body} />
          ))}
        </ul>
      </ColorBlock>
      <ColorBlock withGrid={false}>
        <h2>Vill du jobba med oss?</h2>
        <p>Vi söker alltid efter trevliga kollegor.....</p>
        <h2>Söker du praktik?</h2>
        <p>Vi söker alltid efter trevliga kollegor.....</p>
      </ColorBlock>
    </>
  );
}

export default About;
