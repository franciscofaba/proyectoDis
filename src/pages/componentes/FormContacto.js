import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormContacto() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
  
    setMessageSent(true);
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={handleChangeEmail}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Deja tu mensaje (máximo 50 caracteres)</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={message}
          onChange={handleChangeMessage}
          maxLength={50}
        />
        <small>{message.length}/50 caracteres</small>
      </Form.Group>
      <Button style ={{backgroundColor : "#c875156d", borderColor: '#9a5b136d' }} onClick={handleSendMessage}>
        Enviar
      </Button>
      {messageSent && <p>Hemos recibido tu mensaje, nos pondremos en contacto contigo lo antes posible.</p>}
    </Form>
  );
}

export default FormContacto;
