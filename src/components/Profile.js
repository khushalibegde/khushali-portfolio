import React from 'react';

const Profile = () => {
  return (
    <>
      <header style={styles.header}>
        <nav style={styles.nav}>
          <a href="#section1" style={styles.link}>Section 1</a>
          <a href="#section2" style={styles.link}>Section 2</a>
          <a href="#section3" style={styles.link}>Section 3</a>
        </nav>
      </header>

      <div id="section1" style={styles.section}>
        <h2>Section 1</h2>
        <p>Content for section 1...</p>
      </div>

      <div id="section2" style={styles.section}>
        <h2>Section 2</h2>
        <p>Content for section 2...</p>
      </div>

      <div id="section3" style={styles.section}>
        <h2>Section 3</h2>
        <p>Content for section 3...</p>
      </div>
    </>
  );
};

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: '#222',
    padding: '10px 0',
    textAlign: 'center',
    zIndex: 1000,
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  section: {
    height: '100vh',
    paddingTop: '60px', // to offset fixed header height
    paddingLeft: '20px',
    paddingRight: '20px',
  },
};

export default  Profile;
