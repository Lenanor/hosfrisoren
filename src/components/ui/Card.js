import Link from "next/link";

import SmartLink from "./SmartLink";
import FadeInOnScroll from "./FadeInOnScroll";

import { Calender, Clock, Scissors } from "@/assets/Icons";

import styles from "./Card.module.css";

function Card({ title, body, icon = null, cta = null }) {
  function getIcon(icon) {
    if (icon === "clock") {
      return <Clock className={styles.listIcon} />;
    }
    if (icon === "calender") {
      return <Calender className={styles.listIcon} />;
    }
    if (icon === "scissors") {
      return <Scissors className={styles.listIcon} />;
    }
  }

  const iconType = getIcon(icon);
  const heading =
    cta === null ? (
      <h3>{title}</h3>
    ) : (
      <h3 className={styles.title}>
        <SmartLink className={styles.primaryAction} href={cta}>
          {title}
        </SmartLink>
      </h3>
    );

  return (
    <FadeInOnScroll>
      <li className={styles.card}>
        {iconType}
        <div className={styles.content}>
          {heading}
          <p className={styles.meta}>{body}</p>
          {cta && (
            <p className={styles.readMore} aria-hidden="true">
              Läs mer
            </p>
          )}
        </div>
      </li>
    </FadeInOnScroll>
  );
}

export default Card;
