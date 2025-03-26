import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import './css/testimonials.css';


const images = [
    "https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300",
    "https://images.unsplash.com/photo-1588361035994-295e21daa761?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=301",
    "https://images.unsplash.com/photo-1575377222312-dd1a63a51638?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=302&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=302",
    "https://images.unsplash.com/photo-1549836938-d278c5d46d20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=303&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=303"
];

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1024 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 1024, min: 680 },
        items: 2
    },
    tablet: {
        breakpoint: { max: 680, min: 0 },
        items: 1
    }
};

export default class Testimonials extends React.Component {
    render() {
        return (
            <section id="Testimonials" className="gtco-testimonials">
                <Container>
                    <h2>Testimonials</h2>
                    <Carousel responsive={responsive} showDots={true} infinite={true} position="none">
                        {images.map((src, index) => (
                            <div className="item" key={index}>
                                <Card className="text-center">
                                    <Card.Img variant="top" src={src} alt="" />
                                    <Card.Body>
                                        <Card.Title>Person {index + 1}<br /><span>Position</span></Card.Title>
                                        <Card.Text>“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat ”</Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </Carousel>
                </Container>
            </section>
        );
    }
}
