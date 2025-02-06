import { useState } from "react";
import SideBar from '../componentes/SideBar'
import Seccion from '../componentes/Seccion'
import './Paginas.css'
import NavUsuarios from '../componentes/NavUsuarios'
import Favoritos from "../componentes/Favoritos";

function Usuarios(){
    const [mostrarFavoritos, setMostrarFavoritos] = useState(false); // Estado para controlar qué componente mostrar

  // Función para manejar el clic en la imagen de favoritos
  const handleFavClick = () => {
    setMostrarFavoritos(true); // Cambia el estado para mostrar Favoritos
  };
    return(
        <>
            <NavUsuarios onFavClick={handleFavClick}/>
            <SideBar />
            {mostrarFavoritos ? <Favoritos /> : <Seccion />}
        </>
    )
};

export default Usuarios