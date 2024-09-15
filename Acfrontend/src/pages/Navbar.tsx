import { Link } from "react-router-dom";
import "../styling/Navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/ActionCards">Action</Link>

      <Link to="/Deck">Deck</Link>

      <Link to="/Profile">Profile</Link>
    </nav>
  );
}
