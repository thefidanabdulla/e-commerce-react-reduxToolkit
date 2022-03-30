import React from "react";
import { useSelector } from "react-redux";
import Product from "../../components/product/Product";
import "./home.css";

function Home() {
  const products = useSelector((state) => state.products.products);
  return (
    <div className="app__home page__height section__padding">
      <div className="app__home-productsContainer">
        {products.map((item) => (
          <Product
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
