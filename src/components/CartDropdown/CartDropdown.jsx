import React from "react";

import Button from "../Button/Button";

import "./CartDropdown.scss";

const CartDropdown = () => (
  <div>
    <div className="cart-dropdown">
      <div className="cart-items">
        {/* {[1, 2, 3, 4, 5].map((num) => (
        <div key={num}>{`Item ${num}`}</div>
      ))} */}
      </div>
      <Button>Go To Checkout</Button>
    </div>
  </div>
);

export default CartDropdown;
