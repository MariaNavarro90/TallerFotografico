import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Cart as CartContext } from "../context/CartProvider";
import endPurchase from "../services/endPurchase";

const fetchItemById = async (itemId) => {
  const mockData = {
    1: { id: 1, name: 'Taller Creativo', description: '"Otras Maneras de Mirar" es un taller para conectar con la creatividad a través de la fotografía, la escritura y el collage 🤳📷🎨📝. Todos los materiales están incluidos y al finalizar el taller, cada participante se lleva su collage. Esse y Vero', price: 100, stock: 10 },
    2: { id: 2, name: 'Taller de Edición', description: 'Aprende edición de fotos', price: 150, stock: 5 },
    3: { id: 3, name: 'Cámara', description: 'Cámara profesional', price: 500, stock: 2 },
    4: { id: 4, name: 'Trípode', description: 'Trípode ajustable', price: 75, stock: 15 }
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData[itemId] || null);
    }, 1000);
  });
};

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1); // Estado para la cantidad seleccionada
  const { addCart, cart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const loadItem = async () => {
      const fetchedItem = await fetchItemById(itemId);
      setItem(fetchedItem);
    };

    loadItem();
  }, [itemId]);

  const handleBuyNow = async () => {
    if (item) {
      const productToAdd = {
        ...item,
        title: item.name,
        pictureUrl: item.pictureUrl || 'default-image-url.jpg', // Asegúrate de que pictureUrl esté presente
      };
      addCart(productToAdd, quantity); // Agrega el ítem al carrito con la cantidad seleccionada
      await new Promise(resolve => setTimeout(resolve, 0)); // Espera a que el estado del carrito se actualice
      await endPurchase(cart); // Finaliza la compra con el carrito actualizado
      navigate('/cart'); // Redirige al carrito de compras
    }
  };

  return (
    <div>
      {item ? (
        <div>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <p>Precio: {item.price}</p>
          <p>Stock: {item.stock}</p>
          <input 
            type="number" 
            value={quantity} 
            min="1" 
            max={item.stock} 
            onChange={(e) => setQuantity(Number(e.target.value))} 
          />
          <button onClick={handleBuyNow}>Comprar Ahora</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;