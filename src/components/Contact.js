import React, { useState, useEffect } from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { SiLeetcode } from 'react-icons/si';
import pfp from '../images/pfp3.png';

const Contact = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={styles.cardWrapper}>
      <h1 style={styles.title}>Contact ✦</h1>
      <div
        style={{
          ...styles.card,
          flexDirection: isMobile ? 'column' : 'row',
          width: isMobile ? '90%' : '45%',
          height: isMobile ? 'auto' : '50vh',
        }}
      >
        <div
          style={{
            ...styles.left,
            width: isMobile ? '100%' : '50%',
            borderRight: isMobile ? 'none' : '3px solid rgba(221, 163, 153, 0.66)',
            borderBottom: isMobile ? '3px solid rgba(221, 163, 153, 0.66)' : 'none',
            padding: isMobile ? '20px 0' : 0,
          }}
        >
          <div style={styles.qrBox}>
            <span style={styles.qrImg}><img src={pfp} alt="Profile" style={styles.img} /></span>
          </div>
          <div style={styles.socials}>
            <a href="https://www.linkedin.com/in/khushali-begde-5b19bb276/" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
              <AiFillLinkedin style={styles.icon} />
            </a>
            <a href="https://github.com/khushalibegde" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
              <AiFillGithub style={styles.icon} />
            </a>
            <a href="https://leetcode.com/u/khushalibegde/" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
              <SiLeetcode style={styles.icon} />
            </a>
          </div>
        </div>

        <div
          style={{
            ...styles.right,
            width: isMobile ? '100%' : '60%',
            padding: isMobile ? '30px 20px' : '0 20px 0 60px',
            alignItems: isMobile ? 'center' : 'flex-start',
            textAlign: isMobile ? 'center' : 'left',
          }}
        >
          <h2 style={styles.name}>Khushali Begde</h2>
          <p style={styles.role}>Creative Technologist</p>
          <p style={styles.info}>📧 khushalibegde18@email.com</p>
          <p style={styles.info}>📱 +91 9730986147</p>
          <p style={styles.info}>📍 Nagpur, Maharashtra, India</p>
          <p style={styles.website}>www.khushuverse.dev</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  cardWrapper: {
    background: "linear-gradient(135deg,rgb(241, 226, 224) 0%, #e2e2e2 100%)",
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '30px',
    gap: '30px',
  },
  card: {
    background: '#DCFFFB',
    overflow: 'hidden',
    display: 'flex',
    borderRadius: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    transition: 'all 0.3s ease-in-out',
  },
  left: {
    background: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  qrBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '30px',
  },
  qrImg: {
    width: '120px',
    height: '120px',
    borderRadius: '5%',
    boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  socials: {
    display: 'flex',
    gap: '30px',
    justifyContent: 'center',
  },
  icon: {
    fontSize: '32px',
    color: '#42000e',
    cursor: 'pointer',
  },
  iconLink: {
    textDecoration: 'none',
  },
  right: {
    background: '#42000e',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#ffffff',
    fontFamily: `'Segoe UI', 'Roboto', sans-serif`,
    zIndex: 1,
  },
  name: {
    fontSize: '2rem',
    marginBottom: '7px',
  },
  role: {
    fontSize: '1.1rem',
    marginBottom: '15px',
  },
  info: {
    fontSize: '0.98rem',
    marginBottom: '6px',
  },
  website: {
    fontSize: '0.95rem',
    marginTop: '15px',
  },
  title: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "2.8rem",
    color: "#42000e",
    textAlign: "center",
    marginBottom: "60px",
    letterSpacing: "1px",
  },
};

export default Contact;
