import Link from "next/link";

function LinkButton({ route, isInverted = false, children }) {
  const inverted = isInverted ? styles.inverted : "";

  return (
    <Link href={route} className={`button ${inverted}`}>
      {children}
    </Link>
  );
}

export default LinkButton;
