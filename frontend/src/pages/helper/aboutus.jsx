import React, { Component } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

import "./css/aboutus.css";

import image21 from "./images/image21.jpg";
import image22 from "./images/image22.jpg";
import image23 from "./images/image23.jpg";


export default class AboutUS extends Component{
    render() {
        return (
            <>
                <section id="AboutUs" className="py-3 py-md-5 py-xl-8">
                    <div className='aboutus'>
                        <Row>
                            <Col md={10} lg={8}>
                                <h3 className="fs-5 mb-2 text-secondary text-uppercase">About Us</h3>
                                <h2 className="display-6 mb-4">Our journey began with a dream of redefining how the world perceives design.</h2>
                                <Button variant="primary" size="lg" className="mb-3 mb-md-4 mb-xl-5">Discover More</Button>
                            </Col>
                        </Row>
                        <Row className="gy-4 gy-lg-0">
                            <Col md={6}>
                                <Card className="border-0">
                                    <Card.Img variant="top" src={ image21 } alt="Our Vision" />
                                    <Card.Body className="border bg-auto p-4">
                                        <Card.Title className="entry-title h4 mb-0">
                                            Our Vision
                                        </Card.Title>
                                        <Card.Text className="entry-summary text-secondary mb-3">
                                            From sleek modernism to timeless elegance, we infuse every creation with a touch of our artistic ingenuity. As a design agency, great design can shape perceptions, inspire action, and leave an indelible mark on the world.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className="border-0">
                                    <Card.Img variant="top" src={ image22 } alt="Our Approach" />
                                    <Card.Body className="border bg-auto p-4">
                                        <Card.Title className="entry-title h4 mb-0">
                                            Our Approach
                                        </Card.Title>
                                        <Card.Text className="entry-summary text-secondary mb-3">
                                            Welcome to our design agency, where creativity knows no bounds and innovation takes center stage. We are a team of dedicated designers, strategists, and visionaries with a passion for transforming ideas into captivating visuals.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="justify-content-center align-items-center my-5">
                            <Col md={5}>
                                <img className="img-fluid rounded" src={ image23 } alt="About 1" />
                            </Col>
                            <Col md={7}>
                                <h2>Who Are We?</h2>
                                <p className="lead fs-4 text-secondary mb-3">We help people to build incredible brands and superior products. Our perspective is to furnish outstanding captivating services.</p>
                                <p className="mb-5">We are a fast-growing company, but we have never lost sight of our core values. We believe in collaboration, innovation, and customer satisfaction. We are always looking for new ways to improve our products and services.</p>
                                <Row className="gy-4 gy-md-0 gx-xxl-5X">
                                    <Col md={6}>
                                        <div className="d-flex align-items-center">
                                            <div className="me-4 text-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                                                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="h4 mb-3">Versatile Brand</h4>
                                                <p className="text-secondary mb-0">We are crafting a digital method that subsists life across all mediums.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="d-flex align-items-center">
                                            <div className="me-4 text-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-fire" viewBox="0 0 16 16">
                                                    <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h2 className="h4 mb-3">Digital Agency</h2>
                                                <p className="text-secondary mb-0">We believe in innovation by merging primary with elaborate ideas.</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </section>
            </>
        )
    };
}