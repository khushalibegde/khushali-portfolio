import React from "react";

const Header = () => {
  return (
    <>
      <header style={styles.header}>
        <nav style={styles.nav}>
          {[
            "About",
            "Achievement",
            "Skills",
            "Projects",
            "Volunteer",
            "Education",
            "Socials",
            "Contact",
            "Resume",
          ].map((section) => {
            const isResume = section === "Resume";
            return (
              <a
                key={section}
                href={isResume ? "/Khushali_Begde_Resume.pdf" : `#${section.toLowerCase()}`}
                target={isResume ? "_blank" : "_self"}
                rel={isResume ? "noopener noreferrer" : undefined}
                style={styles.link}
                className="nav-link"
              >
                {section}
              </a>
            );
          })}
        </nav>
      </header>

      <div style={{ height: "66px" }}></div>

      <style>
        {`
          .nav-link::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0%;
            height: 2px;
            background-color: #fddbb0;
            transition: width 0.3s ease;
          }

          .nav-link:hover::after {
            width: 100%;
          }

          .nav-link:hover {
            color: #fddbb0;
          }
        `}
      </style>
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
    gap: "30px",
    fontFamily: "'Poppins', sans-serif",
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
};

export default Header;
