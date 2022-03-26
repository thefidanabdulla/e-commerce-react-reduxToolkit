import React from 'react'
import './cartItem.css'
const CartItem = ({ name, description, id, price, image }) => {
  return (
    <div className='app__cartItem'>
        <div className='app__cartItem-info'>
            <div className='app__cartItem-info_image'>
                <img src={image} alt={name + id} />
            </div>
            <div className='app__cartItem-info_about'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className='app__cartItem-info_total'>
            <h3>{price}</h3>
            <div className='app__cartItem-info_total-count'>
                <button type='button'>+</button>
                <div className='app__cartItem-info_total-count_num'>0</div>
                <button type='button'>-</button>
            </div>
        </div>
    </div>
  )
}

export default CartItem