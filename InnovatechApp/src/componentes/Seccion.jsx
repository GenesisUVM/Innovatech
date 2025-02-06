import Buscador from "./Buscador"
import Productos from "./Productos"

import './Seccion.css'


function Seccion(){
    return(
        <div className="seccion">
      
        <Buscador />
       <Productos/>
        </div>
    )
};

export default Seccion