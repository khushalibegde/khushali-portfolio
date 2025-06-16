import React, { useEffect } from "react";

const injectFonts = () => {
  const fonts = [
    { id: "gf-inter", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" },
    { id: "gf-playfair", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&display=swap" }
  ];
  fonts.forEach(({ id, href }) => {
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    }
  });
};

const skillsData = {
  "Programming Languages": ["Python", "Java", "C", "C++", "R"],
  "Web Development": ["HTML", "CSS", "JavaScript", "ReactJS", "Flask", "React Native"],
  "Database Management": ["SQL (Oracle)", "MongoDB"],
  "Machine Learning": ["Fundamentals", "Model Building", "Training & Eval"],
  "Data Science": ["Pandas", "NumPy", "Matplotlib", "Seaborn", "spaCy"],
  "Version Control": ["Git", "GitHub"],
  "AR Development": ["Unity", "Vuforia"],
  "Soft Skills": [
    "Time Management", "Detail‑Oriented", "Adaptability", "Problem Solving",
    "Teamwork", "Communication", "Organization", "Critical Thinking", "Collaboration"
  ]
};

export default function SkillsPage() {
  useEffect(injectFonts, []);

  return (
    <section style={st.page}>
      <style>{`
        @keyframes lift { from {opacity:0; transform:translateY(40px);} to {opacity:1; transform:translateY(0);} }
        @media(max-width:850px){
  .card{flex-direction:column;}
}

.vtitle {
  writing-mode:horizontal-tb !important;
  transform: none !important;
  white-space: normal;
  padding: 16px;
  font-size: 1rem !important;
  text-align: left !important;
}

        .skill:hover{background:rgba(255,255,255,.08);}
      `}</style>

      <h1 style={st.heading}>⚡ Skill Arsenal</h1>

      {Object.entries(skillsData).map(([cat, skills], i) => (
        <div key={cat} className="card" style={{ ...st.card, animation: `lift .6s ease ${i * 0.07}s both` }}>
          <div className="vtitle" style={st.leftBar}>
            {cat}
          </div>
          <div style={st.box}>
            {skills.map((skill) => (
              <span className="skill" key={skill} style={st.skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

const burgundy = "#42000e";
const burgundyDark = "#2a0008";
const outline = "rgba(255,255,255,0.18)";
const cream = "#f5ece7";

const st = {
  page: {
    minHeight: "100vh",
    padding: "60px 5vw",
    background: "linear-gradient(120deg,#e2e2e2 0%,#d6d6d6 100%)",
    fontFamily: "'Inter',sans-serif",
    display: "flex",
    flexDirection: "column",
    gap: 36,
    alignItems: "center"
  },
  heading: {
    fontSize: "2.9rem",
    fontWeight: 700,
    color: burgundyDark,
    fontFamily: "'Playfair Display', serif",
    marginBottom: "20px",
    textShadow: "0 1px 6px rgba(0,0,0,.2)",
    letterSpacing: 1
  },
  card: {
    width: "100%",
    maxWidth: 1150,
    display: "flex",
    background: burgundy,
    borderRadius: 14,
    boxShadow: "0 18px 34px rgba(0,0,0,.25)",
    overflow: "hidden"
  },
  leftBar: {
  background: burgundyDark,
  color: cream,
  fontFamily: "'Playfair Display', serif",
  fontSize: "1.05rem",
  fontWeight: 600,
  letterSpacing: 1.1,
  textAlign: "left",
  padding: "16px",
  minWidth: 220,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  whiteSpace: "normal",
  lineHeight: 1.3
}
,
  box: {
    flex: 1,
    border: `1px solid ${outline}`,
    margin: "16px",
    padding: "16px 20px",
    borderRadius: 8,
    display: "flex",
    flexWrap: "wrap",
    gap: 12
    // 🔥 no fixed height, this grows as per content
  },
  skill: {
    padding: "8px 16px",
    borderRadius: 999,
    border: `1px solid ${outline}`,
    color: cream,
    fontSize: ".9rem",
    fontWeight: 500,
    transition: "all .25s ease",
    cursor: "default"
  }
};
