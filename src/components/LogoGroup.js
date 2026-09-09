import Image from "next/image";

import styles from "./LogoGroup.module.css";
import kevinMurphy from "@/assets/logos/k_murphy_300x37.png";
import eleven from "@/assets/logos/eleven_200x57.png";
import k18 from "@/assets/logos/K18_120x74.png";
import epres from "@/assets/logos/epres_160x49.png";

const logos = [
  {
    src: kevinMurphy,
    alt: "Logotyp för märket Kevin Murphy",
    className: styles.kevin,
    width: 300,
    height: 37,
    sizes: "(min-width: 481px) 150px, 120px",
  },
  {
    src: eleven,
    alt: "Logotyp för märket Eleven",
    className: styles.eleven,
    width: 200,
    height: 57,
    sizes: "(min-width: 481px) 100px, 85px",
  },
  {
    src: k18,
    alt: "Logotyp för märket K18",
    className: styles.k18,
    width: 120,
    height: 74,
    sizes: "(min-width: 481px) 60px, 55px",
  },
  {
    src: epres,
    alt: "Logotyp för märket Epres",
    className: styles.epres,
    width: 160,
    height: 49,
    sizes: "(min-width: 481px) 80px, 60px",
  },
];

function LogoGroup() {
  return (
    <>
      {logos.map((logo, index) => (
        <Image
          key={index}
          className={`${styles.image} ${logo.className}`}
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          sizes={logo.sizes}
          priority={false}
          loading="lazy"
        />
      ))}
    </>
  );
}

export default LogoGroup;
