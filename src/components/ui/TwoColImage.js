import Image from "next/image";

import styles from "./TwoColImage.module.css";

function TwoColImage({ id, mediaDirection = "left" }) {
  const src = `/images/${id}.jpg`;

  return (
    <div className={`${styles.imgParent} ${styles[mediaDirection]}`}>
      <Image
        className={styles.img}
        src={src}
        alt=""
        fill
        sizes="
        (min-width: 1440px) 473px,
        (min-width: 1025px) calc((100vw - 18rem) / 24 * 9),
        (min-width: 769px) calc((100vw - 12rem) / 24 * 11),
        (min-width: 481px) calc((100vw - 12rem) / 24 * 13),
        calc(100vw - 3.6rem)
        "
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

export default TwoColImage;
