import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import { Container, Button, Form, Navbar, Nav, NavDropdown, Offcanvas, Image } from 'react-bootstrap';
import './css/topnavbar.css';
import logo from './images/logo.png'


export default class TopNavbar extends Component {
    render() {
        return (
            <Navbar key='lg' expand='lg' className="bg-body-tertiary mb-0">
                <Container fluid>
                    <Navbar.Brand href="/" className="ms-left">
                        <Image src = { logo } roundedCircle height="40" className="d-inline-block align-top" alt="DragonEyeX Logo" />
                        <span className="ms-2 ">DragonEyeX</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-$'lg'`} />
                    <Navbar.Offcanvas id={`offcanvasNavbar-expand-$'lg'`} aria-labelledby={`offcanvasNavbarLabel-expand-$'lg'`} placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-$'lg'`}>
                            DragonEyeX
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/register">Register</Nav.Link>
                        <Nav.Link href="/solution">Solution</Nav.Link>
                        <NavDropdown title="More" id={`offcanvasNavbarDropdown-expand-$'lg'`}>
                            <NavDropdown.Item href="#AboutUs">
                                About Us
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Documentation
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#Testimonials">
                                Testimonials
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Settings
                            </NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        )
    }
}