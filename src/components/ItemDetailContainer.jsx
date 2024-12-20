import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Cart as CartContext } from "../context/CartProvider";
import endPurchase from "../services/endPurchase";

import { getFirestore, doc, getDoc } from "firebase/firestore";

const fetchItemById = async (itemId) => {
  const db = getFirestore();
  const path = window.location.pathname.includes('products') ? 'products' : 'workshops';
  const docRef = doc(db, path, itemId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    console.log("No such document!");
    return null;
  }
};

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
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
        pictureUrl: item.pictureUrl || 'default-image-url.jpg', 
      };
      addCart(productToAdd, quantity); 
      await new Promise(resolve => setTimeout(resolve, 0)); 
      await endPurchase(cart); 
      navigate('/cart'); 
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
        <p>Loading... </p>
      )}
    </div>
  );
}

export default ItemDetailContainer;