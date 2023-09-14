import React from "react";
import "../componentStyles/components/dashboardFavorite.css";
import NavigationBarDashboard from "../components/navigationBarDashboard";
import FavoriteCard from "../components/dashboardFavoriteCard";
import photoMap from "../images/dashboardImages/map.png";
import fav1 from "../images/dashboardImages/fav_01.png";
import fav2 from "../images/dashboardImages/fav_02.png";
import fav3 from "../images/dashboardImages/fav_03.png";
import fav4 from "../images/dashboardImages/fav_04.png";
import fav5 from "../images/dashboardImages/fav_05.png";
import fav6 from "../images/dashboardImages/fav_06.png";
import fav7 from "../images/dashboardImages/fav_07.png";
import fav8 from "../images/dashboardImages/fav_08.png";
import avatar from "../images/dashboardImages/Tsering.png";

export default function DashboardFavorites() {
  return (
    <div id="favorite">
      <div id="your-favorite">
        <div className="profile">
          <img src={avatar} className="avatar" alt="profile" />
          <span>Tsering</span>
        </div>
        <h1>Your Favorites</h1>
        <p>A Collection of all your saved spots in one place</p>
        <div id="map">
          <p>display map here</p>
          <img src={photoMap} className="photoMap" alt="a picture of a map" />
        </div>
      </div>

      <div id="places">
        <FavoriteCard src={fav1} />
        <FavoriteCard src={fav2} />
        <FavoriteCard src={fav3} />
        <FavoriteCard src={fav4} />
        <FavoriteCard src={fav5} />
        <FavoriteCard src={fav6} />
        <FavoriteCard src={fav7} />
        <FavoriteCard src={fav8} />
      </div>
      <div id="navigation">
        <NavigationBarDashboard />
      </div>
    </div>
  );
}
