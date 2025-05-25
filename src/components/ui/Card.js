import Link from "next/link";

import { Calender, Clock, Scissors } from "@/assets/Icons";

import styles from "./Card.module.css";
import SmartLink from "./SmartLink";

function Card({ title, body, icon, cta }) {
  function getIcon(icon) {
    if (icon === "clock") {
      return <Clock className={styles.listIcon} />;
    }
    if (icon === "calender") {
      return <Calender className={styles.listIcon} />;
    }

    return <Scissors className={styles.listIcon} />;
  }

  const iconType = getIcon(icon);

  return (
    <li className={styles.card}>
      {iconType}
      <div className={styles.content}>
        <h3 className={styles.title}>
          <SmartLink className={styles.primaryAction} href={cta}>
            {title}
          </SmartLink>
        </h3>
        <p className={styles.meta}>{body}</p>
        <p className={styles.readMore} aria-hidden="true">
          Läs mer
        </p>
      </div>
    </li>
  );
}

export default Card;
