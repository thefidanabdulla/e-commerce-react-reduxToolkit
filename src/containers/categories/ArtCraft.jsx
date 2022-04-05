import React from 'react'
import { useSelector } from 'react-redux';
import Product from '../../components/product/Product';
import './category.css'
const ArtCraft = () => {
    const artData =  useSelector(state => state.products.filteredArtCraft);
    return (
        <div className="app__category page__height">
            
            {artData.map((item) => (
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

export default ArtCraft;