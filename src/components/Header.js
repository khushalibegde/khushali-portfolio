import React, { useState, useEffect } from "react";

const sections = [
  "About",
  "Achievement",
  "Skills",
  "Projects",
  "Volunteer",
  "Education",
  "Socials",
  "Contact",
  "Resume",
];

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <header style={styles.header}>
        {isMobile && (
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            style={styles.menuBtn}
          >
            {menuOpen ? "×" : "☰"}
          </button>
        )}

        <nav
          style={{
            ...styles.nav,
            flexDirection: isMobile ? "column" : "row",
            position: isMobile ? "fixed" : "static",
            top: isMobile && menuOpen ? 66 : -1000,
            left: 0,
            width: "100%",
            backgroundColor: "#2a0008",
            padding: isMobile ? "24px 0" : 0,
            gap: isMobile ? "24px" : "30px",
            transition: "top 0.3s ease-in-out",
          }}
        >
          {sections.map((section) => {
            const isResume = section === "Resume";
            return (
              <a
                key={section}
                href={isResume ? "/Khushali_Begde_Resume.pdf" : `#${section.toLowerCase()}`}
                target={isResume ? "_blank" : "_self"}
                rel={isResume ? "noopener noreferrer" : undefined}
                style={styles.link}
                onClick={handleLinkClick}
              >
                {section}
              </a>
            );
          })}
        </nav>
      </header>

      <div style={{ height: "66px" }} />
    </>
  );
};

const styles = {
  header: {
    position: "fixed",
    top: 0,
    width: "100%",
    backgroundColor: "#2a0008",
    borderBottom: "1px solid #5b0015",
    padding: "19px 0",
    textAlign: "center",
    zIndex: 1000,
    boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Poppins', sans-serif",
    zIndex: 999,
  },
  link: {
    color: "#fddbb0",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "1rem",
    paddingBottom: "4px",
    position: "relative",
    transition: "color 0.3s ease",
  },
  menuBtn: {
    background: "none",
    border: "none",
    color: "#fddbb0",
    fontSize: "1.6rem",
    cursor: "pointer",
    position: "absolute",
    left: "20px",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 1100,
  },
};

export default Header;
