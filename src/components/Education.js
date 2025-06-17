import React from "react";

const educationData = [
  {
    emoji: "👩‍💻",
    degree: "Bachelor's in Computer Science",
    institution: "Shri Ramdeobaba College of Engineering and Management",
    duration: "2022 – 2026",
    score: "CGPA: 9.1",
  },
  {
    emoji: "🏫",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "St Xavier’s High School, Nagpur",
    duration: "2022",
    score: "86.6 %",
  },
  {
    emoji: "📘",
    degree: "Secondary School Certificate (SSC)",
    institution: "Sanskar Vidya Sagar, Umred",
    duration: "2020",
    score: "95.8 %",
  },
];

const Education = () => {
  return (
    <div style={styles.wrapper}>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      <h1 style={styles.title}>Academic Journey ↠</h1>
      <style>{`
        @keyframes pulseBorder {
          0%   { box-shadow: 0 0 0 0 var(--accentShadow); }
          70%  { box-shadow: 0 0 0 12px transparent; }
          100% { box-shadow: 0 0 0 0 transparent; }
        }
      `}</style>

      <div style={styles.timelineWrapper}>
        <div style={styles.timelineLine} />

        {educationData.map((item, index) => {
          const isTop = index % 2 === 0;
          return (
            <div
              key={index}
              style={{
                ...styles.timelineItem,
                flexDirection: isTop ? "column-reverse" : "column",
              }}
            >
              <div style={styles.dot}></div>

              <div style={styles.card}>
                <span style={styles.badge}>{item.emoji}</span>

                <h2 style={styles.degree}>{item.degree}</h2>
                <p style={styles.inst}>{item.institution}</p>
                <p style={styles.info}>{item.duration}</p>
                <p style={styles.info}>{item.score}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const styles = {
  wrapper: {
    "--bg": "#f3eee8",          
    "--card": "#ffffff",
    "--text": "#2b2b2b",
    "--accent": "#7c1f2f",     
    "--accentShadow": "rgba(124,31,47,0.35)",

    background: "var(--bg)",
    padding: "70px 6vw 120px",  
    fontFamily: "'Poppins', sans-serif",
    color: "var(--text)",
    position: "relative",
  },

  title: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "2.8rem",
    color: "var(--accent)",
    textAlign: "center",
    marginBottom: "130px",
    letterSpacing: "1px",
  },

  timelineWrapper: {
    display: "flex",
    gap: "140px",
    overflowX: "auto",
    padding: "0 20px",
    position: "relative",
    scrollbarWidth: "thin",
  },
  timelineLine: {
    position: "absolute",
    top: "50%",
    left: 0,
    right: 0,
    height: "4px",
    background: "var(--accent)",
    transform: "translateY(-50%)",
    zIndex: 1,
  },
  timelineItem: {
    display: "flex",
    alignItems: "center",
    minWidth: "320px",
    position: "relative",
    zIndex: 2,               
  },

  dot: {
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    background: "var(--accent)",
    border: "4px solid var(--bg)",
    zIndex: 3,
  },
  card: {
    background: "var(--card)",
    padding: "32px 34px",
    borderRadius: "18px",
    boxShadow: "0 12px 26px rgba(0,0,0,0.06)",
    maxWidth: "340px",
    position: "relative",
  },
  badge: {
    fontSize: "1.7rem",
    background: "var(--bg)",
    borderRadius: "50%",
    padding: "8px 12px",
    position: "absolute",
    top: "-24px",
    left: "-24px",
    animation: "pulseBorder 3s infinite",
  },

  degree: {
    fontSize: "1.15rem",
    fontWeight: 700,
    color: "var(--accent)",
    textAlign: "center",
    margin: "12px 0 10px",
  },
  inst: {
    fontSize: "1rem",
    fontWeight: 500,
    textAlign: "center",
    marginBottom: "10px",
  },
  info: {
    fontSize: "0.9rem",
    textAlign: "center",
    opacity: 0.8,
  },
};

export default Education;
