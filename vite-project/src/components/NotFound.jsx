function NotFound() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "60vh",
      color: "#555"
    }}>
      <h1 style={{ fontSize: "4rem", marginBottom: "0.5rem" }}>404</h1>
      <p style={{ fontSize: "1.5rem" }}>Page Not Found</p>
    </div>
  );
}

export default NotFound;
