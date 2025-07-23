import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../config";

//  Load cart from localStorage
const loadCartFromLocalStorage = () => {
  try {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  } catch (err) {
    console.error("Failed to load cart from localStorage:", err);
    return [];
  }
};

//  Save cart to localStorage
const saveCartToLocalStorage = (cart) => {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (err) {
    console.error("Failed to save cart to localStorage:", err);
  }
};

// Add product to cart
export const addProductToCart = createAsyncThunk(
  "cart/addProduct",
  async (product, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${BASE_URL}/api/cart`, {
        productId: product._id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: 1,
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Update quantity
export const updateProductQuantity = createAsyncThunk(
  "cart/updateQuantity",
  async ({ productId, quantity }, { rejectWithValue }) => {
    try {
      const res = await axios.put(`${BASE_URL}/api/cart`, {
        productId,
        quantity,
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Remove from cart
export const removeProductFromCart = createAsyncThunk(
  "cart/removeProduct",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${BASE_URL}/api/cart/${id}`);
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartFromLocalStorage(), //  load cart on init
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProductToCart.fulfilled, (state, action) => {
        const existing = state.find(
          (item) => item.productId.toString() === action.payload.productId.toString()
        );
        if (existing) {
          existing.quantity = action.payload.quantity;
        } else {
          state.push(action.payload);
        }
        saveCartToLocalStorage(state); //  save after change
      })
      .addCase(updateProductQuantity.fulfilled, (state, action) => {
        const existing = state.find(
          (item) => item.productId.toString() === action.payload.productId.toString()
        );
        if (existing) {
          existing.quantity = action.payload.quantity;
        }
        saveCartToLocalStorage(state); //  save after change
      })
      .addCase(removeProductFromCart.fulfilled, (state, action) => {
        const newState = state.filter((item) => item._id !== action.payload);
        saveCartToLocalStorage(newState); //  save after removal
        return newState;
      });
  },
});

export default cartSlice.reducer;
