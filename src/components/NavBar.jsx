import { Link } from 'react-router-dom';
import '../style/navbar.css';
import logo from '../assets/logo.svg';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">
          <img src={logo} alt="Home" style={{ height: '40px' }} />
        </Link>
      </li>
      <li>
        <Link to="/category/talleres">Talleres</Link>
      </li>
      <li>
        <Link to="/category/sobre-nosotros">Sobre Nosotros</Link>
      </li>
      <li>
        <Link to="/category/productos">Productos</Link>
      </li>
      <li>
        <Link to="/category/contacto">Contacto</Link>
      </li>
      <CartWidget />
    </ul>
  );
}

export default NavBar;