import React from "react";
import { useEffect, useState } from "react";
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
    name: "GitHub",
    url: "https://github.com/khushalibegde",
    icon: <FaGithub />,
    color: "#000000",
    platform: "github",
    username: "khushalibegde",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/khushalibegde/",
    icon: <SiLeetcode />,
    color: "#FFA116",
    platform: "leetcode",
    username: "khushalibegde",
  },
  {
    name: "Codolio",
    url: "https://codolio.com/profile/khushalibegde",
    icon: <FaCode />,
    color: "#FFA500",
    platform: "codolio",
    username: "khushalibegde",
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/khushalibegde",
    icon: <SiCodechef />,
    color: "#5B4638",
    platform: "codechef",
    username: "khushalibegde",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/khushali-begde-5b19bb276/",
    icon: <FaLinkedin />,
    color: "#0077B5",
    platform: "linkedin",
    username: "khushali-begde-5b19bb276",
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/khushalibegde18",
    icon: <SiHackerrank />,
    color: "#2EC866",
    platform: "hackerrank",
    username: "khushalibegde18",
  },
  {
    name: "InterviewBit",
    url: "https://www.interviewbit.com/profile/khushali-begde/",
    icon: <FaCodepen />,
    color: "#5C6BC0",
    platform: "interviewbit",
    username: "khushali-begde",
  },
  {
    name: "Coding Ninjas",
    url: "https://www.naukri.com/code360/profile/adf8ea62-c296-4df4-a2b7-e027b4b1e752",
    icon: <SiCodingninjas />,
    color: "#F36F21",
    platform: "codingninjas",
    username: "adf8ea62-c296-4df4-a2b7-e027b4b1e752",
  },
];
const fetchStats = async (platform, username) => {
  switch (platform) {
    case "github": {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const data = await res.json();
      return `${data.public_repos} repos | ${data.followers} followers`;
    }
    case "leetcode": {
      const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
      const data = await res.json();
      return `${data.totalSolved} Qs | Rating: ${data.contributionPoints || 'N/A'}`;
    }
    default:
      return "Stats coming soon...";
  }
};


const FlipCard = ({ icon, name, url, color, platform, username }) => {
  const [stats, setStats] = useState("Fetching...");

  useEffect(() => {
    fetchStats(platform, username).then(setStats);
  }, [platform, username]);

  return (
    <div className="flip-card" style={{ borderColor: color }}>
      <div className="flip-inner">
        <div className="flip-front" style={{ backgroundColor: "#fffef9" }}>
          <div className="icon" style={{ color }}>{icon}</div>
          <span className="name">{name}</span>
        </div>
        <div className="flip-back" style={{ backgroundColor: "#fef6e8" }}>
          <span className="stats">{stats}</span>
          <a href={url} target="_blank" rel="noreferrer" className="visit-link">
            🔗 Visit
          </a>
        </div>
      </div>
    </div>
  );
};

const Socials = () => (
  <div style={styles.wrapper}>
    <h1 style={styles.title}>🚀 Socials + Stats</h1>
    <div style={styles.grid}>
      {socialLinks.map((s) => (
        <FlipCard key={s.name} {...s} />
      ))}
    </div>
    <style>{styles.css}</style>
  </div>
);

const styles = {
  wrapper: {
    padding: "25px 6vw",
    fontFamily: "'Poppins', sans-serif",
    textAlign: "center",
  },
  title: {
    fontSize: "2.8rem",
    color: "#f4a300",
    marginBottom: "64px",
    fontWeight: "700",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "55px",
    justifyItems: "center",
  },

  css: `
    .flip-card {
      width: 200px;
      height: 200px;
      perspective: 1000px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .flip-inner {
      width: 100%;
      height: 100%;
      transition: transform 0.7s ease-in-out;
      transform-style: preserve-3d;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .flip-card:hover .flip-inner {
      transform: rotateY(180deg);
    }

    .flip-front,
    .flip-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border: 2px solid;
      border-radius: 16px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
    }

    .flip-back {
      transform: rotateY(180deg);
    }

    .icon { font-size: 2.4rem; margin-bottom: 12px; }
    .name { font-weight: 600; font-size: 1.1rem; color: #333; }
    .stats { font-size: 1rem; font-weight: 600; color: #444; margin-bottom: 12px; text-align: center; }
    .visit-link { font-size: 0.9rem; color: #f4a300; text-decoration: none; font-weight: 600; border-bottom: 1px solid #f4a300; }
    .visit-link:hover { text-shadow: 0 0 4px #f4a30088; }
  `,
};

export default Socials;