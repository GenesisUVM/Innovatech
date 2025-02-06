import { Link } from 'react-router-dom';
import FormAdm from '../componentes/FormAdm';
import './Paginas.css'

function LoginAdm(){
    return(
        <div className='login'>
            <FormAdm/>
            <Link to={'/registro'} className='links'>Registrate</Link>
            <Link to={'/'} className='links'>Inicia Sesion como Usuario</Link>
        </div>
    )
};

export default LoginAdm;