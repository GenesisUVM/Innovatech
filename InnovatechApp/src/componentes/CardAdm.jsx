import PropTypes from "prop-types"; 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Producto.css'
import img from '../img/logo.png'

function CardProducto({producto, onEditClick, onDeleteClick}) {
  return (
    <Card className='cardProducto'>
      <Card.Img
        variant="top"
        src={img}
        onClick={onEditClick} // Llama a la función para abrir la modal
        style={{ cursor: "pointer" }} // Añade un cursor para indicar que es clickeable
      />
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>{producto.descripcion}</Card.Text>
        <Card.Text>{producto.precio}</Card.Text>
        <Card.Text>{producto.cantidad}</Card.Text>
        <Card.Text>{producto.categoria}</Card.Text>
        <div className="d-flex justify-content-between">
            <Button variant="primary">Favorito</Button>
            <Button variant="danger" onClick={onDeleteClick}>Eliminar</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

CardProducto.propTypes = {
    producto: PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
      precio: PropTypes.string.isRequired,
      cantidad: PropTypes.string.isRequired,
      categoria: PropTypes.string.isRequired,
    }).isRequired,
    onEditClick: PropTypes.func.isRequired, 
  onDeleteClick: PropTypes.func.isRequired, 
  };

export default CardProducto;