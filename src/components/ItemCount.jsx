import { useState } from "react"
import PropTypes from 'prop-types';
import styles from "../styles/itemcount.module.css"

const ItemCount = ({addCart}) => {
    const [count] = useState(0)
    return (
        <div className={styles.container}>
            <div className={styles.operators}>
                <button>-</button>
                <span>{count}</span>
                <button>+</button>
            </div>
            <button className={styles.addcart} onClick={()=>addCart(count)}>Agregar al carrito</button>
        </div>
    )
}
ItemCount.propTypes = {
    addCart: PropTypes.func.isRequired,
};

export default ItemCount