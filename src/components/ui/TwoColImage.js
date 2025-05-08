import Image from "next/image";

import styles from "./TwoColImage.module.css";

function TwoColImage({ id, mediaDirection = "left" }) {
  return (
    <div className={`${styles.imgParent} ${styles[mediaDirection]}`}>
      <Image
        className={styles.img}
        src={`/${id}.webp`}
        alt=""
        fill
        sizes="
        (min-width: 1440px) 600px,
        (min-width: 721px) calc(41.66vw - 12.8rem),
        (min-width: 481px) calc(58.33vw - 6.4rem),
        calc(100vw - 4.8rem)
        "
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

export default TwoColImage;
