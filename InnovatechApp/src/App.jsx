import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Administrador from "./paginas/Administrador"
import Usuarios from "./paginas/Usuarios"
import Login from "./paginas/Login"
import Resgistro from "./paginas/Registro"
import LoginAdm from "./paginas/LoginAdm"


function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/loginAdm' element={<LoginAdm />} />
      <Route path='/registro' element={<Resgistro/>} />
      <Route path='/usuarios' element={<Usuarios/>} />
      <Route path='/administrador' element={<Administrador />} />
      </Routes> 
    </BrowserRouter> 
  )
}

export default App
