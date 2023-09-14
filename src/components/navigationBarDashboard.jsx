import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../componentStyles/components/navigationBarDashboard.css";

import house from "../images/dashboardImages/house.png";
import heart from "../images/dashboardImages/heart.png";
import bell from "../images/dashboardImages/bell.png";
import ring from "../images/dashboardImages/ring.png";

import logo from "../images/globalmages/Logo.png";

export default function NavigationBarDashboard({}) {
  const [showNav, setShowNav] = useState(true);
  const [pushOver, setPushOver] = useState(true);

  function onClickShowNavHandler() {
    setShowNav(!showNav);
  }
  return (
    <aside
      style={{
        transform: showNav ? "translate(-320px, 0px)" : "translate(0px, 0px)",
      }}
      className="navigation_container"
    >
      <img src={logo} alt="Logo" className="navigation_container--icon" />
      <nav className="navigation_container--navbar">
        <button
          style={{ zIndex: showNav ? "0" : "1" }}
          className="navigation_container--navbar--display"
          onClick={() => {
            onClickShowNavHandler();
          }}
        >
          {showNav ? "+" : "-"}
        </button>
        <ul className="navigation_container--navbar--list">
          <li>
            <Link
              to="/dashboardHome"
              className="navigation_container--navbar--list--link"
            >
              <img src={house} alt="House icon" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboardFavorites"
              className="navigation_container--navbar--list--link"
            >
              <img src={heart} alt="heart" />
              <span>Favorites</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboardNotifications"
              className="navigation_container--navbar--list--link"
            >
              <img src={bell} alt="bell" />
              <span>Notifications</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboardSettings"
              className="navigation_container--navbar--list--link"
            >
              <img src={ring} alt="ring" />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
