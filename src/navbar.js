import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Bar = () => {

  const [input, setInput] = useState();
  const [validInput, setValidInput] = useState(false);

  const checkInput = () => {
    return input >= 1 && input <=1000;
  }

  useEffect(() => {
    console.log(checkInput());
    setValidInput(checkInput);
  }, [input])

  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">Gameify</Navbar.Brand>
      <Nav className="justify-content-end">
        <Link className='nav-link' to={"/"}>Home</Link>
        <Link className='nav-link' to="/store">Store</Link>
        <Link className='nav-link' to="/about">About</Link>
        <Link className='nav-link' to="/forum">Discussion Forum</Link>
      </Nav>
      <Form className="d-flex">
            <Form.Control
              type="search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Game ID"
              className="me-2"
              aria-label="Search"
            />
            {validInput && <Link to={"/games/"+input}><Button variant="success">Search</Button></Link>}
            {!validInput && <Button variant="danger" disabled>Search</Button>}
            
          </Form>
    </Container>
  </Navbar>
  );
}

export default Bar;