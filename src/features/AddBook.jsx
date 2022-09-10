import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addBook, updateBook } from "./BookSlice";

export default function AddBook() {
  const location = useLocation();

  const [title, setTitle] = useState(
    location.state ? location.state.title : ""
  );
  const [author, setAuthor] = useState(
    location.state ? location.state.author : ""
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const noOfBooks = useSelector((state) => state.booksReducer.books.length);

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: location.state ? location.state.id :noOfBooks + 1, title, author };
    location.state ? dispatch(updateBook(book)) : dispatch(addBook(book));
    navigate("/show-book", { replace: true });
  };

  return (
    <div>
    {location.state ? <h2>Update Book</h2> : <h2>Add Book</h2>}
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="author">Author: </label>
          <input
            type="author"
            id="author"
            name="author"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">{ location.state? "Update Book" : "Add Book"}</button>
      </form>
    </div>
  );
}
