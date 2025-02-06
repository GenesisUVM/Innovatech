import PropTypes from "prop-types"; import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Producto.css'
import img from '../img/logo.png'

function CardProducto({producto, onClick}) {
  return (
    <Card className='cardProducto' onClick={onClick}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>
        {producto.descripcion}
        </Card.Text>
        <Button variant="primary">Favorito</Button>
        <Button variant="primary">Eliminar</Button>
      </Card.Body>
    </Card>
  );
}

CardProducto.propTypes = {
    producto: PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
  };

export default CardProducto;