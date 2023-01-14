//Importaciones
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return(
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink className="text-white text-decoration-none" to="/">Happy Cake</NavLink>
          <Nav className="justify-contente-end">
            <NavLink to="/" className="text-white text-decoration-none ms-3">Home</NavLink>
            <NavLink to="/contact" className="text-white text-decoration-none ms-3">Contact</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;