import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Forms.css'

function FormRegistro() {
  return (
    <Form className='formRegistro'>
        <h2>Formulario de registro</h2>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="inputNombre">Nombre</Form.Label>
            <Form.Control
                type="text"
                id="inputNombre"
            />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="inputApellido">Apellido</Form.Label>
            <Form.Control
                type="text"
                id="inputApellido"
            />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="inputCorreo">Correo</Form.Label>
            <Form.Control
                type="email"
                id="inputCorreo"
            />
        </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label htmlFor="inputPassword">Contraseña</Form.Label>
            <Form.Control
                type="password"
                id="inputPassword"
            />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="inputCPassword">Nombre</Form.Label>
            <Form.Control
                type="password"
                id="inputCPassword"
            />
        </Form.Group>
        <Button variant="primary" type="submit">
        Enviar
      </Button>
      
    </Form>
  );
}

export default FormRegistro;