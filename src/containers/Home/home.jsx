import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../../components/product/Product';
import './home.css'

function Home () {
  
   const products = useSelector(state => state.products.products);
  return (
    <div className='app__home page__height section__padding'>
      {
        products.map((item) => (
          <Product desciption={item.desciption} image={item.productImage} name={item.productName} price={item.productPrice} id={item.id}/>
        ))
      }
    </div>
  )
}

export default Home;