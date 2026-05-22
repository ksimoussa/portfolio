import { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";

/* ── Google Fonts injected at runtime ── */
const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;1,400;0,700&family=Lora:wght@400;500&family=Nunito:wght@300;400;500;600&display=swap";
document.head.appendChild(fontLink);

/* ── CSS variables + global styles ── */
const globalCSS = `
  :root {
    --cream:      #F7F4EF;
    --warm-beige: #E8DED1;
    --sage:       #A8B7A0;
    --dusty-rose: #D7B8B2;
    --soft-brown: #7A675A;
    --charcoal:   #4B433E;
    --white:      #FFFCF8;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }

  body {
    background-color: var(--cream);
    color: var(--charcoal);
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    line-height: 1.7;
  }

  /* ── Navbar overrides ── */
  .port-nav {
    background: rgba(255,252,248,0.88) !important;
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0,0,0,0.04);
    padding: 1rem 2rem;
  }
  .port-nav .navbar-brand {
    font-family: 'Playfair Display', serif;
    font-size: 1.3rem;
    color: var(--charcoal) !important;
    letter-spacing: 0.05em;
  }
  .port-nav .nav-link {
    color: var(--soft-brown) !important;
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    transition: color 0.2s ease;
  }
  .port-nav .nav-link:hover { color: var(--sage) !important; }

  /* ── Hero ── */
  .hero {
    background: linear-gradient(135deg, #F7F4EF 0%, #EFE7DC 100%);
    padding: 7rem 2rem 6rem;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at top right, rgba(215,184,178,0.18) 0%, transparent 60%);
    pointer-events: none;
  }
  .hero-eyebrow {
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--sage);
    margin-bottom: 1rem;
  }
  .hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.8rem, 6vw, 4.5rem);
    font-weight: 600;
    line-height: 1.15;
    color: var(--charcoal);
    margin-bottom: 1.25rem;
  }
  .hero h1 em { color: var(--dusty-rose); font-style: italic; }
  .hero-sub {
    font-family: 'Lora', serif;
    font-size: 1.05rem;
    color: var(--soft-brown);
    max-width: 560px;
    margin: 0 auto 2.5rem;
  }
  .btn-hero {
    background: var(--sage);
    color: var(--white) !important;
    border: none;
    border-radius: 2rem;
    padding: 0.8rem 2rem;
    font-size: 0.88rem;
    font-family: 'Nunito', sans-serif;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-decoration: none;
    display: inline-block;
    transition: background 0.2s ease, transform 0.2s ease;
  }
  .btn-hero:hover { background: #95A58D; transform: translateY(-2px); }

  /* ── Sections ── */
  .port-section { padding: 6rem 1.5rem; }
  .section-label {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--sage);
    margin-bottom: 0.5rem;
  }
  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 4vw, 2.8rem);
    font-weight: 600;
    color: var(--charcoal);
    margin-bottom: 1.5rem;
  }
  .divider {
    width: 52px;
    height: 3px;
    background: var(--dusty-rose);
    border-radius: 2px;
    margin-bottom: 2rem;
  }

  /* ── About ── */
  .about-section { background: var(--white); }
  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1.6fr;
    gap: 3rem;
    align-items: center;
    max-width: 960px;
    margin: 0 auto;
  }
  .avatar-box {
    width: 100%;
    aspect-ratio: 1;
    max-width: 280px;
    background: linear-gradient(145deg, #EFE7DC, #F7F4EF);
    border-radius: 40% 60% 55% 45% / 45% 55% 65% 35%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    font-family: 'Playfair Display', serif;
    font-size: 5rem;
    color: var(--dusty-rose);
    position: relative;
    box-shadow: 0 12px 30px rgba(0,0,0,0.04);
  }
  .avatar-box::after {
    content: '';
    position: absolute;
    inset: -8px;
    border: 2px dashed rgba(168,183,160,0.45);
    border-radius: 40% 60% 55% 45% / 45% 55% 65% 35%;
  }
  .tag-chip {
    display: inline-block;
    background: #EFE7DC;
    color: var(--soft-brown);
    font-size: 0.78rem;
    font-weight: 500;
    padding: 0.35rem 0.9rem;
    border-radius: 1rem;
    margin: 0.25rem 0.2rem;
  }

  /* ── How I Work ── */
  .work-section { background: var(--cream); }
  .how-inner { max-width: 760px; margin: 0 auto; }
  .step-card {
    background: var(--white);
    border-left: 4px solid var(--sage);
    border-radius: 0 16px 16px 0;
    padding: 1.4rem 1.6rem;
    margin-bottom: 1.4rem;
    box-shadow: 0 8px 24px rgba(0,0,0,0.03);
  }
  .step-num {
    font-family: 'Playfair Display', serif;
    font-size: 0.8rem;
    font-style: italic;
    color: var(--dusty-rose);
    margin-bottom: 0.25rem;
  }
  .step-title { font-weight: 600; font-size: 1rem; color: var(--charcoal); margin-bottom: 0.4rem; }
  .step-body { font-size: 0.92rem; color: var(--soft-brown); line-height: 1.7; }
  .resource-link { color: var(--sage); text-decoration: underline; text-underline-offset: 3px; }
  .resource-link:hover { color: var(--charcoal); }

  /* ── Case Studies ── */
  .cases-section { background: var(--white); }
  .cases-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
    max-width: 1000px;
    margin: 0 auto;
  }
  .case-card {
    background: var(--white);
    border-radius: 18px;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    display: block;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    border: 1px solid rgba(0,0,0,0.05);
    box-shadow: 0 10px 24px rgba(0,0,0,0.03);
  }
  .case-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 18px 36px rgba(0,0,0,0.07);
    color: inherit;
    text-decoration: none;
  }
  .case-thumb {
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    position: relative;
  }
  .case-thumb-1 { background: linear-gradient(135deg, #F0E6E4, #E8DED1); }
  .case-thumb-2 { background: linear-gradient(135deg, #DDE8DA, #EFE7DC); }
  .case-thumb-3 { background: linear-gradient(135deg, #E4DDF0, #DDE8DA); }
  .case-thumb-4 { background: linear-gradient(135deg, #E8DED1, #E4DDF0); }
  .coming-badge {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    background: rgba(255,252,248,0.9);
    color: var(--soft-brown);
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.3rem 0.7rem;
    border-radius: 1rem;
  }
  .case-body { padding: 1.25rem 1.3rem 1.5rem; }
  .case-num {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--sage);
    margin-bottom: 0.3rem;
  }
  .case-name {
    font-family: 'Playfair Display', serif;
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--charcoal);
    margin-bottom: 0.5rem;
  }
  .case-desc { font-size: 0.84rem; color: var(--soft-brown); line-height: 1.6; }

  /* ── Footer ── */
  .port-footer {
    background: var(--charcoal);
    color: rgba(247,244,239,0.75);
    text-align: center;
    padding: 2.5rem 1.5rem;
    font-size: 0.88rem;
  }
  .port-footer strong { color: var(--dusty-rose); }

  /* ── Fade-in ── */
  .fade-in {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .fade-in.visible { opacity: 1; transform: translateY(0); }

  /* ── Responsive ── */
  @media (max-width: 640px) {
    .about-grid { grid-template-columns: 1fr; }
    .port-nav .nav-link { display: none; }
    .port-section { padding: 5rem 1.25rem; }
    .hero { padding: 5rem 1.5rem; }
  }
`;

/* ── Inject global CSS ── */
const styleEl = document.createElement("style");
styleEl.textContent = globalCSS;
document.head.appendChild(styleEl);

/* ── Fade-in hook ── */
function useFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ── Sub-components ── */

function FadeDiv({ className = "", children, ...props }) {
  const ref = useFadeIn();
  return (
    <div ref={ref} className={`fade-in ${className}`} {...props}>
      {children}
    </div>
  );
}

function StepCard({ num, title, body }) {
  return (
    <FadeDiv className="step-card">
      <p className="step-num">{num}</p>
      <p className="step-title">{title}</p>
      <p className="step-body">{body}</p>
    </FadeDiv>
  );
}

function CaseCard({ href, thumbClass, emoji, num, name, desc }) {
  return (
    <FadeDiv>
      <a className="case-card" href={href}>
        <div className={`case-thumb ${thumbClass}`}>
          {emoji}
          <span className="coming-badge">Coming Soon</span>
        </div>
        <div className="case-body">
          <p className="case-num">{num}</p>
          <p className="case-name">{name}</p>
          <p className="case-desc">{desc}</p>
        </div>
      </a>
    </FadeDiv>
  );
}

/* ── Main App ── */
export default function App() {
  return (
    <>
      {/* ── Navbar ── */}
      <Navbar className="port-nav" sticky="top">
        <Navbar.Brand href="#">Kaouther S.</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#how-i-work">Process</Nav.Link>
          <Nav.Link href="#case-studies">Work</Nav.Link>
        </Nav>
      </Navbar>

      {/* ── Hero ── */}
      <div className="hero">
        <p className="hero-eyebrow">UX / UI Design Portfolio</p>
        <h1>
          Hi, I'm <em>Kaouther S.</em>
          <br />I design with intention.
        </h1>
        <p className="hero-sub">
          Third year Computer Science student at the University of Ottawa
          exploring thoughtful, human-centered digital experiences through clean
          and visually balanced interfaces.
        </p>
        <a href="#case-studies" className="btn-hero">
          View My Work
        </a>
      </div>

      {/* ── About ── */}
      <section id="about" className="port-section about-section">
        <div className="about-grid">
          <FadeDiv>
            <div className="avatar-box">✦</div>
          </FadeDiv>

          <FadeDiv>
            <p className="section-label">About Me</p>
            <h2 className="section-title">A little about who I am</h2>
            <div className="divider" />
            <p
              style={{
                fontFamily: "'Lora', serif",
                fontSize: "0.98rem",
                color: "#5B4C42",
                marginBottom: "1.3rem",
              }}
            >
              I'm a Computer Science student at the University of Ottawa
              currently taking{" "}
              <strong>SEG3125 – Analysis and Design of User Interfaces</strong>.
              I'm interested in creating digital experiences that feel calm,
              clear, and genuinely useful.
            </p>
            <p
              style={{
                fontSize: "0.92rem",
                color: "#6A5A4F",
                marginBottom: "1.5rem",
              }}
            >
              Outside of design and development, I enjoy baking, cafés,
              gardening, and exploring creative projects. These interests shape
              the way I approach design — thoughtfully and with attention to
              detail.
            </p>
            <div>
              {[
                "UI Design",
                "HTML / CSS",
                "React",
                "Bootstrap 5",
                "Visual Communication",
                "User Research",
              ].map((t) => (
                <span key={t} className="tag-chip">
                  {t}
                </span>
              ))}
            </div>
          </FadeDiv>
        </div>
      </section>

      {/* ── How I Work ── */}
      <section id="how-i-work" className="port-section work-section">
        <div className="how-inner">
          <p className="section-label">Process</p>
          <h2 className="section-title">How I work</h2>
          <div className="divider" />
          <p
            style={{
              fontSize: "0.95rem",
              color: "#6A5A4F",
              marginBottom: "2rem",
            }}
          >
            I'm currently learning UI/UX design through{" "}
            <a
              href="https://engineering.uottawa.ca/"
              className="resource-link"
              target="_blank"
              rel="noreferrer"
            >
              SEG3125 at the University of Ottawa
            </a>
            . My workflow is inspired by visual communication principles and
            usability concepts explored through course material and resources
            like{" "}
            <a
              href="https://www.nngroup.com/"
              className="resource-link"
              target="_blank"
              rel="noreferrer"
            >
              Nielsen Norman Group (NN/g)
            </a>
            .
          </p>

          <StepCard
            num="Step 01"
            title="Understand the user"
            body="Every design begins with understanding who the interface is for and what problem it should solve."
          />
          <StepCard
            num="Step 02"
            title="Apply visual communication principles"
            body="I use hierarchy, spacing, colour, balance, and typography to create interfaces that feel clear and visually cohesive."
          />
          <StepCard
            num="Step 03"
            title="Prototype and refine"
            body="I build responsive interfaces using HTML, CSS, React, and Bootstrap 5, then improve them through feedback and iteration."
          />
          <StepCard
            num="Step 04"
            title="Reflect and improve"
            body="Each project helps me strengthen both my technical and design skills while developing a more intentional design process."
          />
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section id="case-studies" className="port-section cases-section">
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <p className="section-label">Work</p>
          <h2 className="section-title">Case studies</h2>
          <div className="divider" />
          <p
            style={{
              fontSize: "0.92rem",
              color: "#6A5A4F",
              marginBottom: "2.5rem",
              maxWidth: 580,
            }}
          >
            Throughout the semester, this portfolio will grow with four complete
            design projects and future UI explorations.
          </p>

          <div className="cases-grid">
            <CaseCard
              href="coming-soon.html"
              thumbClass="case-thumb-1"
              emoji="🦷"
              num="Design 01"
              name="Service Website"
              desc="A responsive website designed for a local service business focused on clarity and accessibility."
            />
            <CaseCard
              href="coming-soon.html"
              thumbClass="case-thumb-2"
              emoji="🃏"
              num="Design 02"
              name="Memory Game"
              desc="An interactive memory game exploring playful UI patterns and engaging interactions."
            />
            <CaseCard
              href="coming-soon.html"
              thumbClass="case-thumb-3"
              emoji="🛍️"
              num="Design 03"
              name="E-Commerce Site"
              desc="An online shopping experience designed around readability, trust, and usability."
            />
            <CaseCard
              href="coming-soon.html"
              thumbClass="case-thumb-4"
              emoji="📊"
              num="Design 04"
              name="Analytics Dashboard"
              desc="A dashboard interface focused on information hierarchy and clean data visualization."
            />
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="port-footer">
        <p>
          Designed and developed by <strong>Kaouther S.</strong>
        </p>
        <p style={{ marginTop: "0.5rem", fontSize: "0.8rem", opacity: 0.7 }}>
          SEG3125 • University of Ottawa • 2026
        </p>
      </footer>
    </>
  );
}
