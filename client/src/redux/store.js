import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// Save cart to localStorage on change
const saveCart = (state) => {
  try {
    const serialized = JSON.stringify(state.cart);
    localStorage.setItem("cart", serialized);
  } catch (error) {
    console.error("Error saving cart to localStorage", error);
  }
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

store.subscribe(() => saveCart(store.getState()));

export default store;
