import { useContext } from "react"
import { Cart as CartContext } from "../context/CartProvider"
import CartItem from "./CartItem"
import styles from "../style/cart.module.css"
import { NavLink } from "react-router-dom"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase/config"
import endPurchase from "../services/endPurchase"

const Cart = () => {
    const { cart } = useContext(CartContext)
    console.log({ cart })

    const handlePurchase = () => {
        const order = {
            buyer: {
                name: "Maria",
                lastName: "Navarro",
                email: "marivicn"
            },
            products: cart,
            total: 1,
            timestamp: serverTimestamp()
        }
        ;(async () => {
            try {
                const docRef = await addDoc(collection(db, "orders"), order)
                console.log("Document written with ID: ", docRef.id)
            } catch (error) {
                console.log(error)
            }
        })()
    }

    return (
        <div className={styles.container}>
            {cart.length ? (
                <>
                    {cart.map((cartItem) => {
                        return <CartItem item={cartItem} key={cartItem.id} />
                    })}
                    <button onClick={()=>endPurchase(cart)}>End purchase</button>
                </>
            ) : (
                <>
                    <h1>No hay productos en el cart</h1>
                    <NavLink to={"/"}>Home</NavLink>
                </>
            )}
        </div>
    )
}

export default Cart