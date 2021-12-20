import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./MenuItem.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  // console.log(linkUrl);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location.pathname);
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`menu-item ${size}`}
      onClick={() => navigate(`${location.pathname}${linkUrl}`)}
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
