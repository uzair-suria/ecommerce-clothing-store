import "./CartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shoppingBag.svg";

import React from "react";
import { toggleCartHidden } from "../../redux/cart/cartActions";
import { connect } from "react-redux";

const CartIcon = ({ toggleCartHidden, cartItems }) => {
  const evaluateTotalItems = (cartItems) => {
    if (cartItems.length > 0) {
      return cartItems.reduce((prev, curr) => ({
        quantity: prev.quantity + curr.quantity,
      }));
    } else {
      return { quantity: 0 };
    }
  };
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">
        {evaluateTotalItems(cartItems).quantity}
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems: cartItems });

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
