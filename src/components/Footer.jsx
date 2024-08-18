import { Link } from "react-router-dom";
import { getYear } from "../utils/utils";
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
          <h5 className="footer__title">GET IN TOUCH</h5>
          <p className="footer__text">customercare@jcodonuts.com</p>
        </div>
        <div className="footer__section">
          <h5 className="footer__title">FOLLOW US</h5>
          {/* Add social media icons here */}
          <div className="footer__social-icons">
            {/* Example: */}
            {/* <a href="https://facebook.com/jcodonuts" target="_blank" rel="noopener noreferrer" className="footer__social-link">
            <i className="fab fa-facebook"></i>
          </a> */}
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__copyright">
          &copy; {getYear()} J.CO DONUTS & COFFEE. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
