import React, { Component } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import './Footer.css';


export default class Footer extends Component {
    render() {
        const currentYear = new Date().getFullYear();

        return (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                    <symbol id="facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </symbol>
                </svg>

                <div className="footer-content border-top">
                    <footer className="py-5">
                        <Row>
                            <Col md={1} className="col-md-2 mb-3">
                                <h5>Services</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#home" className="nav-link p-0 text-muted">Home</a></li>
                                    <li className="nav-item mb-2"><a href="#home" className="nav-link p-0 text-muted">Features</a></li>
                                    <li className="nav-item mb-2"><a href="#home" className="nav-link p-0 text-muted">Pricing</a></li>
                                    <li className="nav-item mb-2"><a href="#home" className="nav-link p-0 text-muted">FAQs</a></li>
                                    <li className="nav-item mb-2"><a href="#home" className="nav-link p-0 text-muted">About</a></li>
                                </ul>
                            </Col>

                            <Col md={1} className="col-md-2 mb-3">
                                <h5>Product</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#home" className="nav-link p-0 text-muted">Home</a></li>
                                    <li className="nav-item mb-2"><a href="#home" className="nav-link p-0 text-muted">Features</a></li>
                                    <li className="nav-item mb-2"><a href="#home" className="nav-link p-0 text-muted">Pricing</a></li>
                                    <li className="nav-item mb-2"><a href="#home" className="nav-link p-0 text-muted">FAQs</a></li>
                                    <li className="nav-item mb-2"><a href="#home" className="nav-link p-0 text-muted">About</a></li>
                                </ul>
                            </Col>

                            <Col md={1} className="col-md-2 mb-3">
                                <h5>About</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#home" className="nav-link p-0 text-muted">About Us</a></li>
                                    <li className="nav-item mb-2"><a href="#home" className="nav-link p-0 text-muted">Features</a></li>
                                    <li className="nav-item mb-2"><a href="#home" className="nav-link p-0 text-muted">Our Partners</a></li>
                                    <li className="nav-item mb-2"><a href="#home" className="nav-link p-0 text-muted">Pricing</a></li>
                                    <li className="nav-item mb-2"><a href="#home" className="nav-link p-0 text-muted">dsf</a></li>
                                </ul>
                            </Col>

                            <Col md={1} className="col-md-2 mb-3">
                                <h5>Contact</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#home" className="nav-link p-0 text-muted">Contact Us</a></li>
                                    <li className="nav-item mb-2"><a href="#home" className="nav-link p-0 text-muted">Help Desk</a></li>
                                    <li className="nav-item mb-2"><a href="#home" className="nav-link p-0 text-muted">Live Chat</a></li>
                                    <li className="nav-item mb-2"><a href="#home" className="nav-link p-0 text-muted">FAQs</a></li>
                                    <li className="nav-item mb-2"><a href="#home" className="nav-link p-0 text-muted">About</a></li>
                                </ul>
                            </Col>

                            <Col className="offset-md-0 mb-3">
                                <Form>
                                    <h5>Subscribe to our newsletter</h5>
                                    <p>Monthly digest of what's new and exciting from us.</p>
                                    <div className="d-flex flex-column flex-sm-row w-100">
                                        <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                        <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                        <button className="btn btn-primary" type="button">Subscribe</button>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                        <Row className="d-flex flex-column flex-sm-row justify-content-center py-4 my-10 border-top">
                            <p align="center">&copy; { currentYear } DragonEyeX, Inc. All rights reserved.</p>
                            {/* <ul className="list-unstyled d-flex">
                                <li className="ms-3"><a className="link-dark" href="#home"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"/></svg></a></li>
                                <li className="ms-3"><a className="link-dark" href="#home"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"/></svg></a></li>
                                <li className="ms-3"><a className="link-dark" href="#home"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"/></svg></a></li>
                            </ul> */}
                        </Row>
                    </footer>
                </div>
                    
            </>
        )
    }
}