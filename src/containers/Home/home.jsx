import React from "react";
import { useSelector } from "react-redux";
import Product from "../../components/product/Product";
import SideBar from "../../components/sideBar/SideBar";
import "./home.css";

function Home() {
  const products = useSelector((state) => state.products.products);
  console.log(products);
  return (
    <div className="app__home page__height">
      <SideBar products={products} />
      <div className="app__home-productsContainer">
        {products.map((item) => (
          <Product
            key={item.id}
            desciption={item.productDescription}
            image={item.productImage}
            name={item.productName}
            price={item.productPrice}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
