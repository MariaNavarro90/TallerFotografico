import PropTypes from 'prop-types';
import styles from '../style/cart.module.css';

const CartItem = ({ item }) => {
  return (
    <div className={styles.cartItem}>
      <img className={styles.image} src={item.image || 'default-image-url.jpg'} alt={item.title} />
      <h2 className={styles.title}>{item.title}</h2>
      <p className={styles.description}>{item.description}</p>
      <p className={styles.price}>Precio: {item.price}</p>
      <p className={styles.quantity}>Cantidad: {item.quantity}</p>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired, 
  }).isRequired,
};

export default CartItem;