import Form from 'react-bootstrap/Form';
import './Buscador.css'

function Buscador(){
    return(
        <>
          <Form.Control type="text" placeholder='Buscar Producto' className='buscador'/>
        </>
    )
};

export default Buscador