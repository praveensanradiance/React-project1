import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Home from "./Home";
import Reacts from './Reacts';
import { Container } from 'react-bootstrap';
function Menu(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return(
        <>
        <Home/>
        <Reacts/>
        <Container fluid className='mt-5'>
        <Button variant="light" onClick={handleShow}>
        Board
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
       
      </Offcanvas>

        </Container>
       
        </>
    )
}

export default Menu;