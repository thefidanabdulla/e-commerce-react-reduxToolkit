import React from 'react'
import { useSelector } from 'react-redux';
import './cart.css';
import CartItem from '../../components/cartItem/CartItem';
const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartData) 
  console.log(cartItems);
  return (
    <div className='app__cart page__height section__padding'>
      {
        cartItems.map((paramsCart) => (
          <CartItem image={paramsCart.productImage} name={paramsCart.productName} description={paramsCart.productDescription} id={paramsCart.id} price={paramsCart.productPrice} />
        ))
      }
      <div className='app__cart-total'>
        <h3>TOTAL:</h3>
        <div className='app__cart-total-amount'>
          $1999.99
        </div>
      </div>
    </div>
  )
}

export default Cart;