import withLoading from '../hoc/withLoading';
import PropTypes from 'prop-types';

const ItemList = ({ items }) => {
  return (
    <div>
      <ul className='list-container'>
        {items.map(item => (
          <li className="list-item" key={item.id}>
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} />
            <p>{item.description}</p>
            {item.canBuy && (
              <a href={`/${item.type === 'workshop' ? 'workshops' : 'products'}/${item.id}`} className="button-link">Ver mas</a>
            )}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};
ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
};


export default withLoading(ItemList);