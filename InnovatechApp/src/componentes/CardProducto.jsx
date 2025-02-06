import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Producto.css'
import img from '../img/logo.png'

function CardProducto() {
  return (
    <Card className='cardProducto'>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Nombre Producto</Card.Title>
        <Card.Text>
          Breve Descripcion del producto
        </Card.Text>
        <Button variant="primary">Favorito</Button>
      </Card.Body>
    </Card>
  );
}

export default CardProducto;