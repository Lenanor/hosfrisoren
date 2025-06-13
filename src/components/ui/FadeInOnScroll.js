"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./FadeInOnScroll.module.css";

export default function FadeInOnScroll({ children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.fadeInSection} ${visible ? styles.isVisible : ""}`}
    >
      {children}
    </div>
  );
}
