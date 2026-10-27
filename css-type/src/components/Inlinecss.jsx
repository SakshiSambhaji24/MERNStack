function InlineCSS() {
  return (
    <div
      style={{
        backgroundColor: "lightgreen",
        border: "2px solid green",
        padding: "20px",
        margin: "20px",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "darkgreen" }}>
        Inline CSS
      </h2>

      <p style={{ color: "blue" }}>
        This component uses inline CSS.
      </p>
    </div>
  );
}

export default InlineCSS;