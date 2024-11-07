import {
    addDoc,
    collection,
    doc,
    runTransaction,
    serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase/config";

const endPurchase = async (cart) => {
    const productsToUpdateRefs = [];

    // Crear un array de referencias a todos los productos en el carrito.
    for (const cartProduct of cart) {
        const productRef = doc(db, "products", String(cartProduct.id)); // Asegurarse de que el id sea una cadena de texto
        productsToUpdateRefs.push({ ref: productRef, id: String(cartProduct.id) }); // Asegurarse de que el id sea una cadena de texto
    }

    // Crear una referencia para la colección de órdenes
    const orderCollectionRef = collection(db, "orders");

    try {
        const order = await runTransaction(db, async (transaction) => {
            // Crear un array auxiliar para los stocks a ser actualizados
            const stocksUpdated = [];

            // 1. Verificar el stock válido de cada producto en el carrito
            for (const productToUpdate of productsToUpdateRefs) {
                const { ref } = productToUpdate;
                const product = await transaction.get(ref);
                if (!product.exists()) {
                    throw new Error("¡El producto no existe!");
                }
                console.log({ data: { ...product.data() } });

                // Producto en el carrito para conocer la cantidad en el carrito
                const productInCart = cart.find(
                    (cartElement) => String(cartElement.id) === product.id
                );

                console.log({ productInCart });

                // Verificar el stock resultante
                const resultStock =
                    product.data().stock - productInCart.quantity;

                if (resultStock < 0)
                    throw new Error(`Producto: ${
                        product.data().title
                    }, no tiene suficiente stock. Stock: ${
                        product.data().stock
                    }, cantidad añadida al carrito: ${productInCart.quantity}.`);

                // Añadir el stock resultante al array auxiliar
                stocksUpdated.push({
                    productId: product.id,
                    stock: resultStock,
                });
            }

            // 2. Actualizar el stock de los productos (las operaciones de escritura deben ser después de las de lectura)
            for (const product of productsToUpdateRefs) {
                const { ref, id } = product;
                const stockUpdated = stocksUpdated.find(
                    (stock) => stock.productId === id
                );
                console.log({ stockUpdated });
                transaction.update(ref, {
                    stock: stockUpdated.stock,
                });
            }

            // 3. Crear la orden, no se da id
            const order = {
                products: [...cart],
                user: {
                    name: "Maria Victoria"
                },
                timestamp: serverTimestamp()
            };
            console.log(order);
            await addDoc(orderCollectionRef, order);
            return order;
        });

        console.log("¡Orden creada exitosamente!", order);
    } catch (e) {
        // Cualquier error en el bloque try será capturado
        console.error("Transacción fallida: ", e);
    }
};

export default endPurchase;