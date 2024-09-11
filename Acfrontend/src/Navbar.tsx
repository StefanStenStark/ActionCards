import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/ActionCards">ActionCards</Link>

      <Link to="/Deck">Deck</Link>

      <Link to="/">Home</Link>
    </nav>
  );
}
