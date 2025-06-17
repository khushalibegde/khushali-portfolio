import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaCode,
  FaCodepen,
} from "react-icons/fa";
import {
  SiLeetcode,
  SiCodechef,
  SiHackerrank,
  SiCodingninjas,
} from "react-icons/si";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/khushali-begde-5b19bb276/",
    icon: <FaLinkedin />,
    color: "#0077B5",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/khushalibegde/",
    icon: <SiLeetcode />,
    color: "#FFA116",
  },
  {
    name: "GitHub",
    url: "https://github.com/khushalibegde",
    icon: <FaGithub />,
    color: "#000000",
  },
  {
    name: "Codolio",
    url: "https://codolio.com/profile/khushalibegde",
    icon: <FaCode />,
    color: "#FFA500",
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/khushalibegde",
    icon: <SiCodechef />,
    color: "#5B4638",
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/khushalibegde18",
    icon: <SiHackerrank />,
    color: "#2EC866",
  },
  {
    name: "InterviewBit",
    url: "https://www.interviewbit.com/profile/khushali-begde/",
    icon: <FaCodepen />,
    color: "#5C6BC0",
  },
  {
    name: "Coding Ninjas",
    url: "https://www.naukri.com/code360/profile/adf8ea62-c296-4df4-a2b7-e027b4b1e752",
    icon: <SiCodingninjas />,
    color: "#F36F21",
  },
];

const SocialCard = ({ name, url, icon, color }) => (
  <a
    href={url}
    target="_blank"
    rel="noreferrer"
    className="social-card"
    style={{ borderColor: color }}
  >
    <div className="icon" style={{ color }}>{icon}</div>
    <span className="name">{name}</span>
  </a>
);

const Socials = () => (
  <div style={styles.wrapper}>
    <h1 style={styles.title}>Socials ☍</h1>
    <div style={styles.grid}>
      {socialLinks.map((s) => (
        <SocialCard key={s.name} {...s} />
      ))}
    </div>
    <style>{styles.css}</style>
  </div>
);

const styles = {
  wrapper: {
    padding: "60px 6vw",
    fontFamily: "'Poppins', sans-serif",
    textAlign: "center",
    background: "#5b0015",
    color: "#f3ede7",
    minHeight: "90vh",
  },
  title: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "2.8rem",
    color: "#f3ede7",
    textAlign: "center",
    marginBottom: "70px",
    letterSpacing: "1px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "50px",
    justifyItems: "center",
  },
  css: `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

    .social-card {
      width: 200px;
      height: 200px;
      border: 2.5px solid;
      border-radius: 18px;
      background: linear-gradient(145deg, #fff5f8, #e2e2e2);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
      transition: transform 0.4s ease, box-shadow 0.4s ease, border 0.4s ease;
      font-family: 'Inter', sans-serif;
      opacity: 0;
      transform: translateY(30px);
      animation: fadeInUp 0.8s forwards;
    }

    .social-card:nth-child(1) { animation-delay: 0s; }
    .social-card:nth-child(2) { animation-delay: 0.1s; }
    .social-card:nth-child(3) { animation-delay: 0.2s; }
    .social-card:nth-child(4) { animation-delay: 0.3s; }
    .social-card:nth-child(5) { animation-delay: 0.4s; }
    .social-card:nth-child(6) { animation-delay: 0.5s; }
    .social-card:nth-child(7) { animation-delay: 0.6s; }
    .social-card:nth-child(8) { animation-delay: 0.7s; }

    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .social-card:hover {
      transform: translateY(-10px) scale(1.05);
      box-shadow: 0 16px 36px rgba(0, 0, 0, 0.15);
      border: 2.5px solid rgba(255, 203, 5, 0.6);
    }

    .icon {
      font-size: 2.8rem;
      margin-bottom: 12px;
      transition: transform 0.4s ease, filter 0.4s ease;
      color: inherit;
    }

    .name {
      font-weight: 600;
      font-size: 1.2rem;
      color: #000;
      transition: text-shadow 0.4s ease, filter 0.4s ease;
    }

    .social-card:hover .icon {
      transform: scale(1.15);
    }

    .social-card:hover .name {
      filter: brightness(1.2);
    }
  ` 
};

export default Socials;
