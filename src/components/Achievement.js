import React, { useEffect } from "react";
import innovenza from "../images/innovenza.jpg";
import hacksphere from "../images/hacksphere.jpg";

const useInterFont = () => {
  useEffect(() => {
    if (!document.getElementById("gf‑inter")) {
      const l = document.createElement("link");
      l.id = "gf‑inter";
      l.rel = "stylesheet";
      l.href =
        "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap";
      document.head.appendChild(l);
    }
  }, []);
};

const DATA = [
  {
    title: "1st Place – Innovanza’25",
    subtitle: "Computer Science Dept. • RBU Nagpur",
    date: "Mar 2025",
    bullets: [
      "Presented ‘Edusphere’ – an inclusive learning platform bridging tech education for engineering students and neurodiverse children.",
      "Focused on real-world accessibility, interactive learning, and voice-guided modules.",
      "Awarded for innovation, practical impact, and social relevance among 30+ teams.",
    ],
    mentor: "Team: Devanshi Lalwani, Jatin Jasrotia, Madhav Gupta    Mentor: Dr. Urmila Shrawankar",
    img: innovenza,
    linkedin: "https://www.linkedin.com/posts/khushali-begde-5b19bb276_innovanza25-edusphere-teamvictory-activity-7328837010670989312-16XC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENslJUBQMihoDJtdauKT5H2pMrZfwRj-mk",
  },
  {
    title: "2nd Place – Hacksphere 2.0",
    subtitle: "National Hackathon • CodeBreakers Club",
    date: "Feb 2025",
    bullets: [
      "Developed and presented Edusphere at an 8-hour hackathon challenge with real-time implementation.",
      "Modules demoed: Number Recognition, MRP Detection, Tech Navigation & Mood Tracker.",
      "Stood out for functionality, design polish, and user-centric approach.",
    ],
    mentor: "Team: Devanshi Lalwani, Jatin Jasrotia, Madhav Gupta    Mentor: Dr. Urmila Shrawankar",
    img: hacksphere,
    linkedin: "https://www.linkedin.com/posts/khushali-begde-5b19bb276_hackathon-hacksphere2-edusphere-activity-7310340332884262912-4Ep9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENslJUBQMihoDJtdauKT5H2pMrZfwRj-mk",
  },
];

export default function Achievements() {
  useInterFont();

  return (
    <section style={st.page}>
      <style>{`
  .flip-card {
    perspective: 1200px;
    transition: transform 0.3s ease;
  }

  .flip-card:hover {
    transform: scale(1.1);
  }

  .flip-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s ease;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-inner,
  .flip-card:focus-within .flip-inner {
    transform: rotateY(180deg);
  }

  .face {
    position: absolute;
    inset: 0;
    backface-visibility: hidden;
    border-radius: 14px;
    overflow: hidden;
  }

  .front {
    display: flex;
    flex-direction: column;
    background: #fff;
    color: #000;
    border: 2px solid #55001e;
    transition: box-shadow 0.4s ease;
  }

  .flip-card:hover .front {
    box-shadow: 0 0 12px #55001e99;
  }

  .front img {
    width: 100%;
    height: 72%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  .flip-card:hover img {
    transform: scale(1.02);
  }

  .frontText {
    padding: 1rem;
    background: #55001e;
    color: #fff;
  }

  .frontText h2 {
    font-size: 1.15rem;
    margin: 0;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  .frontText p {
    margin: 4px 0;
    font-size: 0.88rem;
    opacity: 0.95;
  }

  .back {
    transform: rotateY(180deg);
    padding: 1.8rem 2rem;
    background:linear-gradient(145deg,#5b0015 0%,#42000e 60%,#2a0008 100%);;
    border-radius: 14px;
    color: #fff;
    border: 3px solid rgba(243, 203, 0, 0.65);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    position: relative;
  }

  .back ul {
    padding-left: 1.2rem;
    line-height: 1.6;
    margin: 0;
    list-style:none;
  }

  .linkedin-link {
    position: absolute;
    bottom: 16px;
    right: 16px;
    background: #fff;
    color: rgb(1, 102, 156);
    border-radius: 100%;
    padding: 0.4rem;
    font-size: 1.1rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    text-decoration: none;
  }

  .linkedin-link:hover {
    background:rgb(1, 102, 156);
    color: #fff;
  }

  @media(max-width:680px){
    .card-wrapper {
      flex-direction: column;
    }
  }
`}</style>



      <h1 style={st.h1}>Achievements ✺</h1>

      <div style={st.wrapper}>
        {DATA.map((card) => (
          <div key={card.title} className="flip-card" style={st.card}>
            <div className="flip-inner">
              <div className="face front" style={st.front}>
                <img src={card.img} alt={card.title} style={st.frontImg} />
                <div style={st.frontText}>
                  <h2 style={st.title}>{card.title}</h2>
                  <p style={st.subtitle}>{card.subtitle}</p>
                  <p style={st.date}>{card.date}</p>
                </div>
              </div>

              
              <div className="face back">
                <h3 style={st.backTitle}>{card.title}</h3>
                <p style={st.backSub}>{card.subtitle}</p>
                <ul>
                  {card.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <p style={st.mentor}>{card.mentor}</p>
                <a
                  className="linkedin-link"
                  href={card.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View LinkedIn Post"
                  onClick={(e) => e.stopPropagation()}
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const light = "#fdf8f5";
const burgundy = "#421017";

const st = {
  page: {
    minHeight: "100vh",
    padding: "60px 6vw",
    background: light,
    fontFamily: "'Inter',sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 40,
  },
  h1: {
    fontSize: "2.4rem",
    fontWeight: 600,
    color: burgundy,
  },
  wrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
    gap: 40,
    width: "100%",
    maxWidth: 1000,
  },
  card: {
    width: "100%",
    height: 380,
    borderRadius: 14,
    boxShadow: "0 10px 24px rgba(0,0,0,.1)",
  },
  title: { fontSize: "1.25rem", fontWeight: 600, margin: 0 },
  subtitle: { fontSize: ".9rem", margin: ".3rem 0 .1rem" },
  date: { fontSize: ".8rem", opacity: 0.9 },
  backTitle: { fontSize: "1.1rem", fontWeight: 600, margin: 0 },
  backSub: { fontSize: ".9rem", margin: ".2rem 0 .6rem", color: "#CBC4BC" },
  mentor: { fontSize: ".88rem", fontWeight: 500, marginTop: ".8rem" },
  
  front: {
      display: "flex",
      flexDirection: "column",
      background: "#fff",
      color: "#000",
      borderRadius: 14,
      overflow: "hidden",
      border : "2px solid #55001e",
    },

    frontImg: {
      width: "100%",
      height: "72%",
      objectFit: "cover",
    },

    frontText: {
      padding: "1rem",
      background: "#55001e",
      color: "#fff",
    },

};

