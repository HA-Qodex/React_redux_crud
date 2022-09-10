import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    {
      id: 1,
      title: "Love Bangladesh",
      author: "Huzaifa Ahmed",
    },
    {
      id: 2,
      title: "The greatest man of history",
      author: "Huzaifa Ahmed",
    },
  ],
};
const bookSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },

    updateBook: (state, action)=>{
      state.books.filter((book)=> book.id === action.payload.id)[0].title = action.payload.title;
      state.books.filter((book)=> book.id === action.payload.id)[0].author = action.payload.author;
    },

    deleteBook: (state, action)=>{
      state.books = state.books.filter((book)=>book.id !== action.payload)
    }
  },
});

export const { showBooks, addBook, updateBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;
