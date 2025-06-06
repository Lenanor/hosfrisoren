import Image from "next/image";

import styles from "./MediaBlock.module.css";

const images = [
  { id: "media1", src: "/images/media_1.jpg" },
  { id: "media4", src: "/images/media_4.jpg" },
  { id: "media6", src: "/images/media_6.jpg" },
  { id: "media7", src: "/images/media_7.jpg" },
  { id: "media5", src: "/images/media_5.jpg" },
  { id: "media3", src: "/images/media_3.jpg" },
  { id: "media2", src: "/images/media_2.jpg" },
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
            style={{ objectFit: "cover" }}
            sizes="(min-width: 1440px) 288px, (min-width: 769px) calc((100vw/5) - 6 * 8px), 280px"
          />
        </div>
      ))}
      {/* <div className={`${styles.scrollArrow} ${styles.left}`}>x</div>
      <div className={`${styles.scrollArrow} ${styles.right}`}>x</div> */}
    </section>
  );
}

export default MediaBlock;
