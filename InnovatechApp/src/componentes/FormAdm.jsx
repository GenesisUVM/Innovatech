import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Forms.css'

function FormAdm() {
  return (
    <Form className='formRegistro'>
        <h2>Inicia Sesion Administrador</h2>
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
      
        <Button variant="primary" type="submit">
        Enviar
      </Button>
      
    </Form>
  );
}

export default FormAdm;