import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

const OffCanvas = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <div className='text-center my-3'>
            <h2 className='my-3'>Click Button To Sort Store By a Genre!</h2>
        <Button variant="primary" onClick={handleShow}>
        Sort Genre
      </Button>
        </div>


      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Game Genres</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h3 className="text-center">To Sort Store Games, Click a Genre!</h3>
          <div className="text-center">

          <Link to={"horror"}>Horror</Link>
          <div></div>
          <Link to={"comedy"}>Comedy</Link>
          <div></div>
          <Link to={"drama"}>Drama</Link>
          <div></div>
          <Link to={"Romance"}>Romance</Link>
          <div></div>
          <Link to={"war"}>War</Link>
          <div></div>
          <Link to={"adventure"}>Adventure</Link>
          <div></div>
          <Link to={"horror"}>Mystery</Link>
          <div></div>
          <Link to={"thriller"}>Thriller</Link>
          <div></div>
          <Link to={"Sci-Fi"}>Sci-Fi</Link>
          </div>
          
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas;