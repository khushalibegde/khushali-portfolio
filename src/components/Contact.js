import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { SiLeetcode } from 'react-icons/si';
import pfp from '../images/pfp3.png';

const Contact = () => {
    return (
        <div style={styles.cardWrapper}>
            <div style={styles.card}>
                <div style={styles.left}>
                  <div style={styles.qrBox}>
                      <span style={styles.qrImg}><img src={pfp} style={styles.img} /></span>
                  </div>

                  <div style={styles.socials}>
            <a
              href="https://www.linkedin.com/in/khushali-begde-5b19bb276/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.iconLink}
              aria-label="LinkedIn"
            >
              <AiFillLinkedin style={styles.icon} />
            </a>
            <a
              href="https://github.com/khushalibegde"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.iconLink}
              aria-label="GitHub"
            >
              <AiFillGithub style={styles.icon} />
            </a>
            <a
              href="https://leetcode.com/u/khushalibegde/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.iconLink}
              aria-label="LeetCode"
            >
              <SiLeetcode style={styles.icon} />
            </a>
          </div>
                </div>
                <div style={styles.right}>
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
}   

const styles = {
  cardWrapper:{
    background: "linear-gradient(135deg, #fffdf4 0%, #f9f7f1 100%)",
    width: '100%',
    height: '94vh',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  card:{
    width: '45%',
    height: '50%',
    background: '#DCFFFB',
    overflow: 'hidden',
    display: 'flex',
    borderRadius: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
  },
  left: {
    width: '50%',
    height: '100%',
    background: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column', 
    borderRight: '3px solid rgba(122, 113, 27, 0.38)',

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
    color: 'rgba(255, 183, 3, 0.7)',
    cursor: 'pointer',
  },
  iconLink: {
    textDecoration: 'none',
  },
  right: {
    width: '60%',
    height: '100%',
    background: 'rgba(255, 183, 3, 0.7)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    zIndex: 1,
    color: '#ffffff',
    fontFamily: `'Segoe UI', 'Roboto', sans-serif`,
    alignItems: 'flex-start', 
    paddingLeft: '60px',
    paddingRight: '20px',
    
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


};
export default Contact;