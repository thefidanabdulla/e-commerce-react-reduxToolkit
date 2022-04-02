import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
//import { filteredComputer } from '../../features/productSlice';
//import Product from '../../components/product/Product';
import './category.css'
const ComputerAccessories = () => {
    //const disptach = useDispatch();
    const allData =  useSelector(state => state.products);
    const filteredData = allData.filter((item) => item.cate);
    console.log(allData);
    return (
        <div className="app__category page__height">
            
            {/* {products.map((item) => (
              <Product
                desciption={item.productDescription}
                image={item.productImage}
                name={item.productName}
                price={item.productPrice}
                id={item.id}
              />
            ))} */}
        </div>
      );
}

export default ComputerAccessories