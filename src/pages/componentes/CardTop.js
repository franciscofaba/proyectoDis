import React from 'react';
import Card from 'react-bootstrap/Card';

function CardTop() {
  const tiendaTexto = "¡Bienvenido a nuestra tienda en línea! Descubre una amplia variedad de productos de las mejores marcas";
  const categoriasProductos = ["Electrónicos", "Ropa", "Hogar", "Deportes", "Juguetes"];

  return (
    <>
      <h4 style={{margin:'0px', padding:"1rem", backgroundColor: '#333', color:'white'}}>¡Explora Nuestra Tienda!</h4>
        

        <h6 style={{margin:'0px', padding:"1rem", backgroundColor: 'lightblue'}}> {tiendaTexto}</h6>


      
    
    </>
    

  );
}

export default CardTop;
