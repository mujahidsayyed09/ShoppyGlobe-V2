import { createSlice } from "@reduxjs/toolkit";
import { Books } from "../utils/mockData";

const booksSlice = createSlice({
  name: "books",
  initialState: Books,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
