import React from "react";

const volunteerData = [
  {
    role: "Academic Volunteer",
    org: "Make A Difference (MAD)",
    desc: "Empowered under‑resourced students through weekly academic support, mentorship, and life‑skills sessions.",
  },
  {
    role: "Peer Mentor",
    org: "Academic Support (III‑IV Sem)",
    desc: "Guided first‑year CS students on coursework, time‑management and tech confidence.",
  },
  {
    role: "NSS Volunteer",
    org: "National Service Scheme (2023‑2024)",
    desc: "Contributed to NSS-led activities including village visits, environmental clean-ups, and coordinating an event for children with Down Syndrome.",
  },
];

export default function Volunteer() {
  return (
    <section style={st.page}>
      <h1 style={st.h1}>Volunteering ✦</h1>

      <style>{css}</style>

      <div style={st.timeline}>
        {volunteerData.map((v, i) => {
          const isLeft = i % 2 === 0;
          return (
            <div
              key={v.role}
              className={`row ${isLeft ? "left" : "right"}`}
              style={st.row}
            >
              <span className="curve" />
              <span className="badge">{i + 1}</span>
              <div className="card" style={st.card}>
                <h2>{v.role}</h2>
                <p className="org">{v.org}</p>
                <p>{v.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const cream     = "#fdf8f5";
const burgundy  = "#55001e";
const burgundyD = "#2a0008";
const accent    = "rgba(243,203,0,0.65)";

const st = {
  page: {
    height: "90vh",
    padding: "70px 4vw",
    background: cream,
    fontFamily: "'Inter', sans-serif",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
  },
  h1: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "2.8rem",
    color: "#7c1f2f",
    textAlign: "center",
    marginBottom: "70px",
    letterSpacing: "1px",
    textShadow: "0 0 8px #ffdee3",
  },
  timeline: {
    position: "relative",
    width: "100%",
    height: "100%",
    maxWidth: 900,
    margin: "0 auto",
  },
  row: {
    position: "relative",
    marginBottom: 40,
  },
  card: {
    background: "#fff",
    border: `2px solid ${burgundy}`,
    borderRadius: 14,
    padding: "14px 18px",
    boxShadow: "0 6px 16px rgba(0,0,0,.06)",
    maxWidth: 300,
  },
};

const css = `
.timeline::before {
  content: "";
  position: absolute;
  top: 0;
  left: calc(50% - 2px);
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, ${burgundy} 0%, ${burgundyD} 100%);
  animation: pulseLine 6s linear infinite;
}
@keyframes pulseLine {
  0%,100% { box-shadow: 0 0 12px ${accent}; }
  50%     { box-shadow: 0 0 4px ${accent}; }
}

.row.left  .card { margin-right: auto; transform: translateX(-40px); }
.row.right .card { margin-left:  auto; transform: translateX( 40px); }
.row.left  .badge { left: calc(50% - 10px); }
.row.right .badge { left: calc(50% - 10px); }
.row.left  .curve { left: 50%; transform: translateX(-50%) rotate(45deg); }
.row.right .curve { left: 50%; transform: translateX(-50%) rotate(-45deg); }
.row { opacity: 0; }
.row:nth-child(1){ animation: fadeSlide 0.8s 0.1s forwards; }
.row:nth-child(2){ animation: fadeSlide 0.8s 0.35s forwards; }
.row:nth-child(3){ animation: fadeSlide 0.8s 0.6s forwards; }
@keyframes fadeSlide{
  to { opacity:1; transform:translateY(0); }
}

.curve{
  position:absolute;
  top:0; height:100%;
  width:4px; background:${burgundy};
  border-radius:2px;
}
.badge{
  position:absolute;
  background:${burgundy};
  border:3px solid ${cream};
  border-radius:50%;
  color:${cream};
  font-weight:600;
  display:flex; align-items:center; justify-content:center;
  box-shadow:0 0 0 5px ${accent};
  animation:pulseDot 2.6s infinite;
  width: 18px;
  height: 18px;
  font-size: 0.75rem;
  top: -6px;
}
@keyframes pulseDot{
  0%,100%{box-shadow:0 0 0 4px ${accent};}
  50%   {box-shadow:0 0 0 8px transparent;}
}

.card h2 {
  margin: 0 0 2px;
  font-size: 0.95rem;
  color: ${burgundy};
}
.card .org {
  font-weight: 600;
  margin-bottom: 4px;
  font-size: 0.85rem;
  color: ${burgundy};
}
.card p {
  margin: 0;
  font-size: 0.8rem;
  line-height: 1.35;
}
.row.left .card { margin-right: auto; transform: translateX(-30px); }
.row.right .card { margin-left: auto; transform: translateX(30px); }

@media(max-width:650px){
  .row.left  .card,
  .row.right .card{
    margin:0 auto !important;
    transform:none !important;
  }
  .curve{ display:none; }
}
`;
