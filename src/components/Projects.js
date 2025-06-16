// Projects.js – Khushu🩷 Edition: 🧠🔥 Projects That Slay
// Animated cards + glass blur + glowy headers = GenZ Tech Diva vibes

import React from "react";

const projectData = [
  {
    title: "Edusphere – Down Syndrome EdTech App",
    tech: "React Native + Flask + ML",
    desc: "An accessible learning app designed for children with Down syndrome. Includes voice-guided games, visual cues, TTS, and activity tracking.",
    link: "https://github.com/yourusername/edusphere"
  },
  {
    title: "WhatsApp Chat Analyzer",
    tech: "React + Flask + Streamlit",
    desc: "Analyzes group chats to show message stats, emoji usage, word clouds, and heatmaps. Built for fun + NLP learning.",
    link: "https://github.com/yourusername/whatsapp-chat-analyzer"
  },
  {
    title: "Blockchain-based Luxury Goods Authenticator",
    tech: "Ethereum + Solidity + IPFS",
    desc: "A proof-of-authenticity solution for high-end goods. Uses smart contracts and immutable metadata storage to prevent counterfeiting.",
    link: "https://github.com/yourusername/blockchain-authenticity"
  },
  {
    title: "Traffic Signal Trainer for Kids",
    tech: "React Native + Lottie + Voice",
    desc: "Gamified app for teaching traffic rules to children using animation, visual actions, and interactive feedback.",
    link: "https://github.com/yourusername/traffic-signal-kids"
  }
];

const Projects = () => {
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>💻 My Creations</h1>
      <div style={styles.grid}>
        {projectData.map((proj, i) => (
          <a
            key={i}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.card}
          >
            <h2 style={styles.cardTitle}>{proj.title}</h2>
            <p style={styles.cardTech}>{proj.tech}</p>
            <p style={styles.cardDesc}>{proj.desc}</p>
            <span style={styles.link}>🔗 View Code</span>
          </a>
        ))}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: "80px 6vw",
    fontFamily: "'Poppins', sans-serif",
    color: "#3a2e00",
  },
  title: {
    fontSize: "2.8rem",
    color: "#f4a300",
    marginBottom: "60px",
    textAlign: "center",
    letterSpacing: ".5px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "36px",
  },
  card: {
    background: "rgba(255, 254, 249, 0.9)",
    borderRadius: "16px",
    padding: "24px 26px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
    backdropFilter: "blur(4px)",
    textDecoration: "none",
    color: "inherit",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  cardTitle: {
    fontSize: "1.25rem",
    fontWeight: 700,
    marginBottom: "10px",
    color: "#4a3900"
  },
  cardTech: {
    fontSize: "0.95rem",
    color: "#7a5e00",
    fontWeight: 500,
    marginBottom: "12px"
  },
  cardDesc: {
    fontSize: "0.95rem",
    color: "#444",
    flex: 1,
    marginBottom: "16px"
  },
  link: {
    fontWeight: 600,
    fontSize: "0.95rem",
    color: "#f4a300",
    alignSelf: "flex-start",
    borderBottom: "1px solid #f4a300"
  }
};

export default Projects;
