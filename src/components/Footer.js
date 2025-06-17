const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2025 Khushali Begde &#60;3 - Built with coffee, code, and curiosity.</p>
    </footer>
  );
};

const styles = {
  footer: {
    background: "linear-gradient(135deg,#2a0008 0%,#5b0015 50%,#2a0008 100%)",
    padding: "24px 0",
    textAlign: "center",
    fontFamily: "'Poppins', sans-serif"
  },
  text: {
    color: "#ffffffb2", 
    fontSize: "0.85rem",
    letterSpacing: "0.5px",
    margin: 0
  }
};

export default Footer;
