import Buscador from "./Buscador"
import Productos from "./Productos"

import './Seccion.css'


function Favoritos(){
    return(
        <div className="seccion">
      
        <Buscador />
       <Productos/>
        </div>
    )
};

export default Favoritos