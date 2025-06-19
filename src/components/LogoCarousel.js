import LogoGroup from "@/components/LogoGroup";
import styles from "./LogoCarousel.module.css";

function LogoCarousel() {
  return (
    <section className={styles.logos}>
      {Array(3)
        .fill(null)
        .map((_, index) => (
          <div className={styles.logosSlide} key={index}>
            <LogoGroup />
          </div>
        ))}
    </section>
  );
}

export default LogoCarousel;
