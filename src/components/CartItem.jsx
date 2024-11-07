import PropTypes from 'prop-types';

const CartItem = ({ item }) => {
  return (
    <div>
      <img src={item.pictureUrl || 'default-image-url.jpg'} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Precio: {item.price}</p>
      <p>Cantidad: {item.quantity}</p>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    pictureUrl: PropTypes.string.isRequired, // Asegúrate de que pictureUrl esté presente
  }).isRequired,
};

export default CartItem;