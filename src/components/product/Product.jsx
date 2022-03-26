import React from 'react'
import './product.css'
const Product = ({ name,  price, image, id }) => {
  return (
    <div key={id} className='app__product'>
     <div className='app__product-image'>
        <img src={image} alt={name + id} />
     </div>
     <div className='app__product-body'>
        <h2>{name}</h2>
        <p>{price}</p>
        <button type='button'>Add</button>
     </div>
     
    </div>
  )
}

export default Product