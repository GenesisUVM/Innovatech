import { Link } from 'react-router-dom';
import FormRegistro from '../componentes/FormRegustro'
import './Paginas.css'

function Resgistro(){
    return(
        <div className='login'>
        <FormRegistro />
        <Link to={'/'} className='links'>Inicia Sesion</Link>
        </div>
    )
};

export default Resgistro;