import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  return (
    <nav className="app__navbar">
      <NavLink to={"/"}>
        <div className="app__navbar-logo">
          <p>STORE</p>
        </div>
      </NavLink>
      <NavLink to={"/cart"}>
        <div className="app__navbar-cart">
          <FaShoppingCart />
          <div className="app__navbar-cart_quantity">
            <p>0</p>
          </div>
        </div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
