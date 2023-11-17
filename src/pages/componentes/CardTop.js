import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardTop() {
  return (
    <Card>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardTop;