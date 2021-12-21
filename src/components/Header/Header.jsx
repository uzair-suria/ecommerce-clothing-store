import "./Header.scss";

import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { getAuth, signOut } from "firebase/auth";
import { connect } from "react-redux";

const Header = ({ currentUser }) => {
  const auth = getAuth();
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

        {currentUser ? (
          <div className="option" onClick={() => signOut(auth)}>
            Logout
          </div>
        ) : (
          <Link to="/login" className="option">
            {"Login"}
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
