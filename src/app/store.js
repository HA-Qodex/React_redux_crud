import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/BookSlice";

export const store = configureStore({
  reducer: {
    booksReducer: booksReducer,
  },
});
