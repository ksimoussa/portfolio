export default function ComingSoon() {
    return (
      <div
        style={{
          fontFamily: "'Nunito', sans-serif",
          background: "#F7F4EF",
          color: "#4B433E",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <div
          style={{
            background: "#FFFCF8",
            padding: "3rem 2rem",
            borderRadius: "20px",
            maxWidth: "520px",
            width: "100%",
            boxShadow: "0 12px 30px rgba(0,0,0,0.05)",
            border: "1px solid rgba(0,0,0,0.04)",
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
              fontSize: "1rem",
              lineHeight: "1.7",
              marginBottom: "2rem",
            }}
          >
            This project is currently in progress as part of SEG3125 –
            Analysis and Design of User Interfaces. It will be published once
            completed later in the semester.
          </p>
  
          <a
            href="/"
            style={{
              display: "inline-block",
              background: "#A8B7A0",
              color: "#FFFCF8",
              textDecoration: "none",
              padding: "0.75rem 1.8rem",
              borderRadius: "2rem",
              fontSize: "0.85rem",
              fontWeight: "500",
            }}
          >
            ← Back to Portfolio
          </a>
        </div>
      </div>
    );
  }