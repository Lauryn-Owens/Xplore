import React from "react";
import cardHeader from "../images/dashboardImages/cardHeader.png";
import "../componentStyles/components/card.css";
export default function card() {
  return (
    <div className="card">
      <div className="card-container">
        <div className="card-image">
          <img src={cardHeader} className="cardImg" alt="card picture" />
          <svg
            id="heart"
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="white"
            class="bi bi-chat-right-heart-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2ZM8 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
          </svg>
        </div>
        <div className="card-body">
          <h3 className="card-title">The Great Wall</h3>
          <p className="card-content">
            Uncover the grandeur of China's Great Wall through its ancient
            paths, rich history, and breathtaking landscapes.
          </p>
        </div>
        <button className="card-btn">View</button>
      </div>
    </div>
  );
}
