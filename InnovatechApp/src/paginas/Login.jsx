import { Link } from 'react-router-dom';
import FormUsuario from '../componentes/FormUsuarios'
import './Paginas.css'

function Login(){
    return(
        <div className='login'>
            <FormUsuario/>
            <Link to={'/registro'} className='links'>Registrate</Link>
            <Link to={'/loginAdm'} className='links'>Inicia Sesion como Administrador</Link>
        </div>
    )
};

export default Login 