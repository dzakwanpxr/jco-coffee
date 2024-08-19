import { Link } from "react-router-dom";
import { getYear } from "@shared/utils/utils";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
import indonesiaFlag from "@assets/id-flag.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <ul className="footer__list">
            <li className="footer__list-item">
              <Link to="/about" className="footer__link">
                OUR STORY
              </Link>
            </li>
            <li className="footer__list-item">
              <Link to="/products" className="footer__link">
                OUR PRODUCTS
              </Link>
            </li>
            <li className="footer__list-item">
              <Link to="/stores" className="footer__link">
                STORES
              </Link>
            </li>
            <li className="footer__list-item">
              <Link to="/online-order" className="footer__link">
                ONLINE ORDER
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <ul className="footer__list">
            <li className="footer__list-item">
              <Link to="/press" className="footer__link">
                IN THE PRESS
              </Link>
            </li>
            <li className="footer__list-item">
              <Link to="/events" className="footer__link">
                EVENTS
              </Link>
            </li>
            <li className="footer__list-item">
              <Link to="/franchise" className="footer__link">
                FRANCHISE
              </Link>
            </li>
            <li className="footer__list-item">
              <Link to="/contact" className="footer__link">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <p className="footer__title">GET IN TOUCH</p>
          <div className="footer__social-icons">
            <FaFacebookF className="footer__social-icon" />
            <FaInstagram className="footer__social-icon" />
            <FaYoutube className="footer__social-icon" />
          </div>
          <p className="footer__title footer__title--mt">CHANGE REGION</p>
          <div className="footer__language">
            <img
              src={indonesiaFlag}
              alt="Indonesia Flag"
              className="footer__region-icon"
            />
            <p className="footer__region">INDONESIA</p>
          </div>
          <p className="footer__title footer__title--mt">LANGUAGE</p>
          <div className="footer__language">
            <p className="footer__language-option footer__language-option--active">
              EN
            </p>
            <p className="footer__language-option">ID</p>
          </div>
        </div>
        <div className="footer__section-right">
          <p>&copy; {getYear()} JCO DONUT & COFFEE. All Rights Reserved.</p>
          <div>
            <Link to="/terms" className="footer__link">
              Terms of Use
            </Link>
            <span> | </span>
            <Link to="/privacy" className="footer__link">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
