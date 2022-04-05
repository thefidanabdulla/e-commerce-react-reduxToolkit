import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { filteredComp, filteredCamera, filteredArt, filteredSmartHome, filteredTell, filteredElectronic } from "../../features/productSlice";
import "./sideBar.css";

const SideBar = () => {

  const dispatch = useDispatch();

  return (
    <div className="app__sideBar">
      <h2>Categories</h2>
      <Link to={"/camera_photography"}>
        <button onClick={() => dispatch(filteredCamera())} className="app__sideBar-menuItem">Camera & Photography</button>
      </Link>
      <Link to={"/computer_accessories"}>
        <button onClick={() => dispatch(filteredComp())} className="app__sideBar-menuItem">Computer & Accessories</button>
      </Link>
      <Link to={"/electronic__accessories"}>
        <button onClick={() => dispatch(filteredElectronic())} className="app__sideBar-menuItem">Electronic Accessories</button>
      </Link>
      <Link to={"/telephone_tablet"}>
        <button onClick={() => dispatch(filteredTell())} className="app__sideBar-menuItem">Telephone & Tablet</button>
      </Link>
      <Link to={"/smartHome"}>
        <button onClick={() => dispatch(filteredSmartHome())} className="app__sideBar-menuItem">Smart Home</button>
      </Link>
      <Link to={"/art_craft"}>
        <button onClick={() => dispatch(filteredArt())} className="app__sideBar-menuItem">Art & Craft</button>
      </Link>
      
    </div>
  );
}; 

export default SideBar;
