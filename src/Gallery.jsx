import React from "react";
import Home from './Home';
import Accordion from 'react-bootstrap/Accordion';
import { Container } from "react-bootstrap";


function Gallery(){
    return(
        <>
        <Home/>
        <Container className="pt-5">
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>React JS</Accordion.Header>
        <Accordion.Body>
        React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Angular JS</Accordion.Header>
        <Accordion.Body>
        Angular is an open-source, JavaScript framework written in TypeScript. Google maintains it, and its primary purpose is to develop single-page applications. As a framework, Angular has clear advantages while also providing a standard structure for developers to work with.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Container>
        </>
    )
}

export default Gallery;