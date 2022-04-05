import React from 'react'
import { useSelector } from 'react-redux';
import Product from '../../components/product/Product';
import './category.css'
const CameraPhotography = () => {
    const cameraData =  useSelector(state => state.products.filteredCameraPhoto);
    return (
        <div className="app__category page__height">
            
            {cameraData.map((item) => (
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

export default CameraPhotography;