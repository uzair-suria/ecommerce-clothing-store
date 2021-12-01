import React from "react";

import "./MenuItem.scss";

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`menu-item ${size ? "large" : ""}`}
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
