import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import Cart from './components/Cart.jsx'; 
import CartProvider from './context/CartProvider';

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="TALLER FOTOGRAFICO" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/workshops/:itemId" element={<ItemDetailContainer />} />
          <Route path="/products/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} /> 
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;