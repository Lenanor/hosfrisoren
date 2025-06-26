import Image from "next/image";

import styles from "./MediaBlock.module.css";

const imagesUrl = [
  {
    id: "media1",
    src: "/images/media_1.jpg",
    alt: "Frisyrbild med långt hår i blonda nyanser och lockar",
  },
  {
    id: "media5",
    src: "/images/media_5.jpg",
    alt: "Frisyrbild med kort, gråvitt hår med snedlugg",
  },
  {
    id: "media7",
    src: "/images/media_7.jpg",
    alt: "Frisyrbild med långt, lockigt hår i röda toner",
  },
  {
    id: "media6",
    src: "/images/media_6.jpg",
    alt: "Frisyrbild med strikt välkammad page",
  },
  {
    id: "media2",
    src: "/images/media_2.jpg",
    alt: "Frisyrbild med långt ljusbrunt hår med självfall",
  },
  {
    id: "media3",
    src: "/images/media_3.jpg",
    alt: "Frisyrbild med långt brunrött, lockat hår",
  },
];

function MediaBlock() {
  return (
    <section className={`container ${styles.section} ${styles.snapsInline}`}>
      {imagesUrl.map((image) => (
        <div key={image.id} className={styles.wrapper}>
          <Image
            className={styles.img}
            src={image.src}
            alt={image.alt}
            fill
            style={{ objectFit: "cover" }}
            sizes="(min-width: 1440px) 288px, (min-width: 769px) calc((100vw/5) - 6 * 8px), 280px"
          />
        </div>
      ))}
    </section>
  );
}

export default MediaBlock;
