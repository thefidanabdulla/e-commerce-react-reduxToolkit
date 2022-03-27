import React from 'react';
import './cartItem.css';
import {FaTrashAlt} from 'react-icons/fa'
import { deleteFromCart } from '../../features/cartSlice';
import { useDispatch } from 'react-redux';



const CartItem = ({ name, description, id, price, image }) => {

 const dispatch = useDispatch();
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
            <button onClick={() => dispatch(deleteFromCart({id}))} className='app__cartItem-info_total-trash'>
                <FaTrashAlt />
            </button>
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