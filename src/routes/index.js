import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBook from "../features/AddBook";
import BooksView from "../features/BooksView";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Error from "../pages/Error";
import Home from "../pages/Home";

export default function Index() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="show-book" element={<BooksView />} />
          <Route path="add-book" element={<AddBook />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <footer>
      <Footer/>
      </footer>
    </BrowserRouter>
  );
}
