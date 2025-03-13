import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {navLinks} from '../data/index';
import Button from 'react-bootstrap/Button';

function NavbarComponent() {
  return (
    <Navbar id='navbar' expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/">Ngodinx</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {navLinks.map((link) => {
                  return(
                    <div key={link.id}>
                      <Nav.Link href={`/${link.path}`}>{link.text}</Nav.Link>
                      </div>
                  )
                })}
              </Nav>

              <Button>Login</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  )
}

export default NavbarComponent