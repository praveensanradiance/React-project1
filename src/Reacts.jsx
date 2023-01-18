import React from "react";
import { Container } from "react-bootstrap";
import './reacts.css';
import Button from 'react-bootstrap/Button';

function Reacts(){
    return(
        <>
      
        <Container fluid className="upper">
        <h1 className="text-center pt-4 fs-1">React</h1>
        <h4 className="text-center pt-4">A JavaScript library for building user interfaces</h4>
        <div className="text-center mt-4 pb-4">
        <Button className="mx-auto" href="/register" variant="secondary">Register</Button>
        </div>

       
       
        </Container>
        <div className="row justify-content-center mx-5 mt-5">
            <div className="col-md-4">
                <h5>Declarative</h5>
                <br />
                
                <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
                <br />
                <p>
                Declarative views make your code more predictable and easier to debug.
                </p>
            </div>
            <div className="col-md-4">
                <h5>Learn Once, Write Anywhere</h5>
                <br />
                
                <p>We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.</p>
                <br />
                <p>
                React can also render on the server using Node and power mobile apps using React Native.
                </p>
            </div>
            <div className="col-md-4">
                <h5>Component-Based</h5>
                <br />
                
                <p>Build encapsulated components that manage their own state, then compose them to make complex UIs</p>
                <br />
                <p>
                Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
                </p>
            </div>
        </div>
        </>
    )
}
export default Reacts;