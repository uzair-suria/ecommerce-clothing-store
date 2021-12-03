import "./Header.scss";

import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/Group.svg";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          Shop
        </Link>
        <Link to="/shop" className="option">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
