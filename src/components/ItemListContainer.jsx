import { useParams } from 'react-router-dom';
import FetchItems from './FetchItems'; 
import ItemList from './ItemList.jsx';
import {db} from '../firebase/config';
import { collection, getDocs } from "firebase/firestore"; 

export const fetchItemsByCategory = async (categoryId) => {
  // Simula una llamada a una API
  const secciones = {
    'sobre-nosotros': [
      { id: 5, name: 'Nuestra Historia', description: (
        <>
          <p>
            Lienzo y Balcón es un espacio de creación artística fundado por Vero y Geru, dos apasionados por las artes visuales que buscan conectar a las personas con su creatividad a través de experiencias únicas e inspiradoras. En su estudio, organizan talleres donde artistas emergentes y consagrados colaboran para ofrecer diversas formas de expresión, como la fotografía, el collage y la escritura.
          </p>
          <p>
            Uno de sus talleres destacados es Otras Maneras de Mirar, liderado por Verónica y Esse. Este taller invita a los participantes a explorar su creatividad utilizando la fotografía, la escritura y el collage como herramientas para expresar nuevas perspectivas. Todos los materiales están incluidos, y al finalizar, cada participante se lleva su propio collage, fruto de la experiencia compartida en el taller.
          </p>
          <p>
            Además, Lienzo y Balcón organiza salidas fotográficas por la ciudad autónoma de Buenos Aires, donde Vero y Cele guían a los participantes en la exploración de la composición fotográfica. Durante cinco encuentros, los asistentes aprenden y practican técnicas en diferentes barrios, cerrando el taller con una muestra de los proyectos fotográficos creados. Es una experiencia que fusiona aprendizaje y disfrute, culminando con la entrega de una foto que captura la esencia del recorrido.
          </p>
          <p>
            Otro de los eventos más esperados es el Taller Creativo, dirigido por Vero y Esseling. Este taller de medio día en Palermo es una invitación a sumergirse en un viaje de creatividad a través de la fotografía, la escritura y el collage, en un entorno que fomenta la conexión con el arte y la comunidad.
          </p>
          <p>
            En Lienzo y Balcón, cada taller es una puerta a nuevas formas de expresión, donde los participantes no solo crean, sino que también descubren nuevas maneras de mirar el mundo a su alrededor.
          </p>
        </>
      ), image: '../public/balcon.png' },
      { id: 7, name: 'Verónica - Artista Fotográfica', description: (
        <>
          <p>Verónica es una artista fotográfica con una visión única sobre la composición visual. Su trabajo ha sido expuesto en galerías de todo Buenos Aires y ha colaborado en múltiples proyectos creativos.</p>
          <p>En sus talleres, Verónica enseña a capturar la esencia de la vida cotidiana a través de la lente, fusionando técnicas clásicas con enfoques modernos.</p>
        </>
      ), image: '../public/verito.jpg' },
      { id: 8, name: 'Gerardo - Artista Visual', description: (
        <>
          <p>Gerardo es un reconocido artista visual, con un enfoque en el collage y las artes mixtas. Su obra busca integrar diferentes formas de arte, creando composiciones que invitan a la reflexión.</p>
          <p>Junto a Verónica, Gerardo ha desarrollado experiencias artísticas que invitan a explorar la creatividad desde múltiples perspectivas.</p>
        </>
      ), image: '../public/geru.png' },
    ],
    contacto: [
      { id: 6, name: 'Contáctanos', description: (
        <>
          <p>Para cualquier consulta o más información, puedes encontrarnos en nuestras redes sociales:</p>
          <ul>
            <li><a href="https://www.instagram.com/veri.to/" target="_blank" rel="noopener noreferrer">Instagram de Verónica</a></li>
            <li><a href="https://www.instagram.com/malagon.art/" target="_blank" rel="noopener noreferrer">Instagram de Gerardo</a></li>
          </ul>
          <p><strong>ENTRADA:</strong> A la gorra</p>
          <p><strong>PROXIMA FECHA:</strong> Jueves 17/10</p>
          <p><strong>HORARIO:</strong> 20hs a 21.30hs</p>
          <p><strong>LUGAR:</strong> Centro cultural, La Casa del Árbol. Av Córdoba 5217</p>
          <hr />
          <p><strong>Inicia:</strong> Sábado 2/11 🕔 16:00 a 18:00 hs</p>
          <p><strong>Lugar:</strong> 📍 Ciudad de la Paz 3779, Saavedra, CABA</p>
          <p><strong>Valor del Taller:</strong> $50.000</p>
          <p><strong>Descuento:</strong> Si venís con unx amigx</p>
          <p><strong>Cupos limitados:</strong> Podes reservar abonando la mitad del taller</p>
          <hr />
          <p><strong>📅 Sábado 12/10 🕔 10:00 a 12:00 hs</strong></p>
          <p><strong>Lugar:</strong> 📍 Palermo, CABA</p>
          <p><strong>Cupos limitados:</strong> + Info por MD</p>
        </>
      )  },
    ],
  };

  return new Promise((resolve, reject) => {
    if (categoryId) {
      if (categoryId == "talleres") {
        let talleres = [];
        (async () => {
          try {
            const querySnapshot = await getDocs(collection(db, "workshops"));
            querySnapshot.forEach((doc) => {
              console.log(doc.id, " => ", doc.data());
              talleres.push({ id: doc.id, type: 'workshop', ...doc.data() });
            });
            resolve(talleres);
          } catch (error) {
            reject(error);
          }
        })();
      } else if (categoryId == "productos") {
        let productos = [];
        (async () => {
          try {
            const querySnapshot = await getDocs(collection(db, "products"));
            querySnapshot.forEach((doc) => {
              console.log(doc.id, " => ", doc.data());
              productos.push({ id: doc.id, type: 'product', ...doc.data() });
            });
            resolve(productos);
          } catch (error) {
            reject(error);
          }
        })();
      } else if (categoryId != null) {
        resolve(secciones[categoryId] || []);
      }
    } else {
      resolve([...secciones['sobre-nosotros'], ...secciones.contacto]);
    }
  });
  };

const ItemListContainer = () => {
  const { categoryId } = useParams();

  return (
    <div>
      <div style={{ padding: '20px', backgroundColor: '#F5B045', borderRadius: '5px', textAlign: 'center', marginTop: '20px'}}> {/* Fondo amarillo */}
        <h1 style={{ color: '#2D2D2D' }}>{categoryId ? `${categoryId}` : 'Lienzo & Balcon'}</h1> 
      </div>
      <FetchItems
        categoryId={categoryId}
        render={({ items, loading }) => (
          <ItemList items={items} isLoading={loading} />
        )}
      />
    </div>
  );
};



export default ItemListContainer;