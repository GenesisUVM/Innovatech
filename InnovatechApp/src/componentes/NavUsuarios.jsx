import PropTypes from "prop-types";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import logo from '../img/logo.png'
import fav from '../img/estrella.png'

function NavUsuarios({ onFavClick }) {
    return(
        <Navbar expand="lg" className="custom-navbar">
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="logo" />
                    InnovaTech
                </Navbar.Brand>
                <img src={fav} width='30' className='d-inline-block align-top' alt='favoritos'onClick={onFavClick} style={{ cursor: "pointer" }}/>
            </Container>
        </Navbar>
    )
    
};
    NavUsuarios.propTypes = {
        onFavClick: PropTypes.func.isRequired, 
    };
export default NavUsuarios;