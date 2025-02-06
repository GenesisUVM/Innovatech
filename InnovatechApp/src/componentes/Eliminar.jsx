import Button from 'react-bootstrap/Button';
import './Forms.css'

function Eliminar(){
    return(
        <div className='contenedorEliminar'>
            <h3>Esta seguro de que quiere eliminar el producto?</h3>
            <div className='botones'>
                <Button variant="info">SI</Button>
                <Button variant="danger">NO</Button>
            </div>
        </div>
    )
};

export default Eliminar