import Link from "next/link";
import Image from "next/image";

import SmartLink from "./SmartLink";
import FadeInOnScroll from "./FadeInOnScroll";

import { Calender, Clock, Scissors } from "@/assets/Icons";

import styles from "./Card.module.css";

function Card({
  title,
  body,
  icon = null,
  img = null,
  cta = null,
  ctaText = null,
}) {
  const iconMap = {
    clock: <Clock className={styles.listIcon} />,
    calender: <Calender className={styles.listIcon} />,
    scissors: <Scissors className={styles.listIcon} />,
  };

  const iconComponent = iconMap[icon];

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
    <li className={styles.card}>
      <FadeInOnScroll>
        {iconComponent}
        {img && (
          <Image
            loading="lazy"
            src={img.src}
            width={img.width}
            height={img.height}
            alt={img.alt}
          />
        )}
        <div className={styles.content}>
          {heading}
          <p className={styles.meta}>{body}</p>
          {cta && ctaText && (
            <p className={styles.readMore} aria-hidden="true">
              {ctaText}
            </p>
          )}
        </div>
      </FadeInOnScroll>
    </li>
  );
}

export default Card;
