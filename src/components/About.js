import React, { useEffect, useState } from "react";
import profile from "../images/PXL_20240913_0529575281.jpg";

const loadGoogleFonts = () => {
  const fonts = [
    { id: "gf-inter",    href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" },
    { id: "gf-playfair", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap" }
  ];
  fonts.forEach(({ id, href }) => {
    if (!document.getElementById(id)) {
      const l = document.createElement("link");
      l.id = id; l.rel = "stylesheet"; l.href = href;
      document.head.appendChild(l);
    }
  });
};

const HeroSection = () => {
  const [hover, setHover]   = useState(false);
  const [mounted, setMount] = useState(false);

  useEffect(() => { setMount(true); loadGoogleFonts(); }, []);

  return (
    <section style={s.wrapper}>
      <div style={s.content}>
        <div style={{ ...s.left, ...(mounted ? s.fadeInL : {}) }}>
          <p  style={s.greet}>Hey there, I’m</p>

          <h1 style={s.name}>
            <span style={s.gradient}>Khushali Begde</span>
          </h1>

          <h2 style={s.sub}>Designing tech that actually moves people</h2>

          <p style={s.blurb}>
            Full‑stack dev & data whisperer. Turning wild ideas into
            polished, production‑ready reality.
          </p>

          <a
            href="/Khushali_Begde_Resume.pdf" target="_blank" rel="noopener noreferrer"
            style={{ ...s.cta, ...(hover ? s.ctaHover : {}) }}
            onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
          >
            📄 Grab my resume
          </a>
        </div>

        <div style={{ ...s.right, ...(mounted ? s.fadeInR : {}) }}>
          <div style={s.avatarWrap}>
            <span style={s.ring}/>
            <img  src={profile} alt="Khushali Begde" style={s.avatar}/>
            <span style={s.tag}>💫 Tech Dreamer</span>
          </div>
        </div>
      </div>

      <div style={s.blob1}/>
      <div style={s.blob2}/>
    </section>
  );
};

const burgundy     = "#5b0015";
const deepBurgundy = "#2a0008";
const cream        = "#f3ede7";

const s = {
  wrapper:{
    position:"relative", minHeight:"100vh", padding:"0 8vw",
    display:"flex", alignItems:"center", justifyContent:"center",
    overflow:"hidden",
    background:`linear-gradient(120deg,${deepBurgundy},${burgundy})`,
    fontFamily:"'Inter', sans-serif", color:cream
  },

  curveWrap:{
    position:"absolute", top:22, left:"50%", transform:"translateX(-50%)",
    fontFamily:"'Playfair Display', serif", fontSize:18,
    color:"#f9dfc5", letterSpacing:2, fontWeight:700, zIndex:10,
    pointerEvents:"none"
  },

  star:{
    position:"absolute", fontSize:26, animation:"twinkle 3s ease-in-out infinite",
    filter:"drop-shadow(0 0 6px rgba(255,220,170,0.8))", zIndex:5
  },

  content:{ display:"flex", gap:"6vw", flexWrap:"wrap", alignItems:"center",
            maxWidth:1200, zIndex:2 },
  left :{ flex:1, minWidth:280, opacity:0, transform:"translateX(-40px)",
          transition:"opacity .8s, transform .8s",
          marginRight:100 },
  right:{ flex:1, minWidth:280, textAlign:"center", opacity:0,
          transform:"translateX(40px)", transition:"opacity .8s, transform .8s" },
  fadeInL:{ opacity:1, transform:"translateX(0)" },
  fadeInR:{ opacity:1, transform:"translateX(0)" },

  greet :{ fontSize:18, marginBottom:8, color:"#d0bebe", fontWeight:600 },
  gradient:{ background:"linear-gradient(90deg,#f8eadd,#dfcabe)", WebkitBackgroundClip:"text",
             WebkitTextFillColor:"transparent", animation:"shimmer 6s infinite" },
  name  :{ fontFamily:"'Playfair Display', serif", fontSize:64, fontWeight:800,
           margin:"0 0 6px", lineHeight:1.05, letterSpacing:1 },
  sub   :{ fontFamily:"'Playfair Display', serif", fontSize:30, margin:"0 0 22px",
           fontWeight:700, color:cream },
  blurb :{ fontSize:18, lineHeight:1.6, maxWidth:520, marginBottom:38,
           color:"#e0d6d0" },

  cta:{
    display:"inline-block", padding:"14px 38px", borderRadius:40,
    fontSize:18, fontWeight:600, textDecoration:"none", color:deepBurgundy,
    background:"linear-gradient(90deg,#d79a9a,#f7e1e0)",
    boxShadow:"0 8px 20px rgba(202,170,130,0.25)", transition:"all .35s"
  },
  ctaHover:{
    transform:"translateY(-4px) scale(1.05)",
    boxShadow:"0 12px 28px rgba(255,205,205,.45)"
  },

  avatarWrap:{ position:"relative", width:320, height:320, margin:"0 auto" },
  ring: {
  position: "absolute",
  inset: -10,               
  borderRadius: "50%",
  padding: 20,            
  background: "transparent",     
  boxShadow: "0 0 0 3px rgba(255,205,205,.45)" ,   
  zIndex: 1,
  
},

  avatar:{
    position:"relative", zIndex:2, width:"100%", height:"100%",
    borderRadius:"50%", objectFit:"cover",
    boxShadow:"0 15px 35px rgba(0,0,0,.55)"
  },
  tag:{
    position:"absolute", bottom:-24, left:"50%", transform:"translateX(-50%)",
    background:"#1f0a0d", padding:"6px 16px", borderRadius:20,
    fontSize:14, fontWeight:600, color:cream,
    boxShadow:"0 3px 6px rgba(0,0,0,.45)", zIndex:3
  },

  blob1:{
    position:"absolute", width:420, height:420, top:"-130px", left:"-140px",
    background:"radial-gradient(circle,#b41a4c 0%,transparent 70%)",
    filter:"blur(120px)", opacity:.55
  },
  blob2:{
    position:"absolute", width:380, height:380, bottom:"-120px", right:"-110px",
    background:"radial-gradient(circle,#ffb7b7 0%,transparent 70%)",
    filter:"blur(120px)", opacity:.35
  },

};

export default HeroSection;
