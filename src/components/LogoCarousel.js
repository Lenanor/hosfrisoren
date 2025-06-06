import LogoGroup from "@/components/LogoGroup";
import styles from "./LogoCarousel.module.css";
import Image from "next/image";

function LogoCarousel() {
  return (
    <section className={styles.logos}>
      <div className={styles.logosSlide}>
        <LogoGroup />
      </div>
      <div className={styles.logosSlide}>
        <LogoGroup />
      </div>
      <div className={styles.logosSlide}>
        <LogoGroup />
      </div>
    </section>
  );
}

export default LogoCarousel;
