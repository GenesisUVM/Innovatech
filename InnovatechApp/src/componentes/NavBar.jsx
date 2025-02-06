import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import logo from '../img/logo.png'

function NavBar() {
    return(
        <Navbar expand="lg" className="custom-navbar">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="logo" />
                    InnovaTech
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
    
}

export default NavBar;