import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import angel1 from "../images/angel_demon1.jpg";
import angel2 from "../images/angel_demon2.jpg";
import angel3 from "../images/angel_demon3.jpg";
import angel4 from "../images/angel_demon4.jpg";
import kaushal1 from "../images/kaushal1.jpg";
import kaushal2 from "../images/kaushal2.jpg";
import kaushal3 from "../images/kaushal3.jpg";
import kaushal4 from "../images/kaushal4.jpg";
import kaushal5 from "../images/kaushal5.jpg";
import kaushal6 from "../images/kaushal6.jpg";
import edu1 from "../images/edu1.jpeg";
import edu2 from "../images/edu2.jpeg";
import edu3 from "../images/edu3.jpeg";
import edu4 from "../images/edu4.jpeg";
import edu5 from "../images/edu5.jpeg";
import edu6 from "../images/edu6.jpeg";

const projectData = [
  {
    title: "EduSphere – Interactive EdTech",
    tech: "React Native • Flask • ML",
    desc:
      "EduSphere is a voice‑guided, tap‑to‑learn platform that teaches children with Down syndrome everyday life skills. Modules cover birthday learning, MRP/expiry scanning, greetings & festivals, mood tracking, and traffic‑signal safety, all powered by on‑device ML and an accessible React‑Native UI.",
    images: [edu1, edu2, edu3, edu4, edu5, edu6],
    link : "https://github.com/khushalibegde/EdusphereD"
  },
  {
    title: "Kaushal se Career – Resume & Job Matcher",
    tech: "React • Flask • MongoDB • OCR • NLP",
    desc:
      "End‑to‑end pipeline that OCR‑scans resumes, extracts skills via spaCy, indexes them in MongoDB, and matches candidates to job descriptions using Cosine Similarity – visualised in an elegant React dashboard.",
    images: [kaushal1, kaushal2, kaushal3, kaushal4, kaushal5, kaushal6],
    link : "https://github.com/akshataaak/Kaushal-Se-Career"
  },
  {
    title: "Angel vs Demon – River Puzzle",
    tech: "Vanilla JS • HTML • CSS",
    desc:
      "Gothic re‑skin of the classic river‑crossing logic puzzle. Pure JS state‑machine, pixel art sprites and smooth CSS animations teach constraint reasoning while keeping things spooky‑cute.",
    images: [angel1, angel2, angel3, angel4],
    link : "https://github.com/khushalibegde/Angel_vs_demon"
  },
  {
    title: "WhatsApp Chat Analyzer",
    tech: "React • Flask • NLP",
    desc:
      "Drag‑and‑drop a WhatsApp chat export and instantly get emoji heat‑maps, word‑clouds, author stacks, and trend charts – all parsed and crunched in Flask then served to React charts.",
    images: [
      "https://source.unsplash.com/400x700/?whatsapp",
      "https://source.unsplash.com/400x700/?analytics"
    ],
    link : ""
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <section style={styles.wrapper}>
      <style>{`
        @keyframes fadeInModal {0%{transform:scale(0.92);opacity:0}100%{transform:scale(1);opacity:1}}
        .card {transition:transform .4s ease, box-shadow .4s ease;}
        .card:hover {transform:translateY(-10px) scale(1.05);box-shadow:0 18px 45px rgba(0,0,0,.35);}        
        .card:hover .overlay{background:rgba(0,0,0,.45);}        
      `}</style>

      <div style={styles.header}>
        <h1 style={styles.title}>MY WORK </h1>
        <span style={styles.sub}>PROJECT SHOWCASE ⧉</span>
      </div>

      <div style={styles.scroll}>
        {projectData.map((p, i) => (
          <div
            key={i}
            className="card"
            onClick={() => setSelectedProject(p)}
            style={{ ...styles.card, backgroundImage: `url(${p.images[0]})` }}
          >
            <div className="overlay" style={styles.overlay}>
              <FaPlay style={styles.playIcon} />
            </div>
            <div style={styles.captionWrapper}>
              <div style={styles.caption}>
                <strong style={styles.captionTitle}>{p.title}</strong>
                <span style={styles.captionSub}>{p.tech}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div style={styles.modalBackdrop} onClick={() => setSelectedProject(null)}>
          <div style={{ ...styles.modalContent, animation: "fadeInModal .35s ease" }} onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProject.title}</h2>
            <p><strong>Tech Stack:</strong> {selectedProject.tech}</p>
            <div style={styles.imageGallery}>
              {selectedProject.images.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Slide ${idx + 1}`}
                  style={styles.modalImage}
                  onClick={() => {
                    setLightboxIndex(idx);
                    setLightboxOpen(true);
                  }}
                />
              ))}
            </div>
            <p>{selectedProject.desc}</p>
            {selectedProject.link && (
              <p>

                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.projectLink}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#42000e")}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#5b0015")}
                >
                  View Project
                </a>
              </p>
            )}
          </div>
        </div>
      )}

      {lightboxOpen && selectedProject && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={selectedProject.images.map((img) => ({ src: img }))}
          index={lightboxIndex}
          on={{ view: ({ index }) => setLightboxIndex(index) }}
        />
      )}
    </section>
  );
};

const styles = {
  wrapper: {
    padding: "90px 6vw 120px",
    background: "linear-gradient(135deg,#2a0008 0%,#5b0015 50%,#2a0008 100%)",
    color: "#fff",
    fontFamily: "'Poppins', sans-serif"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    flexWrap: "wrap",
    marginBottom: "60px"
  },
  title: {
    fontSize: "3.4rem",
    letterSpacing: "1px",
    margin: 0,
    fontFamily: "'Playfair Display', serif"
  },
  sub: {
    fontSize: "0.9rem",
    opacity: 0.75,
    letterSpacing: "3px",
    fontWeight: 600
  },
  scroll: { display: "flex", flexWrap: "wrap", gap: "70px 36px" },
  card: {
    flex: "0 0 220px",
    aspectRatio: "9 / 16",
    backgroundSize: "cover",
    backgroundPosition: "center",
    border: "4px solid #ffffffcc",
    borderRadius: "28px",
    position: "relative",
    cursor: "pointer",
    overflow: "hidden"
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,.2)",
    backdropFilter: "blur(2px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "24px",
    transition: "background .35s ease"
  },
  playIcon: { fontSize: "42px", color: "#fff" },
  captionWrapper: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: "8px 12px",
    background: "rgba(0,0,0,0.65)",
    backdropFilter: "blur(4px)",
    borderBottomLeftRadius: "24px",
    borderBottomRightRadius: "24px"
  },
  caption: { textAlign: "center" },
  captionTitle: { display: "block", fontWeight: 600, fontSize: "0.88rem", lineHeight: 1.25 },
  captionSub: { fontSize: "0.72rem", opacity: 0.85 },

  modalBackdrop: {
   position: "fixed",
   inset: 0,
   background: "rgba(0,0,0,0.55)",
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
   zIndex: 1100
 },
   modalContent: {
    background: "linear-gradient(135deg,#f9f4f5 0%, #ffecee 100%)",
    color: "#2a0008",               
    border: "3px solid #5b0015",   
    borderRadius: "20px",
    padding: "36px 34px",
    width: "92%",
    maxWidth: "820px",
    maxHeight: "90vh",
    overflowY: "auto",
    boxShadow: "0 10px 32px rgba(0,0,0,0.28)",
    fontFamily: "'Poppins', sans-serif"
  },
  imageGallery: {
    display: "flex",
    gap: "14px",
    overflowX: "auto",
    margin: "20px 0"
  }, 
  modalImage: {
    height: "260px",
    width: "auto",
    borderRadius: "16px",
    objectFit: "cover",
    flex: "0 0 auto",
    boxShadow: "0 6px 14px rgba(0,0,0,0.22)",
    border: "2px solid #ffffffaa" 
  },
  projectLink: {
    display: "inline-block",
    marginTop: "14px",
    padding: "8px 16px",
    backgroundColor: "#5b0015",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "0.95rem",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
  },  

  projectLinkHover: {
    backgroundColor: "#42000e",
    transform: "scale(1.05)",
  }
};
export default Projects;