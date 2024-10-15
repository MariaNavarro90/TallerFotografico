import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const fetchItemById = async (itemId) => {
  // Simula una llamada a una API
  const mockData = {
    1: { id: 1, name: 'Taller Creativo', description: '"Otras Maneras de Mirar" es un taller para conectar con la creatividad a través de la fotografía, la escritura y el collage 🤳📷🎨📝. Todos los materiales están incluidos y al finalizar el taller, cada participante se lleva su collage. Esse y Vero', price: 100, stock: 10 },
    2: { id: 2, name: 'Taller de Edición', description: 'Aprende edición de fotos', price: 150, stock: 5 },
    3: { id: 3, name: 'Nuestra Historia', description: 'Conoce nuestra historia' },
    4: { id: 4, name: 'Cámara', description: 'Cámara profesional', price: 500, stock: 2 },
    5: { id: 5, name: 'Trípode', description: 'Trípode ajustable', price: 75, stock: 15 },
    6: { id: 6, name: 'Contáctanos', description: 'Envíanos un mensaje', price: 0, stock: 0 },
    7: { id: 7, name: 'Verónica - Artista Fotográfica', description: 'Verónica es una artista fotográfica con una visión única sobre la composición visual. Su trabajo ha sido expuesto en galerías de todo Buenos Aires y ha colaborado en múltiples proyectos creativos. En sus talleres, Verónica enseña a capturar la esencia de la vida cotidiana a través de la lente, fusionando técnicas clásicas con enfoques modernos.' },
    8: { id: 8, name: 'Gerardo - Artista Visual', description: 'Gerardo es un reconocido artista visual, con un enfoque en el collage y las artes mixtas. Su obra busca integrar diferentes formas de arte, creando composiciones que invitan a la reflexión. Junto a Verónica, Gerardo ha desarrollado experiencias artísticas que invitan a explorar la creatividad desde múltiples perspectivas.' },
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

  useEffect(() => {
    const loadItem = async () => {
      const fetchedItem = await fetchItemById(itemId);
      setItem(fetchedItem);
    };

    loadItem();
  }, [itemId]);

  return (
    <div>
      {item ? (
        <div>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;