import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';

export const Cart = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        // Recuperar el carrito desde localStorage al inicializar
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const [quantity] = useState(0);

    useEffect(() => {
        // Guardar el carrito en localStorage cada vez que cambie
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addCart = (product, productQuantity) => {
        const productInCart = isInCart(product.id);
        console.log(productInCart);
        let cartUpdated = [...cart];
        if (productInCart) {
            cartUpdated = cart.map(cartProduct => {
                if (cartProduct.id === product.id) {
                    return {
                        ...cartProduct,
                        quantity: cartProduct.quantity + productQuantity
                    };
                }
                return cartProduct;
            });
        } else {
            cartUpdated.push({ ...product, quantity: productQuantity });
        }

        setCart(cartUpdated);
    };

    const isInCart = (productId) => {
        return cart.some(cartProduct => cartProduct.id === productId);
    };

    return (
        <Cart.Provider value={{ cart, addCart, quantity }}>
            {children}
        </Cart.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CartProvider;