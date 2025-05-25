import Image from "next/image";

import styles from "./MediaBlock.module.css";

const images = [
  { id: 1, src: "/sonja.webp" },
  { id: 2, src: "/sonja.webp" },
  { id: 3, src: "/sonja.webp" },
  { id: 4, src: "/sonja.webp" },
  { id: 5, src: "/sonja.webp" },
  { id: 6, src: "/sonja.webp" },
  { id: 7, src: "/sonja.webp" },
  { id: 8, src: "/sonja.webp" },
];

function MediaBlock() {
  return (
    <section
      className={`container ${styles.section} ${styles.snapsInline}`}
      // aria-label="Galleri med frisyrbilder"
    >
      {images.map((image) => (
        <div key={image.id} className={styles.wrapper}>
          <Image
            className={styles.img}
            src={image.src}
            alt=""
            fill
            // placeholder="blur"
            style={{ objectFit: "cover" }}
            sizes="(min-width: 1440px) 360px, (min-width: 769px) calc(100vw/4), (max-width: 768px) 256px"
          />
        </div>
      ))}
      {/* <div className={`${styles.scrollArrow} ${styles.left}`}>x</div>
      <div className={`${styles.scrollArrow} ${styles.right}`}>x</div> */}
    </section>
  );
}

export default MediaBlock;
