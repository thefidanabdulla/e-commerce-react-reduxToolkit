import React from 'react';
import './cartItem.css';
import {FaTrashAlt} from 'react-icons/fa'
import { deleteFromCart, incrementCartItemQuantity, decrementCartItemQuantity } from '../../features/cartSlice';
import { useDispatch} from 'react-redux';



const CartItem = ({ id, paramsCart }) => {
  const dispatch = useDispatch();
  const handleIncrementProductQuantity= () =>{
    dispatch(incrementCartItemQuantity(id))
  }
  const handleDecrementProductQuantity= () =>{
    if(paramsCart.cartQuantity === 1){
        dispatch(deleteFromCart({id}))
    }else{
        dispatch(decrementCartItemQuantity(id))
    }
  } 
  return (

    <div className='app__cartItem'>
        <div className='app__cartItem-info'>
            <div className='app__cartItem-info_image'>
                <img src={paramsCart.productImage} alt={paramsCart.productName} />
            </div>
            <div className='app__cartItem-info_about'>
                <h2>{paramsCart.productName}</h2>
                <p>{paramsCart.productDescription}</p>
                <p>${paramsCart.productPrice}</p>
            </div>
        </div>
        <div className='app__cartItem-info_total'>
            <button onClick={() => dispatch(deleteFromCart({id}))} className='app__cartItem-info_total-trash'>
                <FaTrashAlt />
            </button>
            <h3>${((paramsCart.productPrice * 100) * paramsCart.cartQuantity) / 100}</h3>
            <div className='app__cartItem-info_total-count'>
                <button onClick={handleIncrementProductQuantity} type='button'>+</button>
                <div className='app__cartItem-info_total-count_num'>{paramsCart.cartQuantity}</div>
                <button onClick={handleDecrementProductQuantity}   type='button'>-</button>
            </div>
        </div>
    </div>
  )
}

export default CartItem