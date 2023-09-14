import React from "react";
import NavigationBarDashboard from "../components/navigationBarDashboard";
import "../pageStyles/dashboardHome.css";
import Card from "../components/dashboardCard";
import avatar from "../images/dashboardImages/Tsering.png";

export default function DashboardHome() {
  return (
    <div id="dashboardHome">
      <div id="discover">
        <div className="discover-content">
          <p className="welcome-traveler">Hey there, Traveler!</p>
          <h1>Discover your perfect experience</h1>
          <input type="text" placeholder="Restaurants" className="input-form" />
          <button className="btn-search" type="submit">
            Search
          </button>
        </div>
        <div className="profile">
          <img src={avatar} className="avatar" alt="profile" />
          <span>Tsering</span>
        </div>
      </div>
      <div id="restaurant-nearby">
        <div className="restaurant-nearby-content">
          <h2>Restaurants Near You</h2>
          <div className="cards-container">
            {/* Cards with restaurant information */}
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <div id="popular-restaurant">
        <div className="popular-restaurant-nearby-content">
          <h2>Popular Restaurants Near You</h2>
          <div className="cards-container">
            {/* Cards with popular restaurant information */}
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <div id="navigationBar">
        <NavigationBarDashboard />
      </div>
    </div>
  );
}
