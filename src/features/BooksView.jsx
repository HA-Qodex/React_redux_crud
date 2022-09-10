import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook, showBooks } from "./BookSlice";

export default function BooksView() {
  const books = useSelector((state) => state.booksReducer.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showBooks());
  }, [0]);

  return (
    <div>
      <h2>List of books</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        {books &&
          books.map((book) => {
            return (
              <tbody key={book.id}>
                <tr>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>
                  <Link to={"/add-book"} state={book}>
                  <button>Edit</button>
                  </Link>
                    
                    <button
                      onClick={() => {
                        dispatch(deleteBook(book.id));
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </div>
  );
}
