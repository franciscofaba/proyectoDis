import React from 'react';
import Card from 'react-bootstrap/Card';

function CardTop() {
  const tiendaTexto = "¡Bienvenido a nuestra tienda en línea! Descubre una amplia variedad de productos de las mejores marcas";
  const categoriasProductos = ["Electrónicos", "Ropa", "Hogar", "Deportes", "Juguetes"];

  return (
    <Card>
      <Card.Header>¡Explora Nuestra Tienda!</Card.Header>
      <Card.Body>
        
        <Card.Text>
          {tiendaTexto}
        </Card.Text>
        <Card.Text>
     
          <ul>
            {categoriasProductos.map((categoria, index) => (
              <li key={index}>{categoria}</li>
            ))}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardTop;
