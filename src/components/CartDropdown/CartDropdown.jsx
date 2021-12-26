import React from "react";
import { connect } from "react-redux";

import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

import "./CartDropdown.scss";

const CartDropdown = ({ hidden, cartItems }) => (
  <div>
    <div className={`cart-dropdown ${hidden ? "hidden" : "shown"}`}>
      <div className="cart-items">
        {cartItems.map((item, i) => (
          <CartItem item={item} key={`cart-item-${i}`} />
        ))}
      </div>
      <Button>Go To Checkout</Button>
    </div>
  </div>
);
const mapStateToProps = ({ cart: { hidden, cartItems } }) => ({
  hidden,
  cartItems,
});
export default connect(mapStateToProps)(CartDropdown);
