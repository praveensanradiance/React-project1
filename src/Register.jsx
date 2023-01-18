import React from "react";
import Home from './Home';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from "react-bootstrap";


function Register(){
    return(
        <>
        <Home/>
        <h3 className="text-center mt-5 mb-5">Register</h3>
        <Container>
        <Form className="row g-3 mb-5">
      <Form.Group className="col" controlId="formBasicName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name"/>
        
      </Form.Group>

      <Form.Group className="col" controlId="formBasicName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" />
      </Form.Group>

     
    </Form>
    <Form className="row g-3">
      <Form.Group className="col" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email" placeholder="Email"/>
        
      </Form.Group>

      <Form.Group className="col" controlId="formBasicName">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="accept all Cokiees" />
      </Form.Group>
     
    </Form>
    <Button href="/about" variant="primary" type="submit">
        Submit
      </Button>
        </Container>
       
        </>
    )
}

export default Register;