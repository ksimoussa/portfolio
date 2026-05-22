export default function ComingSoon() {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F7F4EF",
          padding: "2rem",
          fontFamily: "'Nunito', sans-serif",
        }}
      >
        <div
          style={{
            background: "#FFFCF8",
            padding: "3rem 2rem",
            borderRadius: "20px",
            maxWidth: "520px",
            width: "100%",
            textAlign: "center",
            boxShadow: "0 12px 30px rgba(0,0,0,0.05)",
          }}
        >
          <div
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#A8B7A0",
              marginBottom: "1rem",
            }}
          >
            Case Study
          </div>
  
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "2.3rem",
              fontStyle: "italic",
              color: "#D7B8B2",
              marginBottom: "1rem",
            }}
          >
            Coming Soon
          </h1>
  
          <p
            style={{
              fontFamily: "'Lora', serif",
              color: "#7A675A",
              lineHeight: "1.7",
              marginBottom: "2rem",
            }}
          >
            This project is currently in progress as part of SEG3125 –
            Analysis and Design of User Interfaces.
          </p>
  
          <a
            href="/"
            style={{
              display: "inline-block",
              background: "#A8B7A0",
              color: "#fff",
              textDecoration: "none",
              padding: "0.75rem 1.8rem",
              borderRadius: "2rem",
            }}
          >
            ← Back to Portfolio
          </a>
        </div>
      </div>
    );
  }