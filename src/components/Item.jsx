import styles from '../styles/item.module.css'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const Item = ({ item }) => {
  return (
    <div className={styles.container}>
      <img src={item.pictureUrl} />
      <h2>{item.title}</h2>
      <span>${item.price}</span>
      <NavLink to={`/detail/${item.id}`}>
        <button>Detail</button>
      </NavLink>
    </div>
  )
}

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    pictureUrl: PropTypes.string.isRequired
  }).isRequired
}

export const itemPropTypes = Item.propTypes.item;

export default Item