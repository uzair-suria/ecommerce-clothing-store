import { addCartItem } from "./cart.utils";
import { cartActionTypes } from "./cartActionTypes";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addCartItem(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
