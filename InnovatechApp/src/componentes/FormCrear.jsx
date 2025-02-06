import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Forms.css'

function FormCrear() {
  return (
    <Form className='formProductos'>
        <h2>Añadir Producto</h2>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="inputNombre">Nombre</Form.Label>
            <Form.Control
                type="text"
                id="inputNombre"
            />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="inputDescripcion">Descripcion</Form.Label>
            <Form.Control
                type="text"
                id="inputDescripcion"
            />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="inputPrecio">Precio</Form.Label>
            <Form.Control
                type="number"
                id="inputPrecio"
            />
        </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label htmlFor="inputCantidad">Cantidad</Form.Label>
            <Form.Control
                type="number"
                id="inputCantidad"
            />
        </Form.Group>
        
        <Form.Group className="mb-3">
            <Form.Label htmlFor="inputCategoria">Categoria</Form.Label>
            <Form.Control
                type="text"
                id="inputCategoria"
            />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="inputCategoria">Imagen</Form.Label>
            <Form.Control
                type="image"
                id="inputCategoria"
            />
        </Form.Group>
        <Button variant="primary" type="submit">
        Enviar
      </Button>
      
    </Form>
  );
}

export default FormCrear;