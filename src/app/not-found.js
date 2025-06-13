import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="container container-padding"
      style={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1 style={{ fontSize: "clamp(2.5rem, 6.3vw, 6rem)" }}>
        Sidan kunde inte hittas &#x1F61E;
      </h1>
      <p>
        Kontrollera att webbadressen är korrekt, eller gå tillbaka till{" "}
        <Link
          style={{
            textDecoration: "underline",
            textUnderlineOffset: "5px",
            fontWeight: "600",
          }}
          href="/"
        >
          startsidan
        </Link>
        .
      </p>
    </div>
  );
}
