import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Foodie 🍔</h2>
      <ul style={styles.menu}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    backgroundColor: "#ff6347",
    color: "white"
  },
  logo: { margin: 0 },
  menu: { listStyle: "none", display: "flex", gap: "20px", margin: 0 }
};

export default Navbar;
