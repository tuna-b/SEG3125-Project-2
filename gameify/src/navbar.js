import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Bar() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">Gameify</Navbar.Brand>
      <Nav className="justify-content-end">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="store">Store</Nav.Link>
        <Nav.Link href="forum">Discussion Forum</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
}

export default Bar;