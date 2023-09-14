import '../componentStyles/components/homePageNavigationBar.css';
import logo from "../images/navigationImages/Logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from "react";
import { Link } from 'react-router-dom';


export default function HomePageNavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="header__navigation">
        <span className="header__navigation__left">
          <img src={logo} alt="Xplore Logo" />
          <h3>Xplore</h3>
        </span>
        <span
          className={`header__navigation__right ${isMenuOpen ? "open" : ""}`}
        >
          <AnchorLink
            className="header__naviagation__right__link"
            href="#About"
          >
            About Us
          </AnchorLink>
          <AnchorLink
            className="header__naviagation__right__link"
            href="#why-choose-us"
          >
            Why Choose Us
          </AnchorLink>
          <AnchorLink
            className="header__naviagation__right__link"
            href="#get-in-touch"
          >
            Contact Us
          </AnchorLink>
          <button 
          className={"header__naviagation__right__link--login"}>
            <Link
               className={"header__naviagation__right__link--login"}
            to="/signup">
              Login
            </Link>
          </button>
        </span>
        <div
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={handleMenuToggle}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    </header>
  );
}
