// Education.js – Khushu🩷 style: 🎓 WOWified timeline edition
// Hatke timeline layout + custom emoji badges for each education level

import React from "react";

const educationData = [
  {
    emoji: "👩‍💻",
    degree: "Bachelor's Degree in Computer Science",
    institution: "Shri Ramdeobaba College of Engineering and Management",
    duration: "2022 – 2026",
    score: "CGPA: 9.1",
  },
  {
    emoji: "🏫",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "St Xavier’s High School, Nagpur",
    duration: "2020 – 2022",
    score: "Percentage: 86.6%",
  },
  {
    emoji: "📘",
    degree: "Secondary School Certificate (SSC)",
    institution: "Sanskar Vidya Sagar, Umred",
    duration: "2018 – 2020",
    score: "Percentage: 95.8%",
  },
];

const Education = () => {
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>🎓 Academic Journey</h1>

      <style>{`
        @keyframes pulseBorder {
          0% { box-shadow: 0 0 0 0 rgba(244, 163, 0, 0.4); }
          70% { box-shadow: 0 0 0 12px rgba(244, 163, 0, 0); }
          100% { box-shadow: 0 0 0 0 rgba(244, 163, 0, 0); }
        }
      `}</style>

      <div style={styles.timelineWrapper}>
        {educationData.map((item, index) => (
          <div key={index} style={styles.timelineItem}>
            <div style={styles.badge}>{item.emoji}</div>
            <div style={styles.card}>
              <h2 style={styles.degree}>{item.degree}</h2>
              <p style={styles.inst}>{item.institution}</p>
              <p style={styles.info}>{item.duration}</p>
              <p style={styles.info}>{item.score}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: "25px 6vw",
    fontFamily: "'Poppins', sans-serif",
    color: "#3a2e00",
    background: "transparent",
  },
  title: {
    fontSize: "2.8rem",
    color: "#f4a300",
    marginBottom: "60px",
    textAlign: "center",
    letterSpacing: ".5px",
  },
  timelineWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    position: "relative",
    borderLeft: "4px solid #f4a300",
    paddingLeft: "30px",
  },
  timelineItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "16px",
    position: "relative"
  },
  badge: {
    fontSize: "1.5rem",
    background: "#fffef9",
    borderRadius: "50%",
    padding: "6px 10px",
    marginLeft: "-38px",
    animation: "pulseBorder 2s infinite"
  },
  card: {
    background: "#fffef9",
    padding: "20px 24px",
    borderRadius: "12px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
    maxWidth: "700px"
  },
  degree: {
    fontSize: "1.2rem",
    fontWeight: 700,
    color: "#4a3900",
    marginBottom: "6px"
  },
  inst: {
    fontSize: "1rem",
    fontWeight: 500,
    color: "#333",
    marginBottom: "6px"
  },
  info: {
    fontSize: ".95rem",
    color: "#555"
  }
};

export default Education;