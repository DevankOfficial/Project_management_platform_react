import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

import './css/slider.css';


export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(selectedIndex) {
        this.setState({
            index: selectedIndex
        });
    }

    render() {
        const { slides } = this.props;
        const { index } = this.state;

        return (
            <Carousel activeIndex={index} onSelect={this.handleSelect}>
                {Object.keys(slides).map((imgSrc, idx) => (
                    <Carousel.Item key={idx}>
                        <div className='image-container'>
                            <img
                                className="responsive-image d-block"
                                src={imgSrc}
                                alt={`${idx}`}
                            />
                        </div>
                        <Carousel.Caption>
                            {slides[imgSrc][1]}
                            {slides[imgSrc][2]}
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        );
    }
}