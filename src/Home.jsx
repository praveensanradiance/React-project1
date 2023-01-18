import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';


function Home(){
    return(
        <>
        
         <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href=""><Nav.Link href="/menu">Home</Nav.Link></Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link href="/about">Members</Nav.Link>
            <Nav.Link href="/dashboard">DashBoard</Nav.Link>
            <Nav.Link href="/hook">Content</Nav.Link>
            <Nav.Link href="/gallery">UI</Nav.Link>
          </Nav>
        
        <Dropdown className="pe-3">
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Admin
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/register">Register</Dropdown.Item>
        <Dropdown.Item href="/help">Help</Dropdown.Item>
        <Dropdown.Item href="/menu">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </Container>
      </Navbar>
        </>
    )
}

export default Home;