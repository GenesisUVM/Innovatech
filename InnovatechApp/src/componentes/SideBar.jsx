import ListGroup from 'react-bootstrap/ListGroup';
import './NavBar.css'

function SideBar() {
  return (
    <div className='contBar'>
        <h2>Categorias</h2>
      <ListGroup horizontal className='sideBar'>
        {/* <ListGroup.Item as="li" active>Dispositivos moviles</ListGroup.Item> */}
        <ListGroup.Item className='item'>Dispositivos moviles</ListGroup.Item>
        <ListGroup.Item className='item'>Computadoras</ListGroup.Item>
        <ListGroup.Item className='item'>Electronica</ListGroup.Item>
        <ListGroup.Item className='item'>Electrodomesticos</ListGroup.Item>
        <ListGroup.Item className='item'>Gadgets y wearable</ListGroup.Item>
        <ListGroup.Item className='item'>Componentes</ListGroup.Item>
        <ListGroup.Item className='item'>Hogar Inteligente</ListGroup.Item>
        <ListGroup.Item className='item'>Equipos de Redes</ListGroup.Item>
        <ListGroup.Item className='item'>Energia</ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default SideBar;

       
            
            
