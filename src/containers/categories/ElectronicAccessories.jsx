import React from 'react'
import { useSelector } from 'react-redux';
import Product from '../../components/product/Product';
import './category.css'
const ElectronicAccessories = () => {
    const electronicData =  useSelector(state => state.products.filteredElectronicAccessories);
    console.log(electronicData);
    return (
        <div className="app__category page__height">
            
            {electronicData.map((item) => (
              <Product
                desciption={item.productDescription}
                image={item.productImage}
                name={item.productName}
                price={item.productPrice}
                id={item.id}
              />
            ))}
        </div>
      );
}


export default ElectronicAccessories;