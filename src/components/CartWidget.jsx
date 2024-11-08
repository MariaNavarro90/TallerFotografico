import { useContext } from 'react';
import { Cart } from '../context/CartProvider';
import carrito from '../assets/carrito.svg';
import '../style/cartWidget.css';

const CartWidget = () => {
  const { cart } = useContext(Cart);

  // Calcular el total de productos en el carrito
  const itemCount = cart.reduce((total, product) => total + product.quantity, 0);

  return (
    <div className="cart-widget" onClick={() => window.location.href = '/cart'}>
      <img src={carrito} alt='carrito' style={{width:40}}/>
      <span className="cart-notification">{itemCount}</span>
    </div>
  );
}

export default CartWidget;