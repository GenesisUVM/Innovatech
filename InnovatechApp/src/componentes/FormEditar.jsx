import PropTypes from "prop-types"; 
import Form from 'react-bootstrap/Form';
import './Forms.css'

  


function FormEditar({ producto }) {
  return (
    <Form className='formProductos'>
        <h2>Añadir Producto</h2>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="inputNombre">Nombre</Form.Label>
            <Form.Control
                type="text"
                id="inputNombre"
                defaultValue={producto.nombre}
            />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="inputDescripcion">Descripcion</Form.Label>
            <Form.Control
                type="text"
                id="inputDescripcion"
                defaultValue={producto.descripcion}
            />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="inputPrecio">Precio</Form.Label>
            <Form.Control
                type="number"
                id="inputPrecio"
                defaultValue={producto.precio}
            />
        </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label htmlFor="inputCantidad">Cantidad</Form.Label>
            <Form.Control
                type="number"
                id="inputCantidad"
                defaultValue={producto.cantidad}
            />
        </Form.Group>
        
        <Form.Group className="mb-3">
            <Form.Label htmlFor="inputCategoria">Categoria</Form.Label>
            <Form.Control
                type="text"
                id="inputCategoria"
                defaultValue={producto.categoria}
            />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="inputCategoria">Imagen</Form.Label>
            <Form.Control
                type="text"
                id="inputCategoria"
                placeholder="URL de la imagen"
            />
        </Form.Group>
      
      
    </Form>
  );
}

FormEditar.propTypes = {
    producto: PropTypes.shape({
        nombre: PropTypes.string.isRequired,
        descripcion: PropTypes.string.isRequired,
        precio: PropTypes.number.isRequired,
        cantidad: PropTypes.number.isRequired,
        categoria: PropTypes.string.isRequired,
    }).isRequired,
};

export default FormEditar;