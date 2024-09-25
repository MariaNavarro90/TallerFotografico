import React from 'react'
import '../style/navbar.css'
import logo from '../assets/logo.svg'
import CartWidget from './cartWidget'


const NavBar = () => {
  return (
    <ul>
        <li>
            <a class="active" href="#home">
            <img src={logo} alt="Home" style={{ height: '40px' }} /> </a>
        </li>
        <li>
            <a href="#about">Talleres</a>
        </li>
        <li>
            <a href="#about">Sobre Nosotros</a>
        </li>
        <li>
            <a href="#services">Productos</a>
        </li>
        <li>
            <a href="#contact">Contacto</a>
        </li>
        <CartWidget />
    </ul>
  )
}

export default NavBar