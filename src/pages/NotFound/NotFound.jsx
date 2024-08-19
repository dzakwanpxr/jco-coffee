import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <h2 className="not-found__subtitle">Page Not Found</h2>
      <p className="not-found__description">
        The page you are looking for doesn&apos;t exist
      </p>
      <Link to="/" className="not-found__button">
        GO HOME
      </Link>
    </div>
  );
}
