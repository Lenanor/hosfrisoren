// import Image from "next/image";

// import styles from "./LogoGroup.module.css";
// import kevinMurphy from "@/assets/logos/k_murphy_300x37.png";
// import eleven from "@/assets/logos/eleven_200x57.png";
// import lp from "@/assets/logos/LP_320x59.png";
// import k18 from "@/assets/logos/K18_120x74.png";
// import epres from "@/assets/logos/epres_160x49.png";

// function LogoGroup() {
//   return (
//     <>
//       <Image
//         className={`${styles.image} ${styles.kevin}`}
//         src={kevinMurphy}
//         alt="Logotyp Kevin Murphy"
//         width={300}
//         height={37}
//         sizes="(min-width: 481px) 150px, 120px"
//       />
//       <Image
//         className={`${styles.image} ${styles.eleven}`}
//         src={eleven}
//         alt="Logotyp Eleven"
//         width={200}
//         height={57}
//         sizes="(min-width: 481px) 100px, 85px"
//       />
//       <Image
//         className={`${styles.image} ${styles.lp}`}
//         src={lp}
//         alt="Logotyp Living Proof"
//         width={320}
//         height={59}
//         sizes="(min-width: 481px) 160px, 125px"
//       />
//       <Image
//         className={`${styles.image} ${styles.k18}`}
//         src={k18}
//         alt="Logotyp K18"
//         width={120}
//         height={74}
//         sizes="(min-width: 481px) 60px, 55px"
//       />
//       <Image
//         className={`${styles.image} ${styles.epres}`}
//         src={epres}
//         alt="Logotyp Epres"
//         width={160}
//         height={49}
//         sizes="(min-width: 481px) 80px, 60px"
//       />
//     </>
//   );
// }

// export default LogoGroup;
// LogoGroup.tsx
import Image from "next/image";
import styles from "./LogoGroup.module.css";
import kevinMurphy from "@/assets/logos/k_murphy_300x37.png";
import eleven from "@/assets/logos/eleven_200x57.png";
import lp from "@/assets/logos/LP_320x59.png";
import k18 from "@/assets/logos/K18_120x74.png";
import epres from "@/assets/logos/epres_160x49.png";

const logos = [
  {
    src: kevinMurphy,
    alt: "Logotyp för hårprodukten Kevin Murphy",
    className: styles.kevin,
    width: 300,
    height: 37,
    sizes: "(min-width: 481px) 150px, 120px",
  },
  {
    src: eleven,
    alt: "Logotyp för hårprodukten Eleven",
    className: styles.eleven,
    width: 200,
    height: 57,
    sizes: "(min-width: 481px) 100px, 85px",
  },
  {
    src: lp,
    alt: "Logotyp för hårprodukten Living Proof",
    className: styles.lp,
    width: 320,
    height: 59,
    sizes: "(min-width: 481px) 160px, 125px",
  },
  {
    src: k18,
    alt: "Logotyp för hårprodukten K18",
    className: styles.k18,
    width: 120,
    height: 74,
    sizes: "(min-width: 481px) 60px, 55px",
  },
  {
    src: epres,
    alt: "Logotyp för hårprodukten Epres",
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
        />
      ))}
    </>
  );
}

export default LogoGroup;
