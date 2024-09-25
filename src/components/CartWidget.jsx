import React from 'react'
import carrito from '../assets/carrito.svg'
import '../style/cartWidget.css'

const CartWidget = () => {
  const itemCount = 5;
  return (
    <div className="cart-widget">
      <img src={carrito} alt='carrito' style={{width:40}}/>
      <span className="cart-notification">{itemCount}</span>
    </div>
  )
}

export default CartWidget