import React from "react";
import { useSelector } from "react-redux";
import "./cart.css";
import CartItem from "../../components/cartItem/CartItem";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";


const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const handleTotalPrice = (paramsData) =>{
    let total = 0;
    paramsData.forEach(item => {
      total += (((item.productPrice * 100) * item.cartQuantity) / 100)
    })
    return total
  }
  return (
    <div className="app__cart page__height section__padding">
      {cartItems.cartData.length === 0 ? (
        <div className="app__cart-empty">
          <h2>Your cart is currently empty</h2>
          <Link to={"/"}>
            <button className="app__cart-empty_button">
              {" "}
              <FaLongArrowAltLeft /> Start to shopping
            </button>
          </Link>
        </div>
      ) : (
        <div>
          {cartItems.cartData.map((paramsCart) => (
            <CartItem id={paramsCart.id} paramsCart={paramsCart} />
          ))}
          <div className="app__cart-total">
            <h3>TOTAL:</h3>
            <div className="app__cart-total-amount">
              ${handleTotalPrice(cartItems.cartData)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
