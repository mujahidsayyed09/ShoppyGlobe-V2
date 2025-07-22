import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//  Add product to cart
export const addProductToCart = createAsyncThunk(
  "cart/addProduct",
  async (product, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:5100/api/cart", {
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
      const res = await axios.put("http://localhost:5100/api/cart", {
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
      await axios.delete(`http://localhost:5100/api/cart/${id}`);
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
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
      })
      .addCase(updateProductQuantity.fulfilled, (state, action) => {
        const existing = state.find(
          (item) => item.productId.toString() === action.payload.productId.toString()
        );
        if (existing) {
          existing.quantity = action.payload.quantity;
        }
      })
      .addCase(removeProductFromCart.fulfilled, (state, action) => {
        return state.filter((item) => item._id !== action.payload);
      });
  },
});

export default cartSlice.reducer;
