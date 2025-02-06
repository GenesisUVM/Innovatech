import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Producto.css'
import img from '../img/mas.png'

function CardMas({onClick}) {
  return (
    <Card className='cardProducto'>
      <Card.Body>
        <Button variant="primary" onClick={onClick}><img src={img} /></Button>
      </Card.Body>
    </Card>
  );
}

CardMas.propTypes = {
    onClick: PropTypes.func.isRequired, 
  };


export default CardMas;