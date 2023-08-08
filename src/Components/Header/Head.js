import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import './Head.css';
const Head = ()=>{
    return(
        <div>
            <Navbar expand="lg" className="navbar">
                <Container>
                    <Navbar.Brand href="/">Fuad</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>  
                        <Nav.Link href="#project">About</Nav.Link>
                        <Nav.Link href="#home">Services</Nav.Link>
                        <Nav.Link href="#home">Contact</Nav.Link>
                        
                    </Nav>
                    <Nav className="ms-auto">
                        <button className="btn btn-success ">Contact Me</button>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Head;