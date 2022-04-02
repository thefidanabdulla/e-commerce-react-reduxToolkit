import React from "react";
import { Link } from "react-router-dom";
import "./sideBar.css";

const SideBar = () => {
  return (
    <div className="app__sideBar">
      <h2>Categories</h2>
      <Link to={"/computer_accessories"}>
        <p className="app__sideBar-menuItem">Computer & Accessories</p>
      </Link>
      <Link to={"/camera_photography"}>
        <p className="app__sideBar-menuItem">Camera & Photography</p>
      </Link>
      <Link to={"/telephone_tablet"}>
        <p className="app__sideBar-menuItem">Telephone & Tablet</p>
      </Link>
      <Link to={"/smartHome"}>
        <p className="app__sideBar-menuItem">Smart Home</p>
      </Link>
      <Link to={"/art_craft"}>
        <p className="app__sideBar-menuItem">Art & Craft</p>
      </Link>
    </div>
  );
};

export default SideBar;
