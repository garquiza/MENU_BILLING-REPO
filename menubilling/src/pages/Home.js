import React from "react";
import HomeImg from "../images/menu.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="homepage">
      <div className="content">
        <div className="text-content">
          <h1>Menu Billing Web Application</h1>
          <p>Delicious food for every mood</p>
          <Link to="/menu">
            <button>Order Now</button>
          </Link>
        </div>
        <div className="image-content">
          <img src={HomeImg} alt="Description of the image" />
        </div>
      </div>
    </div>
  );
}
