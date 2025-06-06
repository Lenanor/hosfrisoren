import { FacebookIcon, InstagramIcon } from "@/assets/Icons";

import styles from "./SoMeGroup.module.css";

function SoMeGroup() {
  return (
    <div className={styles.soMe}>
      <a
        href="https://www.facebook.com/HosFrisoren"
        className={styles.icon}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon aria-hidden={true} />
        <span className="sr-only">
          Länk till Hos Frisörens Facebook-sida. Öppnas i nytt fönster.
        </span>
      </a>
      <a
        href="https://www.instagram.com/hosfrisoren/"
        className={styles.icon}
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon aria-hidden={true} />
        <span className="sr-only">
          Länk till Hos Frisörens Instagram-sida. Öppnas i nytt fönster.
        </span>
      </a>
    </div>
  );
}

export default SoMeGroup;
