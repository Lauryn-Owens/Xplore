import React from "react";
import "../componentStyles/components/dashboardFavoriteCard.css";

export default function DashboardFavoriteCard(props) {
  return (
    <div id="card-Container">
      <div className="card-image">
        <img src={props.src} className="fav-img" alt="Restaurant" />
      </div>
      <h3 className="card-title">Indigo Restaurant</h3>
      <span className="distance">12 km away</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="45"
        fill="white"
        className="bi bi-chat-right-heart-fill fav-svg"
        viewBox="0 0 16 16"
      >
        <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2ZM8 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
      </svg>
    </div>
  );
}
