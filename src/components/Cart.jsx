import { useContext, useState, useEffect } from "react";
import { Cart as CartContext } from "../context/CartProvider";
import CartItem from "./CartItem";
import styles from "../style/cart.module.css";
import { NavLink } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import endPurchase from "../services/endPurchase";

const Cart = () => {
    const { cart, clearCart } = useContext(CartContext);
    const [isPurchasing, setIsPurchasing] = useState(false);
    const [purchaseComplete, setPurchaseComplete] = useState(false);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const calculateTotal = () => {
            const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
            setTotal(totalAmount);
        };

        calculateTotal();
    }, [cart]);

    const handlePurchase = () => {
        setIsPurchasing(true);
        const order = {
            buyer: {
                name: "Maria",
                lastName: "Navarro",
                email: "marivicn"
            },
            products: cart,
            total: total,
            timestamp: serverTimestamp()
        };
        (async () => {
            try {
                const docRef = await addDoc(collection(db, "orders"), order);
                console.log("Document written with ID: ", docRef.id);
                setPurchaseComplete(true);
                clearCart();
            } catch (error) {
                console.log(error);
            } finally {
                setIsPurchasing(false);
            }
        })();
    };

    return (
        <div className={styles.container}>
            {isPurchasing ? (
                <h1>Procesando la compra...</h1>
            ) : purchaseComplete ? (
                <h1>Compra realizada con éxito! Gracias por tu compra!.</h1>
            ) : cart.length ? (
                <>
                    {cart.map((cartItem) => {
                        return <CartItem item={cartItem} key={cartItem.id} />;
                    })}
                    <h2>Total: ${total}</h2>
                    <button onClick={handlePurchase}>Finalizar compra</button>
                </>
            ) : (
                <>
                    <h1>No hay productos en el carrito</h1>
                    <NavLink to={"/"}>Home</NavLink>
                </>
            )}
        </div>
    );
};

export default Cart;