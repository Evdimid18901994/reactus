import React, { useState } from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import Order from './Order'

const showOrders = (props) => {
  return (
    <div>
      {props.orders.map(el => (
        <Order key = {el.id} item = {el} onDelete = {props.onDelete}/>
      ))}
    </div>
  )
} 

const showNothing = () => {
  return (
    <div>
      <h2>Here is nothing</h2>
    </div>
  )
} 
export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)
  return (
    <header>
    <div className='Logo'>Shop
    <ul className = "nav">
        <li>About us</li>
        <li>Contacts</li>
        <li>Office</li>
        <li><FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className= {`shopcart ${cartOpen && 'active'}`} /></li>
    </ul>

    {cartOpen && (
      
      <div className='basket'>
        {props.orders.length >0 ? showOrders(props) : showNothing()}
      </div>

      //<div className='basket'>
        //{props.orders.map(el => (
        //  <Order key = {el.id} item = {el} />
       // ))}
      //</div>
    )}

    </div>
    <div className = "presentation"></div>
    </header>
  )
}
