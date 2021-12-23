import "./Header.scss";

import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { getAuth, signOut } from "firebase/auth";
import { connect } from "react-redux";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";

const Header = ({ currentUser, hidden }) => {
  const auth = getAuth();
  return (
    <div>
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
          <CartIcon />
        </div>
      </div>
      {!hidden ? <CartDropdown /> : null}
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
