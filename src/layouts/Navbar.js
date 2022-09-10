import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="show-book" className="nav-link">
        Show Book
      </NavLink>
      <NavLink to="add-book" className="nav-link">
        Add Book
      </NavLink>
    </nav>
  );
}
