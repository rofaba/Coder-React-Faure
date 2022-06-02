import React from 'react'
import logo from '../images/logo-small.jpeg'
import '../styles/navbar.css'

function NavBar() {

  return (
    <div className = 'contenedor' >
      
      <img class='logo' src={logo} alt='logo app' />
       <span> La Tienda sin Nombre </span>
       {/* No tengo definida la tienda aún ni sus categorías */}
      
      <div class = 'barra-navegacion' >
        <a href = 'https://es.stackoverflow.com/' target ='_blank'> Inicio </a> 
        <a href = 'https://www.codewars.com/' target ='_blank' > Nosotros </a> 
        <a href = 'https://www.algoexpert.io/product' target ='_blank' > Productos </a>
        <a href = 'https://developer.mozilla.org/es/' target ='_blank' > Contacto </a> 
      </div >    
    
    </div>
  );
}
export default NavBar;