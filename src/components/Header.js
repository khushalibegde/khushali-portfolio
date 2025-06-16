import React from "react";

const Header = () => {
  return (
    <>
      <header style={styles.header}>
        <nav style={styles.nav}>
          {[
            "About",
            "Skills",
            "Projects",
            "Resume",
            "Socials",
            "Volunteer",
            "Achievement",
            "Education",
            "Contact",
          ].map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              style={styles.link}
            >
              {section}
            </a>
          ))}
        </nav>
      </header>
      <div style={{ height: "66px" }}></div> {/* buffer for fixed header */}
    </>
  );
};

const styles = {
  header: {
    position: "fixed",
    top: 0,
    width: "100%",
    backgroundColor: "#fffef9",
    borderBottom: "1px solid #f4a300",
    padding: "14px 0",
    textAlign: "center",
    zIndex: 1000,
    boxShadow: "0 2px 6px rgba(0,0,0,0.07)",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    fontFamily: "'Poppins', sans-serif",
  },
  link: {
    color: "#f4a300",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "1rem",
    paddingBottom: "4px",
    position: "relative",
  },
};

export default Header;