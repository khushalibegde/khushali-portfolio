// Volunteer.js – Khushu🩷 style: ✨ WOW ✨ edition
// Hatke layout + animated left border + GenZ glow

import React from "react";

const volunteerData = [
  {
    role: "Academic Volunteer",
    org: "Make A Difference (MAD)",
    desc: "Empowered underprivileged students through weekly academic support, mentorship, and life-skills sessions. Focused on building strong learning foundations.",
  },
  {
    role: "NSS Volunteer",
    org: "National Service Scheme (2023–2024)",
    desc: "Actively contributed to social initiatives, community cleanups, and awareness drives.",
  },
  {
    role: "Peer Mentor",
    org: "Academic Support (III–IV Sem)",
    desc: "Mentored first-year CS students in coursework, time management, and adapting to college life. Fostered a supportive peer-learning environment.",
  },
];

const Volunteer = () => {
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>🤝 Volunteering Vibes</h1>

      <style>{`
        @keyframes slideBorder {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>

      <div style={styles.timelineWrapper}>
        {volunteerData.map((item, index) => (
          <div key={index} style={styles.timelineItem}>
            <div style={styles.badge}></div>
            <div style={styles.card}>
              <h2 style={styles.role}>{item.role}</h2>
              <p style={styles.org}>{item.org}</p>
              <p style={styles.desc}>{item.desc}</p>
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
    animation: "slideBorder 4s infinite linear",
    backgroundSize: "200% 200%"
  },
  timelineItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "16px",
    position: "relative"
  },
  badge: {
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    background: "#f4a300",
    border: "2px solid white",
    boxShadow: "0 0 0 4px #f4a30044",
    marginLeft: "-38px",
    marginTop: "12px"
  },
  card: {
    background: "#fffef9",
    padding: "20px 24px",
    borderRadius: "12px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
    maxWidth: "700px"
  },
  role: {
    fontSize: "1.25rem",
    fontWeight: 700,
    color: "#4a3900",
    marginBottom: "4px"
  },
  org: {
    fontSize: "1rem",
    fontWeight: 500,
    color: "#333",
    marginBottom: "8px"
  },
  desc: {
    fontSize: ".95rem",
    color: "#555"
  }
};

export default Volunteer;
