import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import jcoLogo from "../assets/new_jco_logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo-link">
          <img src={jcoLogo} alt="JCO Logo" className="navbar__logo" />
        </Link>
        <ul className="navbar__menu">
          <li className="navbar__menu-item">
            <NavLink to="/about" className="navbar__menu-link">
              ABOUT
            </NavLink>
          </li>
          <li className="navbar__menu-item">
            <NavLink to="/products" className="navbar__menu-link">
              PRODUCTS
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
