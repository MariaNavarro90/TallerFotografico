# Taller Fotográfico

Este proyecto es una aplicación web para la gestión de un taller fotográfico, desarrollada con React y Vite.

## Estructura de Carpetas

### `src/components`
- **Cart.jsx**: Componente para mostrar el carrito de compras.
- **CartItem.jsx**: Componente para mostrar un ítem en el carrito.
- **CartWidget.jsx**: Componente para mostrar el ícono del carrito con la cantidad de ítems.
- **FetchItems.jsx**: Componente para obtener ítems por categoría.
- **Footer.jsx**: Componente para el pie de página.
- **Item.jsx**: Componente para mostrar un ítem individual.
- **ItemCount.jsx**: Componente para manejar la cantidad de ítems.
- **ItemDetailContainer.jsx**: Contenedor para mostrar los detalles de un ítem.
- **ItemList.jsx**: Componente para mostrar una lista de ítems.
- **ItemListContainer.jsx**: Contenedor para manejar la lógica de la lista de ítems.
- **NavBar.jsx**: Componente para la barra de navegación.

### `src/context`
- **CartProvider.jsx**: Proveedor de contexto para manejar el estado del carrito.

### `src/firebase`
- **config.js**: Configuración de Firebase.

### `src/hoc`
- **withLoading.jsx**: HOC para manejar el estado de carga.

### `src/hooks`
- **useFetchItemsByCategory.jsx**: Hook para obtener ítems por categoría.

### `src/services`
- **endPurchase.js**: Servicio para finalizar la compra.
- **saveJSONToFirebase.js**: Servicio para guardar datos JSON en Firebase.

### `src/style`
- **cart.module.css**: Estilos para el carrito.
- **cartItem.module.css**: Estilos para los ítems del carrito.
- **CartWidget.css**: Estilos para el widget del carrito.
- **footer.module.css**: Estilos para el pie de página.
- **item.module.css**: Estilos para los ítems.
- **itemcount.module.css**: Estilos para el contador de ítems.
- **NavBar.css**: Estilos para la barra de navegación.


## Instalación

1. Clona el repositorio:
   sh
   git clone https://github.com/tu-usuario/taller-fotografico.git

2. cd taller-fotografico
3. npm install

## Configuración de Firebase

En el archivo `src/firebase/config.js`, se encuentra la configuración de Firebase:

```javascript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "AUTH_DOMAIN",
  projectId: "PROJECT_ID",
  storageBucket: "STORAGE_BUCKET",
  messagingSenderId: "MESSAGING_SENDER_ID",
  appId: "APP_ID",
  measurementId: "MEASUREMENT_ID",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

