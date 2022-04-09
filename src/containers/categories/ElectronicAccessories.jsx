import React from "react";
import { useSelector } from "react-redux";
import Product from "../../components/product/Product";
import SideBar from "../../components/sideBar/SideBar";
import "./category.css";
const ElectronicAccessories = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <div className="app__category page__height">
      <SideBar products={products} />
      <div className="app__category-productsContainer">
        {products.map(
          (item) =>
            item.category === "electronic_accessories" && (
              <Product
                desciption={item.productDescription}
                image={item.productImage}
                name={item.productName}
                price={item.productPrice}
                id={item.id}
              />
            )
        )}
      </div>
    </div>
  );
};

export default ElectronicAccessories;
