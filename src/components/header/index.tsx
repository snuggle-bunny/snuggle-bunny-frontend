import "./Header.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderLogo from "assets/home/home-logo.png";
import { Link } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <div className="header-top">
        <img src={HeaderLogo} className="header-top-logo" alt="" />
        <div className="header-top-icons">
          <FontAwesomeIcon icon={faCartShopping} size="xl" />
        </div>
      </div>
      <div className="header-menu">
        <div className="header-menu-links">
          <div className="header-link">
            <Link to="/collection">Collection</Link>
          </div>
          <div className="header-link">
            <Link to="/our-story">Our Story</Link>
          </div>
          <div className="header-link">
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
