import React from "react";
import { connect } from "react-redux";

import Button from "../Button/Button";

import "./CartDropdown.scss";

const CartDropdown = ({ hidden }) => (
  <div>
    <div className={`cart-dropdown ${hidden ? "hidden" : "shown"}`}>
      <div className="cart-items">{/* {} */}</div>
      <Button>Go To Checkout</Button>
    </div>
  </div>
);
const mapStateToProps = ({ cart: { hidden } }) => ({
  hidden,
});
export default connect(mapStateToProps)(CartDropdown);
