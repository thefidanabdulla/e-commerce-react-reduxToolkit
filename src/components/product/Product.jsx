import React from 'react';
import { useDispatch } from 'react-redux';
import './product.css';
import { addToCart } from '../../features/cartSlice'; 
const Product = ({ name,  price, image, id, desciption }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () =>{
    dispatch(addToCart({id, productName: name, productDescription: desciption, productPrice: price, productImage: image}));
  }
  return (
    <div key={id} className='app__product'>
     <div className='app__product-image'>
        <img src={image} alt={name + id} />
     </div>
     <div className='app__product-body'>
        <h2>{name}</h2>
        <p>${price}</p>
        <button type='button' onClick={handleAddToCart}>Add</button>
     </div>
     
    </div>
  )
}

export default Product