"use client";

export default function Error({ error, reset }) {
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
      <h1 style={{ fontSize: "clamp(2.8rem, 6.3vw, 6rem)" }}>
        Oj, något gick fel! &#x1F61E;
      </h1>
      <pre
        style={{
          padding: "2rem",
          backgroundColor: "#e7e7e7",
          color: "red",
          fontSize: "14px",
          width: "100%",
          maxWidth: "650px",
          height: "auto",
          whiteSpace: "initial",
        }}
      >
        {error.message}
      </pre>
      <button
        style={{
          padding: "1rem",
          width: "10rem",
          marginTop: "3rem",
          backgroundColor: "black",
          color: "white",
          borderRadius: "3px",
        }}
        onClick={() => reset()}
      >
        Försök igen
      </button>
    </div>
  );
}
