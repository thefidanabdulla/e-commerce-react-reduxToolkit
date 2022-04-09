import React from "react";
import { Link } from "react-router-dom";
import "./sideBar.css";
import categoryData from "../../constants/categoryData";
import { nanoid } from "@reduxjs/toolkit";

const SideBar = () => {
  return (
    <div className="app__sideBar">
      <h2>Categories</h2>
      {
        categoryData.map((category) => (
          <Link key={nanoid()} to={`/${category.categoryUrl}`}>
            <button className="app__sideBar-menuItem">{category.categoryName}</button>
          </Link>
        ))
      }      
    </div>
  );
}; 

export default SideBar;
