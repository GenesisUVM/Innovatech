import NavBar from '../componentes/NavBar'
import SideBar from '../componentes/SideBar'
import './Paginas.css'
import Buscador from '../componentes/Buscador'
import ProductosAdm from '../componentes/ProductosAdm'

function Administrador(){
    return(
        <>
            <NavBar />
            <SideBar />
            <Buscador />
            <ProductosAdm />
        </>
    )
};

export default Administrador;