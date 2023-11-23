import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

function CardFAQ({ pregunta }) {
  const [mostrarRespuesta, setMostrarRespuesta] = useState(false);

  const toggleRespuesta = () => {
    setMostrarRespuesta(!mostrarRespuesta);
  };

  return (
    <Card>
      <Card.Header style= {{backgroundColor : "rgb(240, 54, 228)"}} onClick={toggleRespuesta}>
      {pregunta}
      </Card.Header>
      {mostrarRespuesta && (
        <Card.Body>
          <Card.Text>
            Respuesta a la pregunta frecuente: "{pregunta}".
          </Card.Text>
        </Card.Body>
      )}
    </Card>
  );
}

export default CardFAQ;

